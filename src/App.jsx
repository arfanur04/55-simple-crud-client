import { toast } from "react-toastify";
import "./App.css";
import { Link } from "react-router-dom";

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
		<>
			<Link to={"/"}>Home</Link>
			<br />
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
		</>
	);
}

export default App;
