import mongoose from "mongoose";
import { number } from "zod";

const enquirySchema = new mongoose.Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	phone: {type: Number , required: true},
	country: {type: String, required: true},
	city: {type: String, required: true},
	query: {type: String, required: true},
	timestamp: {type: Number, default: Date.now}, // Default to current epoch timestamp,
});

const career = new mongoose.Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	phone: {type: Number , required: true},
	country: {type: String, required: true},
	city: {type: String, required: true},
	skills: {type: String, required: true},
	timestamp: {type: Number, default: Date.now}, // Default to current epoch timestamp,
});

export const Enquiry = mongoose.model("Enquiry", enquirySchema);
export const Career = mongoose.model("Career", career);


