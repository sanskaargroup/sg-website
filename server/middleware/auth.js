import jwt from "jsonwebtoken";

const ADMINSECRET = process.env.ADMINSECRET;

const authenticateJwt = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (authHeader) {
		const token = authHeader.split(" ")[1];

		try {
			// Attempt admin verification first
			const admin = jwt.verify(token, ADMINSECRET);
			req.user = admin;
			next();
		} catch (err) {
			// Handle any errors during JWT verification
			console.error(err); // Log the error for debugging
			return res.status(403).json({message: "Forbidden"}); // Send a 403 response
		}
	} else {
		// Handle missing authorization header
		console.log("unauthorized in jwt.verify");
		return res.status(401).json({message: "Unauthorized"});
	}
};

export {authenticateJwt};

// earlier we were not using try catch, and since jwt.verify is an asynchronous function, we were getting an error. look at this to learn more: https://g.co/gemini/share/c58ef706da94
