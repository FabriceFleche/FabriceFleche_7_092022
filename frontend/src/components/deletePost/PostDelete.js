const textFromStorage = localStorage.getItem("token");

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
    };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then(() => {
            window.location = '../myPosts';
        });
}

export default PostDelete;