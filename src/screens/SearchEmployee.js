import React, { useState, useEffect } from 'react'

import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import Table from '../components/Table';


function IndexPage() {
    const [results, setResults] = useState([])
	const history = useHistory();
	const { name } = useParams();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            history.push("/login");
        }
        
        const getResults = async () => {
            await axios({
                url: `https://humanresources.cleverapps.io/employees/${name}`, 
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }).then((res) => {
                const response = res.data.message
                setResults(response)
            })
        }
        getResults()
    });

    return (
        <>
			<SearchBar />
            <div className="p-24">
				<Table employees={results} /> 
				<div className="flex items-center justify-content w-full mt-5">
					<a href="/" className="text-center w-full text-blue-600">Display all employees</a>
				</div>
            </div>
        </>
    )
}

export default IndexPage;
