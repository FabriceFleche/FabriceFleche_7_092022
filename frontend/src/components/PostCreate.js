const textFromStorage = localStorage.getItem("token");
const idFromStorage = localStorage.getItem("id");

function PostCreate(enteredName, enteredTitle, enteredContent, enteredImage) {
    const baseURL = "http://localhost:3000/api/posts/"
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${textFromStorage}`
        },
        body: JSON.stringify({ userId: idFromStorage, name: enteredName, title: enteredTitle, content: enteredContent, imageUrl: enteredImage })
    };
    fetch(baseURL, requestOptions)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            alert('Votre post a été créé')
            window.location = '../MyPosts';
        });
}

export default PostCreate;