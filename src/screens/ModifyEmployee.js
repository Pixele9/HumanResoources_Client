import React, { useState, useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import Table from '../components/Table';

export default function ModifyEmployee() {
	const { id: idParams } =  useParams();

	const [userData, setUserData] = useState({
		name: "",
		lastname: "",
		phone: "",
		email: "",
		address: "",
	});

	const history = useHistory();

	useEffect(() => {
		const getResults = async () => {
            await axios({
                url: `https://humanresources.cleverapps.io/employees/${idParams}`, 
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
				const response = res.data.message[0]
				// console.log(response)
				setUserData(response)
				console.log(userData)
            })
        }
        getResults()
	}, [])

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
	}

	const {name, lastname, phone, email, address} = userData
	console.log({name, lastname, phone, email, address})

	return (
		<div className="p-24 flex items-center justify-center">
			<div className="w-1/2">
				<div className="bg-blue-200 rounded-2xl p-12 shadow-xl flex flex-col items-center">
					<h1 className="text-4xl mb-10 text-blue-600 font-bold">Editar Empleado</h1>
					<input
						placeholder="Name"
						type="text"
						className="w-full mb-5 rounded-xl shadow-lg h-12 px-10 outline-none"
						value={name}
						onChange={(e) =>
							setUserData({ ...userData, name: e.target.value })
						}
					/>
					<input
						placeholder="Last Name"
						type="text"
						className="w-full mb-5 rounded-xl shadow-lg h-12 px-10 outline-none"
						value={lastname}
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
						value={phone}
						onChange={(e) =>
							setUserData({ ...userData, phone: e.target.value })
						}
					/>
					<input
						placeholder="Email"
						type="text"
						className="w-full mb-5 rounded-xl shadow-lg h-12 px-10 outline-none"
						value={email}
						onChange={(e) =>
							setUserData({ ...userData, email: e.target.value })
						}
					/>
					<input
						placeholder="Address"
						type="text"
						className="w-full mb-5 rounded-xl shadow-lg h-12 px-10 outline-none"
						value={address}
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
									url: `https://humanresources.cleverapps.io/employees/${idParams}`, 
									method: "PUT",
									data: data,
									headers: headers
								}).then((res) => {
									console.log("SUCCESS ", res)
									if(res.status === 201 || res.status === 200) {
										history.push("/")
									}
								})
							} else {
								console.log("Incomplete fields ", userData);
							}
						}}
						className="w-1/2 h-12 mt-6 transform transition hover:scale-90 hover:shadow-lg focus:outline-none rounded-xl bg-blue-600 shadow-xl text-white"
					>
						Save	
					</button>
				</div>
			</div>
		</div>
	)
}
