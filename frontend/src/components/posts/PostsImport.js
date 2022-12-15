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
    //const [posts, setPosts] = useState([])
    const [userLike, setUserLike] = useState([])

    // Recuperation de tous les posts
    const postsFetch = () => {
        //     const baseURL = "http://localhost:3000/api/posts/"
        //     const requestOptions = {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Authorization: `Bearer ${textFromStorage}`
        //         }
        //     };
        //     fetch(baseURL, requestOptions)
        //         .then(response => { return response.json() })
        //         .then((data) => { setPosts(data) })
        //         .catch((err) => console.log(err));

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
            .then((result) => { setUserLike(result) })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        postsFetch()
    }, [])

    // Gestion de l'affichage des boutons like/dislike

    // function DisLike(props) {
    //     return <button className="posts_dislike" onClick={() => { disLikePost(userLike.id_post) }}>Pour ne plus aimer ce post {elementDislikeWhite}</button>
    // }

    // function Like(props) {
    //     return <button className="posts_like" onClick={() => { likePost(userLike.id_post) }}>Pour aimer ce post {elementLikeWhite}</button>
    // }

    function ValidLike(props) {
        const isLike = props.isLike;
        const idPost = props.idPost;

        if (isLike) {
            //return <DisLike />;
            return <button className="posts_dislike" onClick={() => { disLikePost(idPost) }}>Pour ne plus aimer ce post {elementDislikeWhite}</button>
        }
        //return <Like />;
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
    //console.log(userLike)
    return (
        <div className="pagePosts">
            {userLike
                /* {posts */
                .sort((a, b) => b.date - a.date)
                .map((posts, index) => {
                    return (
                        <div className="posts" key={index}>
                            <h4 className="posts_name">Post de {posts.names}</h4>
                            <h4 className="date">Posté le {dateFormater(posts.date)}</h4>
                            <h4 className="posts_title">{posts.title}</h4>
                            <p className="posts_content">{posts.content}</p>
                            <div className="post_img">
                                <img className="posts_img" src={posts.imageUrl} alt="" />
                            </div>
                            <em className="posts_numberLike">Ce post est aimé par {posts.likes} personne-s</em>
                            <div className="posts_btn_like">
                                <ValidLike isLike={posts.isLiked} idPost={posts.id_post} />
                                {/* {<button className="posts_dislike" onClick={() => { disLikePost(posts.id_post) }}>Pour ne plus aimer ce post {elementDislikeWhite}</button>} */}
                                {/* {<button className="posts_like" onClick={() => likePost(posts.id_post)}>Pour aimer ce post {elementLikeWhite}</button>} */}
                            </div>
                        </div>
                    );
                })}
        </div>
    )
}

export default PostsImport;