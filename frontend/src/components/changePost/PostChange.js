const textFromStorage = localStorage.getItem("token");
const idFromStorage = localStorage.getItem("id");

function PostChange(enteredName, enteredTitle, enteredContent) {
    const baseURL = "http://localhost:3000/api/posts/" + idFromStorage
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${textFromStorage}`
        },
        body: JSON.stringify({ userId: idFromStorage, name: enteredName, title: enteredTitle, content: enteredContent, imageUrl: "URL" })
    };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            alert('Votre post a été modifié')
            //window.location = '../pages/MyPosts';
        });
}

export default PostChange;