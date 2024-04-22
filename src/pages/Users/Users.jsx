import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Users = () => {
	const users = useLoaderData();
	console.log(`users:`, users);

	const handleDelete = (_id) => {
		fetch(`http://localhost:5000/users/${_id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					toast("deleted successfully");
				}
			});
	};

	return (
		<div>
			<h2>This is Users: {users.length}</h2>
			<div>
				{users?.map((user) => (
					<p key={user._id}>
						{user.name} {user.email}{" "}
						<button onClick={() => handleDelete(user._id)}>X</button>
					</p>
				))}
			</div>
		</div>
	);
};

export default Users;
