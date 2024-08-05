import {z} from "zod";

export const enquiryFormSchema = z.object({
	name: z.string().min(2, {message: "Name must be at least 2 characters long."}).trim(),
	email: z.string().email({message: "Please enter a valid email."}).trim(),
	phone: z.number().min(1, {message: "Phone number cannot be empty."}),
	country: z.string().min(1, {message: "Country cannot be empty."}).trim(),
	city: z.string().min(1, {message: "City cannot be empty."}).trim(),
	query: z.string().trim().min(1, {message: "Query cannot be empty"}),
});

export const careersFormSchema = z.object({
	name: z.string().min(2, {message: "Name must be at least 2 characters long."}).trim(),
	email: z.string().email({message: "Please enter a valid email."}).trim(),
	phone: z.number().min(1, {message: "Phone number cannot be empty."}),
	country: z.string().min(1, {message: "Country cannot be empty."}).trim(),
	city: z.string().min(1, {message: "City cannot be empty."}).trim(),
	skills: z.string().trim().min(1, {message: "Query cannot be empty"}),
});