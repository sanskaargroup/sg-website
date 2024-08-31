import {z} from "zod";

export const enquiryFormSchema = z.object({
	name: z.string().min(2, {message: "Name must be at least 2 characters long."}).trim(),
	email: z.string().email({message: "Please enter a valid email."}).trim(),
	phone: z.number().min(1, {message: "Phone number cannot be empty."}),
	country: z.string().min(1, {message: "Country cannot be empty."}).trim(),
	city: z.string().min(1, {message: "City cannot be empty."}).trim(),
	query: z.string().trim().min(1, {message: "Query cannot be empty"}),
});

// name: "",
// phone: 0,
// aadhar: 0,
// yoe: 0,
// email: "",
// address: "",

export const careersFormSchema = z.object({
	name: z.string().min(2, {message: "Name must be at least 2 characters long."}).trim(),
	phone: z.number().min(1, {message: "Phone number cannot be empty."}),
	aadhar: z
		.number()
		.min(1, {message: "Aadhar number cannot be empty."})
		.refine((value) => value.toString().length === 12, {
			message: "Aadhar number must be exactly 12 digits.",
		}),
	yoe: z.number().min(1, {message: "YOE number cannot be empty."}),
	email: z.string().email({message: "Please enter a valid email."}).trim(),
	address: z.string().min(1, {message: "Country cannot be empty."}).trim(),
});
