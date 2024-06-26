import { toast } from "react-toastify";
import "./App.css";
import Navbar from "./pages/Shared/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import { websiteTitle } from "./hooks/useWebsiteTitle/useWebsiteTitle";

function App() {
	const handleAddUser = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const user = { name, email };
		console.log(`user:`, user);

		fetch(`http://localhost:5000/users`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					toast("User added successfully");
					form.reset();
				}
			});
	};

	return (
		<div>
			<Helmet>{websiteTitle}</Helmet>
			<Navbar />
			<h1>Simple CRUD</h1>
			<form onSubmit={handleAddUser}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					id=""
				/>
				<br />
				<input
					type="email"
					name="email"
					placeholder="Email"
					id=""
				/>
				<br />
				<input
					type="submit"
					value={"Add User"}
				/>
			</form>
		</div>
	);
}

export default App;
