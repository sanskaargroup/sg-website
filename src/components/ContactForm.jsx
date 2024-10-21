import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import BackgroundImage from '../image/T4.jpg';
import { countryList } from '../utils/countryList';
import { enquiryFormSchema } from '../utils/schema';
import './ContactForm.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: 0,
        country: 'India',
        city: '',
        query: '',
    });

    const [formErrors, setFormErrors] = useState(null);

    const handleChange = (e) => {
        console.log('in handle change, e.target:', e.target);
        const { name, value } = e.target;
        if (name === 'phone') {
            let newValue = parseInt(value);
            setFormData({ ...formData, [name]: newValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        console.log(formData);
    };

     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const validatedFields = enquiryFormSchema.safeParse({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                country: formData.country,
                city: formData.city,
                query: formData.query,
            });

            if (!validatedFields.success) {
                const formErrors = {
                    errors: validatedFields.error.flatten().fieldErrors,
                };
                console.log('Form Errors:', formErrors);
                setFormErrors(formErrors);
            } else {
                setFormErrors(null);
                const response = await fetch(`${BASE_URL}/api/enquire`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                const data = await response.json(); // Parse response JSON
                console.log('response: ', data);

                if (!response.ok) {
                    toast.error(data.message);
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                toast.success(data.message);
            }
        } catch (error) {
            console.error('Error fetching data:', error); // Handle fetch errors
            toast.error('Internal Server Error, please contact Administrator');
        }
    };
    return (
        <div
            className="contact-form-container"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="contact-form">
                <h2>
                    If you have any questions, please feel free to drop me a
                    line. We will get back to you as soon as we can. Thats a
                    promise!
                </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            className="form-input"
                            onChange={handleChange}
                            required
                        />
                        {formErrors && formErrors.errors.name && (
                            <div style={{ fontSize: '14px', color: 'red' }}>
                                <p style={{ color: 'red' }}>Name must:</p>
                                {formErrors.errors.name}
                            </div>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            onChange={handleChange}
                            className="form-input"
                        />

                        {formErrors && formErrors.errors.email && (
                            <div style={{ fontSize: '14px', color: 'red' }}>
                                <p style={{ color: 'red' }}>Email must:</p>
                                {formErrors.errors.email}
                            </div>
                        )}
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Phone"
                            name="phone"
                            onChange={handleChange}
                            className="form-input"
                        />

                        {formErrors && formErrors.errors.phone && (
                            <div style={{ fontSize: '14px', color: 'red' }}>
                                <p style={{ color: 'red' }}>phone must:</p>
                                {formErrors.errors.phone}
                            </div>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="City"
                            name="city"
                            onChange={handleChange}
                            className="form-input"
                        />

                        {formErrors && formErrors.errors.city && (
                            <div style={{ fontSize: '14px', color: 'red' }}>
                                <p style={{ color: 'red' }}>City must:</p>
                                {formErrors.errors.city}
                            </div>
                        )}
                    </div>
                    <div>
                        <select
                            type="string"
                            name="country"
                            placeholder="Country"
                            onChange={handleChange}
                            className="form-input"
                        >
                            {countryList.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <textarea
                            type="text"
                            placeholder="Query"
                            name="query"
                            value={formData.query}
                            className="form-input"
                            onChange={handleChange}
                            required
                        ></textarea>

                        {formErrors && formErrors.errors.query && (
                            <div style={{ fontSize: '14px', color: 'red' }}>
                                <p style={{ color: 'red' }}>Query must:</p>
                                {formErrors.errors.ciqueryty}
                            </div>
                        )}
                    </div>
                    <button type="submit" className="send-button">
                        SEND MESSAGE
                    </button>
                </form>
                {/* <form>
					<input type="text" name="name" placeholder="Your Name" required className="form-input" />
					<input type="email" name="email" placeholder="Your Email (required)" required className="form-input" />
					<input type="number" name="Phone" placeholder="Number (required)" required className="form-input" />
					<input type="text" name="City" placeholder="City (required)" required className="form-input" />
					<textarea name="message" placeholder="Message (required)" required className="form-textarea"></textarea>
					<button type="submit" className="send-button">
						SEND MESSAGE
					</button>
				</form> */}
            </div>
            <Toaster position="bottom-right" reverseOrder={false} />
        </div>
    );
};

export default ContactForm;
