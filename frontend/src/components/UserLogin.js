// import React, { useEffect, useState } from 'react';

function userLogin(enteredEmail, enteredPassword) {
    console.log("Test");
    const baseURL = "http://localhost:3000/api/auth/login"
    // const [data, setData] = useState([]);
    console.log(enteredEmail);
    console.log(enteredPassword);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: enteredEmail, password: enteredPassword })
    };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            // setData(data)
            const token = data.token
            localStorage.setItem("token", token);
        });


}

export default userLogin;