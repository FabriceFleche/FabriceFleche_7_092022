import React, { useEffect, useState } from 'react';
import axios from "axios";

//const baseURL = "http://192.168.0.187:3000/api/posts/"
const baseURL1 = "http://localhost:3000/api/posts/"
//const baseURL2 = "https://restcountries.com/v3.1/all"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY2NTkxNDUwMywiZXhwIjoxNjY2MDAwOTAzfQ.mii5ysMCGKgIORXfgNNxwJaLwItRIfa1LyaUMgvAGe0"
const config = { headers: { Authorization: `javascript">Bearer ${token}` } };

const Posts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios({
            url: baseURL1,
            method: "GET",
            Authorization: config

        })
            .then((res) => { setData(res.data) })
        //.catch((err) => { err })
    }, []);

    return (
        <div>
            <ul>
                {
                    //data.map((posts) => (<li>{posts.translations.fra.common}</li>))
                    data.map((posts) => (<li>{posts}</li>))
                }
            </ul>
        </div>
    );
};

export default Posts;