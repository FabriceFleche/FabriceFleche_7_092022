import React, { useEffect, useState } from 'react';

//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY2NjM4MjQyMywiZXhwIjoxNjY2NDY4ODIzfQ.WAYF9yk-lS_395yrW1bQmnkIR-G7PgYrf6dI5hTHa3o"
//const config = { headers: { Authorization: `javascript">Bearer ${token}` } };
const textFromStorage = sessionStorage.getItem("token");
console.log(textFromStorage);

function Posts() {
    const baseURL = "http://localhost:3000/api/posts/"
    const [data, setData] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            authorization: textFromStorage
        };
        fetch(baseURL, requestOptions)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setData(data)
            });

    }, []);

    return (
        < div >
            <div className="posts">

                <div>posts : {data.title}</div>

            </div>
        </div >
    );
};

//export default Posts;