import React from 'react';

export default function Table(props) {
	const { employees } = props
	return(
		<table className="table-auto p-24">
			<thead>
				<tr>
					<th className="w-1/6 px-4 py-2 text-blue-600">ID</th>
					<th className="w-1/6 px-4 py-2 text-blue-600">Name</th>
					<th className="w-1/6 px-4 py-2 text-blue-600">Last Name</th>
					<th className="w-1/6 px-4 py-2 text-blue-600">Phone Number</th>
					<th className="w-1/6 px-4 py-2 text-blue-600">Email</th>
					<th className="w-1/6 px-4 py-2 text-blue-600">Address</th>
					<th className="w-1/6 px-4 py-2 text-blue-600">Edit</th>
					<th className="w-1/6 px-4 py-2 text-blue-600">Remove</th>
				</tr>
			</thead>
			<tbody>
				{
					employees.map(employee => {
						const {employee_id: id, name, lastname, phone, email, address} = employee
	
						return(
							<tr className="">
								<td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{id}</td>
								<td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{name}</td>
								<td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{lastname}</td>
								<td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{phone}</td>
								<td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{email}</td>
								<td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{address}</td>
								<td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium text-center"><a href={`/edit/${id}`}><i className="fas fa-user-edit"></i></a></td>
								<td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium text-center"><a href={`/remove/${id}`}><i className="fas fa-minus-circle"></i></a></td>
							</tr>
						)
					})
				}
			</tbody>
		</table>	
	)
}