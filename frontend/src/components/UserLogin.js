import React, { useEffect, useState } from 'react';
//import { NavLink } from 'react-router-dom';
import enteredEmail from './AuthForm.js';
import enteredPassword from './AuthForm.js';


function UserLogin() {
    const baseURL = "http://localhost:3000/api/auth/login"
    const [data, setData] = useState([]);


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: enteredEmail, password: enteredPassword })
    };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            setData(data)
        });

    const token = data.token
    sessionStorage.setItem("token", token);
}

export default UserLogin;