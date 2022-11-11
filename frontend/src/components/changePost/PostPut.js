import React, { useEffect, useState } from "react";
import '../../styles/components/postsImport.css';

const textFromStorage = localStorage.getItem("token");

//Recuperation de l id du post
let idPost = window.location.href;
let url = new URL(idPost);
let refId = url.searchParams.get("id");

const PostPut = () => {
    const [post, setPost] = useState([])
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState("");

    const handleEdit = () => {
        const data = {
            name: post.names,
            title: post.title,
            content: editContent ? editContent : post.content,
            imageUrl: "URL"
        }
        let idPost = post.id_post
        const urlPost = "http://localhost:3000/api/posts/" + idPost
        const baseURL = urlPost
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${textFromStorage}`
            },
            body: JSON.stringify({ data })
        };
        fetch(baseURL, requestOptions)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setIsEditing(false);
            });
    }

    const postFetch = () => {
        const baseURL = "http://localhost:3000/api/posts/" + refId
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
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


    return (
        <div>
            {post.map((post, index) => {
                return (
                    <div className="posts" key={index}>
                        <h4 className="posts_name">Post de {post.names}</h4>
                        <h4 className="posts_title">{post.title}</h4>
                        {
                            isEditing ? <textarea defaultValue={post.content} onChange={(e) => setEditContent(e.target.value)} ></textarea> :
                                <p className="posts_content">{post.content}</p>
                        }

                        <div className="posts_button">

                            {
                                isEditing ? <button className="posts_button_click" onClick={() => handleEdit()}>Valider</button> :
                                    <button className="posts_button_click" onClick={() => setIsEditing(true)}>Modifier</button>
                            }

                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default PostPut;