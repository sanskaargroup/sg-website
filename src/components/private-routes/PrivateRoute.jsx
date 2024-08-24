import React from "react";
import {Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
	// Add your own authentication logic here.
	const isLoggedIn = req.user == "admin" ? true : false;

	const location = useLocation(); // Get the current location

	return isLoggedIn ? <Component {...rest} /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
