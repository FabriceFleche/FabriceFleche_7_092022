import React, { useEffect, useState } from "react";

const textFromStorage = localStorage.getItem("token");
console.log(textFromStorage);


const PostsImport = () => {
    const [posts, setPosts] = useState([])

    const postsFetch = () => {
        const baseURL = "http://localhost:3000/api/posts/"
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${textFromStorage}`
            }
        };
        fetch(baseURL, requestOptions)
            .then(response => { return response.json() })
            .then((data) => { setPosts(data) })
            .catch((err) => console.log(err));

    }

    useEffect(() => {
        postsFetch()
    }, [])
    console.log(posts);
    return (
        <div>
            {posts.map((posts, index) => {
                return (
                    <div key={index}>
                        <h2>Post de {posts.names}</h2>
                        <h2>{posts.title}</h2>
                        <p>{posts.content}</p>
                    </div>
                );
            })}
        </div>
    )

}

export default PostsImport;