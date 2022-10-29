import React, { useEffect, useState } from "react";

const textFromStorage = localStorage.getItem("token");
const idFromStorage = localStorage.getItem("id");


const PostImport = () => {
    const [post, setPost] = useState([])

    const postFetch = () => {
        const baseURL = "http://localhost:3000/api/posts/:id"
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Params: `KEY:'id', VALUE: ${idFromStorage}`,
                Authorization: `Bearer ${textFromStorage}`
            }
        };
        fetch(baseURL, requestOptions)
            .then(response => { return response.json() })
            .then((data) => { setPost(data) })
            .catch((err) => console.log(err));

    }

    useEffect(() => {
        postFetch()
    }, [])
    console.log(post);
    return (
        <div>
            {post.map((post, index) => {
                return (
                    <div key={index}>
                        <h2>Post de {post.names}</h2>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                );
            })}
        </div>
    )

}

export default PostImport;