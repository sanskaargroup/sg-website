import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	phone: {type: String, required: true},
	country: {type: String, required: true},
	city: {type: String, required: true},
	query: {type: String, required: true},
	timestamp: {type: Number, default: Date.now}, // Default to current epoch timestamp
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;
