import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Update = () => {
	const loaderData = useLoaderData();

	const handleUpdate = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		console.log(name, email);
	};

	return (
		<>
			<Navbar />
			<div>
				<h2>Update information of {loaderData.name}</h2>
				<form onSubmit={handleUpdate}>
					<input
						type="text"
						name="name"
						id=""
						defaultValue={loaderData?.name}
					/>
					<br />
					<input
						type="email"
						name="email"
						id=""
						defaultValue={loaderData?.email}
					/>
					<br />
					<input
						type="submit"
						value="Update"
					/>
				</form>
			</div>
		</>
	);
};

export default Update;
