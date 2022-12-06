const textFromStorage = localStorage.getItem("token");
const idFromStorage = localStorage.getItem("id");
const nameFromStorage = localStorage.getItem("name");
const now = new Date();
const date = now.getTime();

function PostCreate(enteredTitle, enteredContent, enteredFile) {
    const formData = new FormData();
    formData.append("date", date)
    formData.append("userId", idFromStorage)
    formData.append("name", nameFromStorage)
    formData.append("title", enteredTitle)
    formData.append("content", enteredContent)
    formData.append("image", enteredFile)

    const baseURL = "http://localhost:3000/api/posts/"
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'multipart/form-data',
            Authorization: `Bearer ${textFromStorage}`
        },
        body: formData

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