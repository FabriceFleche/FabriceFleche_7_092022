// const textFromStorage = localStorage.getItem("token");
// //const idFromStorage = localStorage.getItem("id");

// //Recuperation de l id du post
// let idPost = window.location.href;
// let url = new URL(idPost);
// let refId = url.searchParams.get("id");
// console.log(refId);
// // Recuperation de l url du post selectione
// const urlPost = "http://localhost:3000/api/posts/" + refId


// function PostChange(enteredName, enteredTitle, enteredContent) {
//     const baseURL = urlPost
//     const requestOptions = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${textFromStorage}`
//         },
//         body: JSON.stringify({ name: enteredName, title: enteredTitle, content: enteredContent, imageUrl: "URL" })
//     };
//     fetch(baseURL, requestOptions)
//         .then(response => response.json())
//         .then((data) => {
//             console.log(data)
//             alert('Votre post a été modifié')
//             //window.location = '../pages/MyPosts';
//         });
// }

// export default PostChange;