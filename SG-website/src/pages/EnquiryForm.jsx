import  { useState } from 'react';
import './EnquiryForm.css';

const countries = ["United States", "India", "Canada", "Australia", "United Kingdom", "Germany", "France", "Japan"]; // Add more countries or use a library

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'India',
    city: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="enquiry-container">
      <form onSubmit={handleSubmit} className="enquiry-form">
        <h2>Enquiry Form</h2>
        <div className="form-group">
          <label>
            Name *
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email *
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Phone
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Country
            <select name="country" value={formData.country} onChange={handleChange}>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            City
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Query *
            <textarea name="query" value={formData.query} onChange={handleChange} required></textarea>
          </label>
        </div>
        <button type="submit" className="submit-button">Send</button>
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
