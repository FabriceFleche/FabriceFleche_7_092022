import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthForm from './AuthForm';

function UserLogin() {
    const baseURL = "http://localhost:3000/api/auth/login"
    const [data, setData] = useState([]);
    console.log(AuthForm.enteredEmail);
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: "timeo.fleche@free.fr", password: "Test" })
        };
        fetch(baseURL, requestOptions)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setData(data)
            });

    }, []);

    const token = data.token
    sessionStorage.setItem("token", token);
    console.log(data.token);

    return (
        < div >
            <div className="seConnecter">
                <ul>
                    <NavLink to="/home">
                        <li>Se connecter</li>
                    </NavLink>
                </ul>
                <div>User Id : {data.userId}</div>
                <div>Token : {data.token}</div>
            </div>
        </div >

    );
}

export default UserLogin;