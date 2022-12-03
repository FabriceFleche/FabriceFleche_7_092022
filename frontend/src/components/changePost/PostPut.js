import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router';
import '../../styles/components/postsImport.css';
import '../../styles/components/postPut.css';

const textFromStorage = localStorage.getItem("token");

//Recuperation de l id du post
let idPost = window.location.href;
let url = new URL(idPost);
let refId = url.searchParams.get("id");

const PostPut = () => {
    const [post, setPost] = useState([])
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState("");
    const fileImput = useRef();
    let navigate = useNavigate();

    const handleEdit = () => {
        const enteredFile = fileImput.current.files[0];
        let image = post[0].imageUrl;
        const formData = new FormData();
        formData.append("title", post[0].title)
        formData.append("content", editContent ? editContent : post[0].content)
        if (enteredFile !== undefined) { image = enteredFile } else { image = post[0].imageUrl };
        formData.append("image", image)
        formData.append("id_post", post[0].id_post)
        const urlPost = "http://localhost:3000/api/posts/"
        const baseURL = urlPost
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Accept': 'multipart/form-data',
                Authorization: `Bearer ${textFromStorage}`
            },
            body: formData
        };
        fetch(baseURL, requestOptions)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setIsEditing(false)
                navigate('../MyPosts')
                //window.location = '../../myPosts'
            });
    }

    const returned = () => {
        navigate('../MyPosts')
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
        <div className="pagePosts">
            {post.map((post, index) => {
                return (
                    <div className="posts" key={index}>
                        <h4 className="posts_name">Post de {post.names}</h4>
                        <h4 className="posts_title">{post.title}</h4>
                        <div className="post_content">
                            {
                                isEditing ? <textarea defaultValue={post.content} onChange={(e) => setEditContent(e.target.value)} ></textarea> :
                                    <p className="posts_content">{post.content}</p>
                            }
                        </div>
                        <div className="post_img">
                            {isEditing ? <input type="file" name="image" accept="image/*" multiple={false} ref={fileImput} /> : ""}
                        </div>
                        <div className="post_img">
                            <img className="posts_img" src={post.imageUrl} alt="" />
                        </div>
                        <div className="posts_button">
                            {
                                isEditing ? <button className="posts_button_click" onClick={() => handleEdit()}>Valider</button> :
                                    <button className="posts_button_click" onClick={() => setIsEditing(true)}>Modifier</button>
                            }
                            <button className="posts_button_click" onClick={() => returned()}>Retour</button>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default PostPut;