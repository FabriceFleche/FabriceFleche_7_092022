import React, { useEffect, useState } from "react";
import '../styles/components/postsImport.css';

const textFromStorage = localStorage.getItem("token");

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

    return (
        <div>
            {posts.map((posts, index) => {
                return (
                    <div className="posts" key={index}>
                        <h4 className="posts_name">Post de {posts.names}</h4>
                        <h4 className="posts_title">{posts.title}</h4>
                        <p className="posts_content">{posts.content}</p>
                    </div>
                );
            })}
        </div>
    )

}

export default PostsImport;