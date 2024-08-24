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
			const response = await fetch(`${BASE_URL}/enquirydata?time=${selectedTime}&profile=${selectedProfile}`);
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
				["S.No", "Name", "Email", "Phone", "Country", "City", selectedProfile === "enquirydata" ? "Query" : "Skills"],
			],
			body: enquiries.map((enquiry, index) => [
				index + 1,
				enquiry.name,
				enquiry.email,
				enquiry.phone,
				enquiry.country,
				enquiry.city,
				selectedProfile === "enquirydata" ? enquiry.query : enquiry.skills,
			]),
		});
		doc.save("table_data.pdf");
	};

	return (
		<div>
			<h1>Select Time Duration and Profile</h1>
			<select value={selectedTime} onChange={handleChangeTime}>
				<option value="" disabled>
					Select duration
				</option>
				<option value="1d">Last 1 day</option>
				<option value="1w">Last 1 week</option>
				<option value="1m">Last 1 month</option>
				<option value="3m">Last 3 months</option>
				<option value="6m">Last 6 months</option>
			</select>

			<select value={selectedProfile} onChange={handleChangeProfile}>
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
								<th style={styles.th}>Country</th>
								<th style={styles.th}>City</th>
								<th style={styles.th}>{selectedProfile === "enquirydata" ? "Query" : "Skills"}</th>
							</tr>
						</thead>
						<tbody>
							{enquiries.map((enquiry, index) => (
								<tr key={enquiry._id}>
									<td style={styles.td}>{index + 1}</td>
									<td style={styles.td}>{enquiry.name}</td>
									<td style={styles.td}>{enquiry.email}</td>
									<td style={styles.td}>{enquiry.phone}</td>
									<td style={styles.td}>{enquiry.country}</td>
									<td style={styles.td}>{enquiry.city}</td>
									<td style={styles.td}>{selectedProfile === "enquirydata" ? enquiry.query : enquiry.skills}</td>
								</tr>
							))}
						</tbody>
					</table>
					<button onClick={exportPDF}>Export to PDF</button>
				</>
			) : (
				<p>No data available for the selected duration and profile.</p>
			)}
		</div>
	);
};

const styles = {
	table: {
		width: "100%", // Take the entire width of the container
		borderCollapse: "collapse", // Ensure borders are shared between cells
	},
	th: {
		border: "1px solid black", // Add border to table headers
		padding: "8px",
		textAlign: "left",
		backgroundColor: "#f2f2f2", // Light gray background for headers
	},
	td: {
		border: "1px solid black", // Add border to table data cells
		padding: "8px",
		textAlign: "left",
	},
};

export default Owner;
