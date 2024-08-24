import React, {useState} from "react";

const Signin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("username", username);
		formData.append("password", password);

		try {
			// Accessing username and password from formData
			const username = formData.get("username");
			const password = formData.get("password");

			console.log("Username: ", username);
			console.log("Password: ", password);

			console.log("formData: ", formData);
			const response = await fetch("/signin", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				console.log("the response in signin is: ", response);
				console.log("the token is: ", response.token);
				localStorage.setItem("authorization", response.token);

				// Redirect to /owner if signin is successful
				window.location.href = "/owner";
			} else {
				// Handle error response
				console.error("Signin failed");
			}
		} catch (error) {
			// Handle network error
			console.error("Network error: ", error);
		}
	};

	return (
		<div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "50px", height: "100vh"}}>
			<div
				style={{width: "400px", padding: "20px", border: "1px solid #ccc", borderRadius: "4px", textAlign: "center"}}>
				<h2>Sign In</h2>
				<form onSubmit={handleSubmit}>
					<div style={{marginBottom: "10px", textAlign: "left"}}>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							style={{width: "100%"}}
						/>
					</div>
					<div style={{textAlign: "left"}}>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							style={{width: "100%"}}
						/>
					</div>
					<button type="submit" style={{marginTop: "10px", width: "100%"}}>
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
};

export default Signin;

// const Signin = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('username', username);
//         formData.append('password', password);

//         try {
//             const response = await fetch('/signin', {
//                 method: 'POST',
//                 body: formData
//             });

//             if (response.ok) {
//                 // Redirect to /owner if signin is successful
//                 window.location.href = '/owner';
//             } else {
//                 // Handle error response
//                 console.error('Signin failed');
//             }
//         } catch (error) {
//             // Handle network error
//             console.error('Network error:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Sign In</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Sign In</button>
//             </form>
//         </div>
//     );
// };

// export default Signin;
