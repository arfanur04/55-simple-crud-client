import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../Shared/Navbar/Navbar";

const Users = () => {
	const loadedUsers = useLoaderData();
	const [users, setUsers] = useState(loadedUsers);
	console.log(`users:`, users);

	const handleDelete = (_id) => {
		fetch(`http://localhost:5000/users/${_id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					toast("deleted successfully");
					const remaining = users.filter((user) => user._id !== _id);
					setUsers(remaining);
				}
			});
	};

	return (
		<>
			<Navbar />
			<h2>This is Users: {users.length}</h2>
			<div>
				{users?.map((user) => (
					<p key={user._id}>
						{user.name} {user.email} {user._id}{" "}
						<Link to={`/update/${user._id}`}>
							<button>Update</button>
						</Link>
						<button onClick={() => handleDelete(user._id)}>X</button>
					</p>
				))}
			</div>
		</>
	);
};

export default Users;
