import { useNavigate } from 'react-router';
import React, { useEffect, useState } from "react";
import '../../styles/components/postsImport.css';

const textFromStorage = localStorage.getItem("token");
const idFromStorage = localStorage.getItem("id");

const PostImport = () => {
    const [post, setPost] = useState([])
    let navigate = useNavigate();

    const postFetch = () => {
        const baseURL = "http://localhost:3000/api/posts/" + idFromStorage
        const requestOptions = {
            method: 'GET',
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

    function buttonCLickModify(post) {
        navigate('../ChangePostId?id=' + post.id_post)
        //window.location = '../ChangePostId?id=' + post.id_post
    };
    function buttonClickDelete(post) {
        //navigate('../DeletePost?id=' + post.id_post)
        window.location = '../DeletePost?id=' + post.id_post
    };

    const dateFormater = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        });
        return newDate;
    }

    return (
        <div className="pagePosts">
            {post
                .sort((a, b) => b.date - a.date)
                .map((post, index) => {
                    return (
                        <div className="posts" key={index}>
                            <h4 className="posts_name">Post de {post.names}</h4>
                            <h4 className="date">Posté le {dateFormater(post.date)}</h4>
                            <h4 className="posts_title">{post.title}</h4>
                            <p className="posts_content">{post.content}</p>
                            <div className="post_img">
                                <img className="posts_img" src={post.imageUrl} alt="" />
                            </div>
                            <div className="posts_button">
                                <button className="posts_button_click" onClick={() => buttonCLickModify(post)}>Modifier</button>
                                <button className="posts_button_click" onClick={() => buttonClickDelete(post)}>Supprimer</button>
                            </div>
                        </div>
                    );
                })}
        </div>
    )
}

export default PostImport;