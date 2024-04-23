import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<Link to={"/"}>Home</Link>
			<br />
			<Link to={"/users"}>Users</Link>
			<br />
		</div>
	);
};

export default Navbar;
