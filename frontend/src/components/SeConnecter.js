import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
//import axios from "axios";
function UserLogin() {
    const baseURL = "http://localhost:3000/api/auth/login"
    const [data, setData] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: "" })
        };
        fetch(baseURL, requestOptions)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);


    return (
        < div >
            <div className="seConnecter">
                <ul>
                    <NavLink to="/home">
                        <li>Se connecter</li>
                    </NavLink>
                </ul>
                <div>User Id : {data}</div>
            </div>
        </div >

    );
}

export default UserLogin;