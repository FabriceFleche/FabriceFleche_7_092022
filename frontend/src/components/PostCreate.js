const textFromStorage = localStorage.getItem("token");
const idFromStorage = localStorage.getItem("id");

function PostCreate(enteredName, enteredTitle, enteredContent, selectedFile) {
    const formData = new FormData();
    formData.append("userId", idFromStorage)
    formData.append("name", enteredName)
    formData.append("title", enteredTitle)
    formData.append("content", enteredContent)
    formData.append("image", selectedFile)

    const baseURL = "http://localhost:3000/api/posts/"
    const requestOptions = {
        method: 'POST',
        headers: {

            Authorization: `Bearer ${textFromStorage}`
        },
        body: formData
        // body: JSON.stringify({ userId: idFromStorage, name: enteredName, title: enteredTitle, content: enteredContent, imageUrl: enteredImage })
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