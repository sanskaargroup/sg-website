import {useState} from "react";
import "./EnquiryForm.css";
import {countryList} from "../utils/countries";

const port = import.meta.env.VITE_PORT;


const EnquiryForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		country: "India",
		city: "",
		query: "",
	});

	// const handleChange = (e) => {
	// 	setFormData({
	// 		...formData,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({...formData, [name]: value});
		console.log(formData);
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(formData);
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`http://localhost:${port}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json(); // Parse response JSON
			console.log("Response:", data); // Log response data
		} catch (error) {
			console.error("Error fetching data:", error); // Handle fetch errors
		}
	};

	return (
		<div className="enquiry-container">
			<form onSubmit={handleSubmit} className="enquiry-form">
				<h2>Enquiry Form</h2>
				<div className="form-group">
					<label>
						Name *
						<input type="text" placeholder="Name" name="name" onChange={handleChange} required />
					</label>
				</div>
				<div className="form-group">
					<label>
						Email *
						<input type="text" placeholder="Email" name="email" onChange={handleChange} />
					</label>
				</div>
				<div className="form-group">
					<label>
						Phone *
						<input type="string" placeholder="Phone" name="phone" onChange={handleChange} />
					</label>
				</div>
				<div className="form-group">
					<label>
						Country
						<select type="string" name="Country" placeholder="Country" onChange={handleChange}>
							{countryList.map((country) => (
								<option key={country} value={country}>
									{country}
								</option>
							))}
						</select>
					</label>
				</div>
				<div className="form-group">
					<label>
						City *
						<input type="text" placeholder="City" name="city" onChange={handleChange} />
					</label>
				</div>
				<div className="form-group">
					<label>
						Query *
						<textarea
							type="text"
							placeholder="Query"
							name="query"
							value={formData.query}
							onChange={handleChange}
							required></textarea>
					</label>
				</div>
				<button type="submit" className="submit-button">
					Send
				</button>
			</form>
			<div className="contact-info">
				<h3>Email:</h3>
				<p>info@sanskaargroup.com</p>
				<p>accounts@sanskaargroup.com</p>
				<p>operations@sanskaargroup.com</p>
				<p>v.chopra@sanskaargroup.com</p>
				<h3>Phone:</h3>
				<p>Vikram Chopra</p>
				<p>Mobile No.: +91 9810169720</p>
				<h3>Regd Office Address:</h3>
				<p>Sanskaar Group</p>
				<p>J-104, FF , IITL NIMBUS, The Hyde Park, </p>
				<p>Sector-78, Noida -201301, India</p>
			</div>
		</div>
	);
};

export default EnquiryForm;
