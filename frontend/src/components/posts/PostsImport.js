import React, { useEffect, useState } from "react";
import '../../styles/components/postsImport.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons'

// Récupération du token
const textFromStorage = localStorage.getItem("token");
const idFromStorage = localStorage.getItem("id");

// Importation des icones like
const elementLikeWhite = <FontAwesomeIcon icon={faThumbsUp} />
const elementDislikeWhite = <FontAwesomeIcon icon={faThumbsDown} />

const PostsImport = () => {
    const [userLike, setUserLike] = useState([])

    // Recuperation de tous les posts avec les likes de l'user connecté
    const postsFetch = () => {
        const baseURLLike = "http://localhost:3000/api/posts/getLikeUser/" + idFromStorage
        const requestOptionsLike = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${textFromStorage}`
            }
        };
        fetch(baseURLLike, requestOptionsLike)
            .then(response => { return response.json() })
            .then((result) => { setUserLike(result) })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        postsFetch()
    }, [])

    function ValidLike(props) {
        const isLike = props.isLike;
        const idPost = props.idPost;

        if (isLike) {
            return <button className="posts_dislike" onClick={() => { disLikePost(idPost) }}>Pour ne plus aimer ce post {elementDislikeWhite}</button>
        }
        return <button className="posts_like" onClick={() => { likePost(idPost) }}>Pour aimer ce post {elementLikeWhite}</button>
    }

    const likePost = (postId) => {
        const baseURL = "http://localhost:3000/api/like/"
        const like = 1
        const data = {
            likes: like,
            id_post: postId
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
            .then((data) => {
                console.log(data)
                window.location = '../home'
            })
            .catch((err) => console.log(err));

        const baseURLLiked = "http://localhost:3000/api/like/likeUser"
        const dataLike = {
            id_post: postId,
            userId: idFromStorage,
            liked: 1
        }
        const requestOptionsLiked = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${textFromStorage}`
            },
            body: JSON.stringify(dataLike)
        };
        fetch(baseURLLiked, requestOptionsLiked)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
            });
    }

    const disLikePost = (postId) => {
        const baseURL = "http://localhost:3000/api/like/"
        const like = -1
        const data = {
            likes: like,
            id_post: postId
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
            .then((data) => {
                console.log(data)
                window.location = '../home'
            })
            .catch((err) => console.log(err));

        const dataDislike = {
            id_post: postId,
            userId: idFromStorage,
        }
        const requestOptionsDisliked = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${textFromStorage}`
            },
            body: JSON.stringify(dataDislike)
        };
        fetch(baseURL, requestOptionsDisliked)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
            });
    }

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
            {userLike
                .sort((a, b) => b.date - a.date)
                .map((posts, index) => {
                    return (
                        <div className="posts" key={index}>
                            <p className="posts_name">Post de {posts.names}</p>
                            <p className="date">Posté le {dateFormater(posts.date)}</p>
                            <p className="posts_title">{posts.title}</p>
                            <p className="posts_content">{posts.content}</p>
                            <div className="post_img">
                                <img className="posts_img" src={posts.imageUrl} alt="" />
                            </div>
                            <em className="posts_numberLike">Ce post est aimé par {posts.likes} personne-s</em>
                            <div className="posts_btn_like">
                                <ValidLike isLike={posts.isLiked} idPost={posts.id_post} />
                            </div>
                        </div>
                    );
                })}
        </div>
    )
}

export default PostsImport;