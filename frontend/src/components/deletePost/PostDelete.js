const textFromStorage = localStorage.getItem("token");
const idFromStorage = localStorage.getItem("id");
const adminFromStorage = localStorage.getItem("admin");

//Recuperation de l id du post
let idPost = window.location.href;
let url = new URL(idPost);
let refId = url.searchParams.get("id");

// Recuperation de l url du post selectione
const urlPost = "http://localhost:3000/api/posts/" + refId

function PostDelete() {
    const baseURL = urlPost
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${textFromStorage}`
        },
        body: JSON.stringify({ idUser: idFromStorage, admin: adminFromStorage })
    };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then((data) => {
            if (data.message === undefined) {
                window.location = '../myPosts'
            }
        })
        .catch((err) => console.log(err.message));
}

export default PostDelete;