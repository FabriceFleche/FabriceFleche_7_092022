const textFromStorage = localStorage.getItem("token");
//const idFromStorage = localStorage.getItem("id");

function PostDelete() {
    const baseURL = "http://localhost:3000/api/posts/" + 9
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${textFromStorage}`
        },

    };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then((data) => {
            window.location = '../home';
        });
}

export default PostDelete;