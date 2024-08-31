import mongoose from "mongoose";
import {number} from "zod";

const enquirySchema = new mongoose.Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	phone: {type: Number, required: true},
	country: {type: String, required: true},
	city: {type: String, required: true},
	query: {type: String, required: true},
	timestamp: {type: Number, default: Date.now}, // Default to current epoch timestamp,
});

const careerSchema = new mongoose.Schema({
	name: {type: String, required: true},
	phone: {type: Number, required: true},
	aadhar: {type: Number, required: true},
	yoe: {type: Number, required: true},
	email: {type: String,},
	address: {type: String, required: true},
	timestamp: {type: Number, default: Date.now}, // Default to current epoch timestamp,
});

const ownerSchema = new mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	timestamp: {type: Number, default: Date.now}, // Default to current epoch timestamp,
});

export const Enquiry = mongoose.model("Enquiry", enquirySchema);
export const Career = mongoose.model("Career", careerSchema);
export const Owner = mongoose.model("Owner", ownerSchema);
