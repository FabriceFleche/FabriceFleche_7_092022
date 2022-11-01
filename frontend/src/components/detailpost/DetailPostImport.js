import React, { useEffect, useState } from "react";

const textFromStorage = localStorage.getItem("token");
const idPost = 3;

const DetailPostImport = () => {
    const [post, setPost] = useState([])

    const postFetch = () => {
        const baseURL = "http://localhost:3000/api/posts/" + idPost
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

    function buttonCLickModify() {
        window.location = '../ChangePostId'
    };
    function buttonClickDelete() {
        window.location = '../DeletePost'
    };

    return (
        <div>
            {post.map((post, index) => {
                return (
                    <div key={index}>
                        <h2>Post de {post.names}</h2>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>{post.id_post}</p>
                        <button onClick={buttonCLickModify}>Modifier</button>
                        <button onClick={buttonClickDelete}>Supprimer</button>
                    </div>
                );
            })}
        </div>
    )

}

export default DetailPostImport;