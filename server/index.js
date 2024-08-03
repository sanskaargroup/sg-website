import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Enquiry from "./db/db.js";
import {oneDayAgo, oneWeekAgo, oneMonthAgo, threeMonthsAgo, sixMonthsAgo} from "./utils/date.js";
import dotenv from "dotenv";
dotenv.config({path: "../.env"});

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
//TODO: ADD DATE TO SCHEMA TO EXTRACT DATEWISE DATA

app.post("/", async (req, res) => {
	try {
		console.log("req.body: ", req.body);
		if (!req.body) {
			return res.status(404).json({message: "no form data found"});
		}
		const newEnquiry = new Enquiry({...req.body, timestamp: Date.now()});
		await newEnquiry.save();
		console.log("newEnquiry created: ", newEnquiry);
		res.status(200).json({message: "all ok"});
	} catch (e) {
		console.log("error in finding req: ", e);
		res.status(400).json({message: "unable to print req"});
	}
});

app.get("/", async (req, res) => {
	try {
		const data = await Enquiry.find({});
		console.log("data: ", data);
		res.status(200).json({data});
	} catch (e) {
		console.log("error: ", e);
		res.status(400).json({message: "unable to fetch data"});
	}
});

app.get("/enquirydata", async (req, res) => {
	try {
		console.log(req.query.time);
		const {time} = req.query;
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
		console.log("entryTime: ", entryTime);

		if (entryTime === null) {
			return res.status(404).json({message: "time id null"});
		}
		if (entryTime === undefined) {
			return res.status(404).json({message: "time is undefined"});
		}
		const enquiries = await Enquiry.find({timestamp: {$gte: entryTime}});
		console.log("enquiries: ", enquiries);
		res.status(200).json({data: enquiries});
		// res.status(200).json({message: "params recieved"});
	} catch (e) {
		console.log("error: ", e);
		res.status(400).json({message: "error in GET route"});
	}
});

mongoose.connect(
	// <insert mongodb link here>
	"mongodb://127.0.0.1:27017/sanskaar-enquiry-form",
);
app.listen(port, () => {
	console.log(`server is now running on http://localhost:${port}`);
});
