import React, {useState} from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Owner = () => {
	const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000"; // Replace with your actual backend URL
	console.log("BASE_URL: ", BASE_URL);

	const [selectedTime, setSelectedTime] = useState("");
	const [selectedProfile, setSelectedProfile] = useState(""); // New state for profile
	const [enquiries, setEnquiries] = useState([]);
	const [error, setError] = useState("");

	const handleChangeTime = (event) => {
		setSelectedTime(event.target.value);
	};

	const handleChangeProfile = (event) => {
		setSelectedProfile(event.target.value);
	};

	const handleSubmit = async () => {
		if (!selectedTime || !selectedProfile) {
			setError("Please select both a time duration and a profile.");
			return;
		}
		setError(""); // Reset any previous error messages

		try {
			// Construct the URL with both query parameters
			const response = await fetch(`${BASE_URL}/api/enquirydata?time=${selectedTime}&profile=${selectedProfile}`);
			const result = await response.json();

			if (response.ok) {
				setEnquiries(result.data);
			} else {
				setError(result.message);
			}
		} catch (e) {
			console.error("Error fetching enquiry data:", e);
			setError("Error fetching enquiry data.");
		}
	};

	const exportPDF = () => {
		const doc = new jsPDF();
		doc.autoTable({
			head: [
				selectedProfile === "enquirydata"
					? ["S.No", "Name", "Email", "Phone", "Country", "City", "Query"]
					: ["S.No", "Name", "Email", "Phone", "Aadhar", "YOE", "Address"],
			],
			body: enquiries.map((enquiry, index) =>
				selectedProfile === "enquirydata"
					? [index + 1, enquiry.name, enquiry.email, enquiry.phone, enquiry.country, enquiry.city, enquiry.query]
					: [index + 1, enquiry.name, enquiry.email, enquiry.phone, enquiry.aadhar, enquiry.yoe, enquiry.address],
			),
		});
		doc.save("table_data.pdf");
	};

	return (
		<div style={styles.owner}>
			<h1>Select Time Duration and Profile</h1>
			<select value={selectedTime} onChange={handleChangeTime} style={{marginRight: "10px"}}>
				<option value="" disabled>
					Select duration
				</option>
				<option value="1d">Last 1 day</option>
				<option value="1w">Last 1 week</option>
				<option value="1m">Last 1 month</option>
				<option value="3m">Last 3 months</option>
				<option value="6m">Last 6 months</option>
			</select>

			<select value={selectedProfile} onChange={handleChangeProfile} style={{marginRight: "10px"}}>
				<option value="" disabled>
					Select profile
				</option>
				<option value="enquirydata">Enquiry Data</option>
				<option value="careerdata">Career Data</option>
			</select>

			<button onClick={handleSubmit}>Fetch Data</button>

			{error && <p style={{color: "red"}}>{error}</p>}

			<h2>Enquiry Data</h2>
			{enquiries.length > 0 ? (
				<>
					<table style={styles.table}>
						<thead>
							<tr>
								<th style={styles.th}>S.No</th>
								<th style={styles.th}>Name</th>
								<th style={styles.th}>Email</th>
								<th style={styles.th}>Phone</th>
								{selectedProfile === "enquirydata" ? (
									<>
										<th style={styles.th}>Country</th>
										<th style={styles.th}>City</th>
										<th style={styles.th}>Query</th>
									</>
								) : (
									<>
										<th style={styles.th}>Aadhar</th>
										<th style={styles.th}>YOE</th>
										<th style={styles.th}>Address</th>
									</>
								)}
							</tr>
						</thead>
						<tbody>
							{enquiries.map((enquiry, index) => (
								<tr key={enquiry._id}>
									<td style={styles.td}>{index + 1}</td>
									<td style={styles.td}>{enquiry.name}</td>
									<td style={styles.td}>{enquiry.email}</td>
									<td style={styles.td}>{enquiry.phone}</td>
									{selectedProfile === "enquirydata" ? (
										<>
											<td style={styles.td}>{enquiry.country}</td>
											<td style={styles.td}>{enquiry.city}</td>
											<td style={styles.td}>{enquiry.query}</td>
										</>
									) : (
										<>
											<td style={styles.td}>{enquiry.aadhar}</td>
											<td style={styles.td}>{enquiry.yoe}</td>
											<td style={styles.td}>{enquiry.address}</td>
										</>
									)}
								</tr>
							))}
						</tbody>
					</table>
					<button onClick={exportPDF} style={{marginTop: "10px"}}>
						Export to PDF
					</button>
				</>
			) : (
				<p>No data available for the selected duration and profile.</p>
			)}
		</div>
	);
};

const styles = {
	owner: {
		flex: 1,
		backgroundColor: "#f8f9fa",
		padding: "30px",
		borderRadius: "8px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
		maxWidth: "900px",
		margin: "15rem auto",
		textAlign: "center",
	},
	heading: {
		fontSize: "24px",
		marginBottom: "20px",
		color: "#333",
	},
	select: {
		width: "100%",
		padding: "10px",
		marginBottom: "20px",
		borderRadius: "4px",
		border: "1px solid #ccc",
		fontSize: "16px",
		backgroundColor: "#fff",
		color: "#333",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
	},
	button: {
		backgroundColor: "#007bff",
		color: "white",
		padding: "10px 20px",
		border: "none",
		borderRadius: "4px",
		fontSize: "16px",
		cursor: "pointer",
		marginTop: "20px",
		margin: "4rem",
		transition: "background-color 0.3s ease",
	},
	buttonHover: {
		backgroundColor: "#0056b3",
	},
	table: {
		width: "100%",
		borderCollapse: "collapse",
		marginTop: "20px",
	},
	th: {
		border: "1px solid #ddd",
		padding: "12px",
		textAlign: "left",
		backgroundColor: "#007bff",
		color: "white",
		fontWeight: "bold",
	},
	td: {
		border: "1px solid #ddd",
		padding: "12px",
		textAlign: "left",
		backgroundColor: "#f9f9f9",
		color: "#333",
	},
	error: {
		color: "red",
		marginTop: "10px",
	},
	exportButton: {
		backgroundColor: "#28a745",
		color: "white",
		padding: "10px 20px",
		border: "none",
		borderRadius: "4px",
		fontSize: "16px",
		cursor: "pointer",
		marginTop: "20px",
		transition: "background-color 0.3s ease",
	},
	exportButtonHover: {
		backgroundColor: "#218838",
	},
};

export default Owner;
