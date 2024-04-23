import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./pages/Users/Users.jsx";
import { HelmetProvider } from "react-helmet-async";
import Update from "./pages/Update/Update.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
	},
	{
		path: "/users",
		element: <Users></Users>,
		loader: () => fetch("http://localhost:5000/users"),
	},
	{
		path: "/update/:id",
		element: <Update></Update>,
		loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
			<ToastContainer />
		</HelmetProvider>
	</React.StrictMode>
);
