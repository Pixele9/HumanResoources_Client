import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";

export default function NewEmployee() {
	const [userData, setUserData] = useState({
		name: "",
		lastname: "",
		phone: "",
		email: "",
		address: "",
	});

	const history = useHistory();

	const validateInputs = () => {
		const { name, lastname, phone, email, address } = userData;
		if (
			name === "" ||
			lastname === "" ||
			phone === "" ||
			email === "" ||
			address === ""
		) {
			alert("Incmplete fields");
			return false;
		} else {
			return true;
		}
	};

	return (
		<div className="p-24 flex items-center justify-center">
			<div className="w-1/2">
				<div className="bg-blue-200 rounded-2xl p-12 shadow-xl flex flex-col items-center">
					<h1 className="text-4xl mb-10 text-blue-600 font-bold">Agregar Nuevo Empleado</h1>
					<input
						placeholder="Name"
						type="text"
						className="w-full mb-5 rounded-xl shadow-lg h-12 px-10 outline-none"
						onChange={(e) =>
							setUserData({ ...userData, name: e.target.value })
						}
					/>
					<input
						placeholder="Last Name"
						type="text"
						className="w-full mb-5 rounded-xl shadow-lg h-12 px-10 outline-none"
						onChange={(e) =>
							setUserData({
								...userData,
								lastname: e.target.value,
							})
						}
					/>
					<input
						placeholder="Phone Number"
						type="text"
						className="w-full mb-5 rounded-xl shadow-lg h-12 px-10 outline-none"
						onChange={(e) =>
							setUserData({ ...userData, phone: e.target.value })
						}
					/>
					<input
						placeholder="Email"
						type="text"
						className="w-full mb-5 rounded-xl shadow-lg h-12 px-10 outline-none"
						onChange={(e) =>
							setUserData({ ...userData, email: e.target.value })
						}
					/>
					<input
						placeholder="Address"
						type="text"
						className="w-full mb-5 rounded-xl shadow-lg h-12 px-10 outline-none"
						onChange={(e) =>
							setUserData({
								...userData,
								address: e.target.value,
							})
						}
					/>
					<button
						onClick={() => {
							if (validateInputs()) {
								const data = new URLSearchParams(userData);
								const headers = {
									"Authorization": `Bearer ${localStorage.getItem("token")}`,
									"Content-Type": "application/x-www-form-urlencoded",
								};
								console.log("headers: ", headers)
								console.log("USER DATA: ", userData);

								axios({
									url: "https://humanresources.cleverapps.io/employees", 
									method: "POST",
									data: data,
									headers: headers
								}).then((res) => {
									console.log("SUCCESS ", res)
									if(res.status === 201) {
										history.push("/")
									}
								})
							} else {
								console.log("Incomplete fields ", userData);
							}
						}}
						className="w-16 h-16 absolute bottom-12 right-12 transform transition hover:scale-90 hover:shadow-lg focus:outline-none rounded-full bg-blue-600 shadow-xl text-white"
					>
						<i className="fas fa-plus"></i>
					</button>
				</div>
			</div>
		</div>
	);
}
