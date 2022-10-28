const textFromStorage = localStorage.getItem("token");
console.log(textFromStorage);

function postsImport() {
    const baseURL = "http://localhost:3000/api/posts/"
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        authorization: textFromStorage,
    };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            const posts = data.content;
            sessionStorage.setItem("posts", posts);

        });

}

export default postsImport;