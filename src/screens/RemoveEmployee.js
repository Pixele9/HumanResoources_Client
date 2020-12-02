import React, { useEffect } from 'react';

import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

export default function RemoveEmployee() {
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		async function removeEmployee() {
			await axios({
				url: `https://humanresources.cleverapps.io/employees/${id}`, 
				method: "DELETE",
				headers: {
					"Authorization": `Bearer ${localStorage.getItem("token")}`
				}
			}).then((res) => {
				const response = res.data
				// console.log(response)
				if(response.code === 200) {
					history.push("/")	
				}
			}).catch(err => {
				alert(err)
			})
		}
		removeEmployee();
	}, [])
	
	return (
		<div>
		</div>
	)
}