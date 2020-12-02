import React from 'react';

import { useHistory } from 'react-router-dom';

export default function SearchBar() {
	const history = useHistory();

	return (
		<div className="flex items-center justify-center w-full h-1/6 bg-blue-200">
				<input className="w-3/4 h-10 px-8 py-6 rounded-xl outline-none shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="search" placeholder="Search" id="search-bar"></input>
                <button onClick={() => {
                    const searchValue = document.querySelector("#search-bar").value
                    console.log("value ", searchValue)
                    if(searchValue !== "") {
                        history.push(`/search/${searchValue}`)
                    }
                }} className="bg-blue-600 rounded-xl w-12 h-12 ml-3 shadow-xl transform transition hover:scale-90 focus:outline-none" type="button"><i className="text-white fas fa-search"></i>
				</button>
				<button onClick={() => {
                    localStorage.removeItem("token")
                    history.push("/login")
                }} className="bg-blue-600 ml-10 rounded-xl w-24 h-12 ml-3 shadow-xl text-white transform transition hover:scale-90 focus:outline-none">
                    Log out
                </button>
		</div>	
	)
}