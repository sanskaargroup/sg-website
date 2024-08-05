import {useState} from "react";
import {countryList} from "../../utils/countryList";
import {careersFormSchema} from "../../utils/schema";
import toast, {Toaster} from "react-hot-toast";

import "./careersForm.css";

const port = import.meta.env.VITE_PORT;

const CareersForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: 0,
		country: "India",
		city: "",
		skills: "",
	});

	const [formErrors, setFormErrors] = useState(null);

	const handleChange = (e) => {
		console.log("in handle change, e.target:", e.target);
		const {name, value} = e.target;
		if (name === "phone") {
			let newValue = parseInt(value);
			setFormData({...formData, [name]: newValue});
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
				email: formData.email,
				phone: formData.phone,
				country: formData.country,
				city: formData.city,
				skills: formData.skills,
			});

			if (!validatedFields.success) {
				const formErrors = {errors: validatedFields.error.flatten().fieldErrors};
				console.log("Form Errors:", formErrors);
				setFormErrors(formErrors);
			} else {
				setFormErrors(null);
				console.log("sending data to server");
				const response = await fetch(`http://localhost:${port}/career`, {
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
							<p style={{color: "red"}}>Name must:</p>
							{formErrors.errors.name}
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
							<p style={{color: "red"}}>Email must:</p>
							{formErrors.errors.email}
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
							<p style={{color: "red"}}>phone must:</p>
							{formErrors.errors.phone}
						</div>
					)}
				</div>
				<div className="form-group">
					<label>
						Country
						<select type="string" name="country" placeholder="Country" onChange={handleChange}>
							{countryList.map((country) => (
								<option key={country} value={country}>
									{country}
								</option>
							))}
						</select>
					</label>

					{formErrors && formErrors.errors.country && (
						<div style={{fontSize: "14px", color: "red"}}>
							<p style={{color: "red"}}>Country must:</p>
							{formErrors.errors.country}
						</div>
					)}
				</div>
				<div className="form-group">
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
			<Toaster position="bottom-right" reverseOrder={false} />
		</div>
	);
};

export default CareersForm;

