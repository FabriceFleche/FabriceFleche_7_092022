import React, { useEffect, useState } from "react";
import '../../styles/components/postsImport.css';

const textFromStorage = localStorage.getItem("token");

//if (1 == 1) { Administrateur() } else { alert("ca fonctionne") };
// function testNum() {

//     if (1 == 0) {
//         Administrateur();
//     } else {
//         alert("ca fonctionne");
//     }

// }

const Administrateur = () => {
    const [admin, setAdmin] = useState([])

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
            .then((data) => { setAdmin(data) })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        postsFetch()
    }, [])

    function buttonCLickModify(posts) {
        window.location = '../ChangePostId' + posts.id_post
    };
    function buttonClickDelete(posts) {
        window.location = '../DeletePost' + posts.id_post
    };

    return (
        <div>
            {admin.map((posts, index) => {
                return (
                    <div className="posts" key={index}>
                        <h4 className="posts_name">Post de {posts.names}</h4>
                        <h4 className="posts_title">{posts.title}</h4>
                        <p className="posts_content">{posts.content}</p>
                        <div className="posts_button">
                            <button className="posts_button_click" onClick={() => buttonCLickModify(posts)}>Modifier</button>
                            <button className="posts_button_click" onClick={() => buttonClickDelete(posts)}>Supprimer</button>
                        </div>
                    </div>
                );
            })}
        </div>
    )

}

export default Administrateur;