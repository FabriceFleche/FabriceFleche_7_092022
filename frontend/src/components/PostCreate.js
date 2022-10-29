const textFromStorage = localStorage.getItem("token");

function PostCreate(enteredName, enteredTitle, enteredContent) {
    const baseURL = "http://localhost:3000/api/posts/:id"
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${textFromStorage}`
        },
        body: JSON.stringify({ name: enteredName, title: enteredTitle, content: enteredContent })
    };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            alert('Votre post a été créé')
            //window.location = '../pages/MyPosts';
        });
}

export default PostCreate;