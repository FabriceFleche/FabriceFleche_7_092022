import React, { useEffect, useState } from "react";
import '../../styles/components/postsImport.css';

const textFromStorage = localStorage.getItem("token");
const idFromStorage = localStorage.getItem("id");

const PostImport = () => {
    const [post, setPost] = useState([])

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
        window.location = '../ChangePostId?id=' + post.id_post
    };
    function buttonClickDelete(post) {
        window.location = '../DeletePost?id=' + post.id_post
    };
    // function buttonClickDetail(post) {
    //     window.location = '../DetailPost/' + post.id_post
    // };

    return (
        <div>
            {post.map((post, index) => {
                return (
                    <div className="posts" key={index}>
                        <h4 className="posts_name">Post de {post.names}</h4>
                        <h4 className="posts_title">{post.title}</h4>
                        <p className="posts_content">{post.content}</p>
                        <div className="posts_button">
                            {/* <button className="posts_button_click" onClick={() => buttonClickDetail(post)}>Détail du post</button> */}
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