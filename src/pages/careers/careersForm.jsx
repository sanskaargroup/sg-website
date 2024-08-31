import {useState} from "react";
import {countryList} from "../../utils/countryList";
import {careersFormSchema} from "../../utils/schema";
import toast, {Toaster} from "react-hot-toast";

import "./careersForm.css";

const base_url = import.meta.env.VITE_BASE_URL;

const CareersForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: 0,
		aadhar: 0,
		yoe: 0,
		email: "",
		address: "",
		// country: "India",
		// skills: "",
	});

	const [formErrors, setFormErrors] = useState(null);

	const handleChange = (e) => {
		console.log("in handle change, e.target:", e.target);
		const {name, value} = e.target;

		if (name === "phone" || name === "aadhar" || name === "yoe") {
			// Convert value to a number for both phone and aadhar fields
			const numericValue = Number(value);
			setFormData({...formData, [name]: numericValue});
		} else {
			setFormData({...formData, [name]: value});
		}

		console.log(formData);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const validatedFields = careersFormSchema.safeParse({
				name: formData.name,
				phone: formData.phone,
				aadhar: formData.aadhar,
				yoe: formData.yoe,
				email: formData.email,
				address: formData.address,
			});

			if (!validatedFields.success) {
				const formErrors = {errors: validatedFields.error.flatten().fieldErrors};
				console.log("Form Errors:", formErrors);
				setFormErrors(formErrors);
			} else {
				setFormErrors(null);
				console.log("sending data to server");
				const response = await fetch(`${base_url}/career`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});

				const data = await response.json();
				console.log("response: ", data);

				if (!response.ok) {
					toast.error(data.message);
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				toast.success(data.message);
			}
		} catch (error) {
			console.error("Error fetching data:", error); // Handle fetch errors
			toast.error("Internal Server Error, please contact Administrator");
		}
	};

	return (
		<div className="career-container">
			<form onSubmit={handleSubmit} className="career-form">
				<h2>Careers Form</h2>
				<div className="form-group">
					<label>
						Name *
						<input type="text" placeholder="Name" name="name" onChange={handleChange} required />
					</label>
					{formErrors && formErrors.errors.name && (
						<div style={{fontSize: "14px", color: "red"}}>
							<ul>
								{formErrors.errors.name.map((error, index) => (
									<li key={index}>{error}</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<div className="form-group">
					<label>
						Phone *
						<input type="number" placeholder="Phone" name="phone" onChange={handleChange} />
					</label>
					{formErrors && formErrors.errors.phone && (
						<div style={{fontSize: "14px", color: "red"}}>
							<ul>
								{formErrors.errors.phone.map((error, index) => (
									<li key={index}>{error}</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<div className="form-group">
					<label>
						Aadhar Number *
						<input type="number" placeholder="Aadhar number" name="aadhar" onChange={handleChange} />
					</label>
					{formErrors && formErrors.errors.aadhar && (
						<div style={{fontSize: "14px", color: "red"}}>
							<ul>
								{formErrors.errors.aadhar.map((error, index) => (
									<li key={index}>{error}</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<div className="form-group">
					<label>
						Years of Experience *
						<input type="number" placeholder="Years of Experience" name="yoe" onChange={handleChange} />
					</label>
					{formErrors && formErrors.errors.yoe && (
						<div style={{fontSize: "14px", color: "red"}}>
							<ul>
								{formErrors.errors.yoe.map((error, index) => (
									<li key={index}>{error}</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<div className="form-group">
					<label>
						Email *
						<input type="text" placeholder="Email" name="email" onChange={handleChange} />
					</label>
					{formErrors && formErrors.errors.email && (
						<div style={{fontSize: "14px", color: "red"}}>
							<ul>
								{formErrors.errors.email.map((error, index) => (
									<li key={index}>{error}</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<div className="form-group">
					<label>
						Address
						<input type="text" placeholder="Address" name="address" onChange={handleChange} />
						{/* <select type="string" name="country" placeholder="Country" onChange={handleChange}>
							{countryList.map((country) => (
								<option key={country} value={country}>
									{country}
								</option>
							))}
						</select> */}
					</label>

					{formErrors && formErrors.errors.address && (
						<div style={{fontSize: "14px", color: "red"}}>
							<ul>
								{formErrors.errors.address.map((error, index) => (
									<li key={index}>{error}</li>
								))}
							</ul>
						</div>
					)}
				</div>
				{/* <div className="form-group">
					<label>
						City *
						<input type="text" placeholder="City" name="city" onChange={handleChange} />
					</label>
					{formErrors && formErrors.errors.city && (
						<div style={{fontSize: "14px", color: "red"}}>
							<p style={{color: "red"}}>City must:</p>
							{formErrors.errors.city}
						</div>
					)}
				</div>
				<div className="form-group">
					<label>
						Skills *
						<textarea
							type="text"
							placeholder="skills"
							name="skills"
							value={formData.skills}
							onChange={handleChange}
							required></textarea>
					</label>
					{formErrors && formErrors.errors.skills && (
						<div style={{fontSize: "14px", color: "red"}}>
							<p style={{color: "red"}}>skills must:</p>
							{formErrors.errors.skills}
						</div>
					)}
				</div> */}
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
			<Toaster position="bottom-right" reverseOrder={false} />
		</div>
	);
};

export default CareersForm;
