// import React from "react";
// const textFromStorage = localStorage.getItem("token");

// const ImageHandler = (event) => {
//     const file = event.target.file[0];
//     const formData = new FormData()
//     formData.append('image', file)

//     const baseURL = "http://localhost:3000/api/posts/"
//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             Authorization: `Bearer ${textFromStorage}`
//         },
//         body: formData

//     };
//     fetch(baseURL, requestOptions)
//         .then(response => response.json())
//         .then((data) => {
//             console.log(data)
//             alert('l image a été envoyé')

//         });

//     return (

//         <div>
//             <input type="file" name="image" accept="image/*" multiple={false} onChange={ImageHandler} />
//         </div>
//     )
// }


// export default ImageHandler;