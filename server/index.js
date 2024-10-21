import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { Career, Enquiry, Owner } from "./db/db.js";
import { oneDayAgo, oneMonthAgo, oneWeekAgo, sixMonthsAgo, threeMonthsAgo } from "./utils/date.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// dotenv.config({path: "../.env"});
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(compression());

const port = process.env.PORT || 5000;
console.log("port: ", port);
const connectionURL = process.env.MONGODB_URL;
//TODO: ADD DATE TO SCHEMA TO EXTRACT DATEWISE DATA

const ADMINSECRET = process.env.ADMINSECRET;

app.post("/api/createowner", async (req, res) => {
	try {
		console.log("req.body: ", req.body);
		const username = req.body.username;
		const password = req.body.password;

		if (!req.body) {
			return res.status(404).json({message: "No user data found"});
		}
		const newOwner = new Owner({username, password, timestamp: Date.now()});
		await newOwner.save();
		console.log("newOwner created: ", newOwner);
		res.status(200).json({message: "Owner created successfully"});
	} catch (e) {
		console.log("error in finding req: ", e);
		res.status(500).json({message: "Internal server error, please try again"});
	}
});

app.post("/api/signin", async (req, res) => {
	try {
		console.log("req.body: ", req.body);
		const formData = req.body;
		const username = formData.get("username");
		const password = formData.get("password");
		if (!req.body) {
			return res.status(404).json({message: "No form data found"});
		}

		const existingOwner = await Owner.findOne({username, password});
		if (!existingOwner) {
			return res.status(404).json({message: "Owner not found"});
		} else {
			const token = jwt.sign({username, role: "admin"}, ADMINSECRET, {
				expiresIn: "1d",
			});

			res.json({message: "Logged in successfully", token: token});
			console.log({message: "Logged in successfully", token});
		}
	} catch (e) {
		console.log("error in finding req: ", e);
		res.status(500).json({message: "Internal server error, please try again"});
	}
});

// to create a new enquiry
app.post("/api/enquire", async (req, res) => {
	try {
		console.log("req.body: ", req.body);
		if (!req.body) {
			return res.status(404).json({message: "No form data found"});
		}
		const newEnquiry = new Enquiry({...req.body, timestamp: Date.now()});
		await newEnquiry.save();
		console.log("newEnquiry created: ", newEnquiry);
		res.status(200).json({message: "Query sent successfully"});
	} catch (e) {
		console.log("error in finding req: ", e);
		res.status(500).json({message: "Internal server error, please try again"});
	}
});

// to create a new career application
app.post("/api/career", async (req, res) => {
	try {
		console.log("req.body: ", req.body);
		if (!req.body) {
			return res.status(404).json({message: "No form data found"});
		}
		const newApplicant = new Career({...req.body, timestamp: Date.now()});
		await newApplicant.save();
		console.log("newApplicant created: ", newApplicant);
		res.status(200).json({message: "Application sent successfully"});
	} catch (e) {
		console.log("error in finding req: ", e);
		res.status(500).json({message: "Internal server error, please try again"});
	}
});

// app.get("/allenquirydata", async (req, res) => {
// 	try {
// 		const data = await Enquiry.find({});
// 		console.log("data: ", data);
// 		res.status(200).json({data});
// 	} catch (e) {
// 		console.log("error: ", e);
// 		res.status(400).json({message: "unable to fetch data"});
// 	}
// });

app.get("/api/enquirydata", async (req, res) => {
	try {
		console.log("req.query: ", req.query);
		const {profile, time} = req.query;
		let topic;
		switch (profile) {
			case "enquirydata":
				topic = "enquiry";
				break;
			case "careerdata":
				topic = "career";
				break;
			default:
				topic = null; // Set to null for clarity
		}
		console.log("the topic is: ", topic);

		if (topic === null) {
			return res.status(404).json({message: "topic null"});
		}
		if (topic === undefined) {
			return res.status(404).json({message: "topic undefined"});
		}

		console.log("time: ", time);
		let entryTime;
		switch (time) {
			case "1d":
				entryTime = oneDayAgo;
				break;
			case "1w":
				entryTime = oneWeekAgo;
				break;
			case "1m":
				entryTime = oneMonthAgo;
				break;
			case "3m":
				entryTime = threeMonthsAgo;
				break;
			case "6m":
				entryTime = sixMonthsAgo;
				break;
			default:
				entryTime = null; // Set to null for clarity
		}
		console.log("the entryTime is: ", entryTime);

		if (entryTime === null) {
			return res.status(404).json({message: "time id null"});
		}
		if (entryTime === undefined) {
			return res.status(404).json({message: "time is undefined"});
		}

		console.log("profile: ", profile);
		if (profile === "enquirydata") {
			console.log("running query for enquiry");
			const enquiries = await Enquiry.find({timestamp: {$gte: entryTime}});
			console.log("enquiries: ", enquiries);
			res.status(200).json({data: enquiries});
		} else if (profile === "careerdata") {
			console.log("running query for career");
			const careers = await Career.find({timestamp: {$gte: entryTime}});
			console.log("careers: ", careers);
			res.status(200).json({data: careers});
		} else {
			res.status(404).json({message: "profile not found"});
		}
	} catch (e) {
		console.log("error: ", e);
		res.status(400).json({message: "error in GET route"});
	}
});

mongoose.connect(
	connectionURL,
);
app.listen(port, () => {
	console.log(`server is now running on http://localhost:${port}`);
});
