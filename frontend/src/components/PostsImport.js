import React, { useEffect, useState } from "react";
import '../styles/components/postsImport.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

// Récupération du token
const textFromStorage = localStorage.getItem("token");

// Importation des icones like
const elementHeartBlack = <FontAwesomeIcon icon={faHeart} />
const elementLikeWhite = <FontAwesomeIcon icon={faThumbsUp} />


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

    const likePost = () => {
        const baseURL = "http://localhost:3000/api/like/"
        const like = 1
        const data = {
            likes: like,
            id_post: posts[0].id_post
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${textFromStorage}`
            },
            body: JSON.stringify(data)
        };
        fetch(baseURL, requestOptions)
            .then(response => { return response.json() })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    const disLikePost = () => {
        const baseURL = "http://localhost:3000/api/like/"
        const like = -1
        const data = {
            likes: like,
            id_post: posts[0].id_post
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${textFromStorage}`
            },
            body: JSON.stringify(data)
        };
        fetch(baseURL, requestOptions)
            .then(response => { return response.json() })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    return (
        <div>
            {posts.map((posts, index) => {
                return (
                    <div className="posts" key={index}>
                        <h4 className="posts_name">Post de {posts.names}</h4>
                        <h4 className="posts_title">{posts.title}</h4>
                        <p className="posts_content">{posts.content}</p>
                        <img className="posts_img" src={posts.imageUrl} alt="Post Img" />
                        <em>Ce post est aimé par {posts.likes} personne-s</em>
                        <button className="posts_dislike" onClick={() => disLikePost()}>Vous aimez déjà ce post {elementHeartBlack}</button>
                        <button className="posts_like" onClick={() => likePost()}>Pour aimer ce post, cliquer ici {elementLikeWhite}</button>
                    </div>
                );
            })}
        </div>
    )

}

export default PostsImport;