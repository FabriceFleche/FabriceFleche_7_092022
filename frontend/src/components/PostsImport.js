import React, { useEffect, useState } from "react";
import '../styles/components/postsImport.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons'


// Récupération du token
const textFromStorage = localStorage.getItem("token");
const idFromStorage = localStorage.getItem("id");

// Importation des icones like
//const elementHeartBlack = <FontAwesomeIcon icon={faHeart} />
const elementLikeWhite = <FontAwesomeIcon icon={faThumbsUp} />
const elementDislikeWhite = <FontAwesomeIcon icon={faThumbsDown} />

const PostsImport = () => {
    const [posts, setPosts] = useState([])
    //const [liked, setLiked] = useState([])
    const [userLike, setUserLike] = useState([])

    // Recuperation de tous les posts
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

        // Recuperation des likes de l'user connecté
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
            .then((data) => { setUserLike(data) })
            .catch((err) => console.log(err));
    }


    // Vérification des likes post / user
    const getLike = () => {
        const baseURLVerif = "http://localhost:3000/api/like/"
        const requestOptionsVerif = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${textFromStorage}`
            }
        };
        fetch(baseURLVerif, requestOptionsVerif)
            .then(response => { return response.json() })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

    }

    useEffect(() => {
        postsFetch()
        getLike()
    }, [])

    console.log(userLike)
    const likePost = (postId) => {
        const result = userLike.filter(userLik => postId === userLik);
        console.log(result)
        if (postId !== userLike) {
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
                    //setLiked(true)
                    //window.location = '../home'
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
        } else { alert("Vous aimez deja ce post") }
    }


    const disLikePost = (postId) => {
        if (1 == 1) {
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
                    //setLiked(false)
                    //window.location = '../home'
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
        } else { alert("Vous n'avez pas aimé ce post !") }
    }

    return (
        <div className="pagePosts">
            {posts.map((posts, index) => {
                return (
                    <div className="posts" key={index}>
                        <h4 className="posts_name">Post de {posts.names}</h4>
                        <h4 className="date">Posté le </h4>
                        <h4 className="posts_title">{posts.title}</h4>
                        <p className="posts_content">{posts.content}</p>
                        <div className="post_img">
                            <img className="posts_img" src={posts.imageUrl} alt="" />
                        </div>
                        <em className="posts_numberLike">Ce post est aimé par {posts.likes} personne-s</em>
                        <div className="posts_btn_like">
                            {<button className="posts_dislike" onClick={() => { disLikePost(posts.id_post) }}>Pour ne plus aimer ce post {elementDislikeWhite}</button>}
                            {<button className="posts_like" onClick={() => likePost(posts.id_post)}>Pour aimer ce post {elementLikeWhite}</button>}
                        </div>
                        {/* {!liked && <button className="posts_like" style={{ backgroundColor: 'white' }} onClick={() => likePost(posts.id_post)}>Pour aimer ce post, cliquer ici {elementLikeWhite}</button>} */}
                    </div>
                );
            })}
        </div>
    )
}

export default PostsImport;