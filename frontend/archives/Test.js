// import React, { useEffect, useState, useRef } from "react";
// import '../../styles/components/postsImport.css';

// const textFromStorage = localStorage.getItem("token");

// //Recuperation de l id du post
// let idPost = window.location.href;
// let url = new URL(idPost);
// let refId = url.searchParams.get("id");

// const PostPut = () => {
//     const [post, setPost] = useState([])
//     const [isEditing, setIsEditing] = useState(false);
//     const [editContent, setEditContent] = useState("");
//     const [editImage, setEditImage] = useState();
//     const fileImput = useRef();
//     const enteredFile = fileImput.current.files[0];
//     const formData = new FormData();

//     const handleEdit = () => {
//         // console.log(post[0]);
//         // const data = {
//         //     name: post[0].names,
//         //     title: post[0].title,
//         //     content: editContent ? editContent : post[0].content,

//         //     id_post: post[0].id_post
//         // }
//         formData.append("name", post[0].names)
//         formData.append("title", post[0].title)
//         formData.append("content", editContent ? editContent : post[0].content)
//         formData.append("image", editImage ? enteredFile : post[0].fileImput.current.files[0])
//         formData.append("id_post", post[0].id_post)
//         const urlPost = "http://localhost:3000/api/posts/"
//         const baseURL = urlPost
//         const requestOptions = {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${textFromStorage}`
//             },
//             body: formData
//         };
//         fetch(baseURL, requestOptions)
//             .then(response => response.json())
//             .then((data) => {
//                 console.log(data)
//                 setIsEditing(false)
//                 window.location = '../../myPosts'
//             });
//     }

//     const returned = () => {
//         window.location = '../MyPosts'
//     }

//     const postFetch = () => {
//         const baseURL = "http://localhost:3000/api/posts/" + refId
//         const requestOptions = {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${textFromStorage}`
//             }
//         };
//         fetch(baseURL, requestOptions)
//             .then(response => { return response.json() })
//             .then((data) => { setPost(data) })
//             .catch((err) => console.log(err));
//     }

//     useEffect(() => {
//         postFetch()
//     }, [])


//     return (
//         <div>
//             {post.map((post, index) => {
//                 return (
//                     <div className="posts" key={index}>
//                         <h4 className="posts_name">Post de {post.names}</h4>
//                         <h4 className="posts_title">{post.title}</h4>
//                         {
//                             isEditing ? <textarea defaultValue={post.content} onChange={(e) => setEditContent(e.target.value)} ></textarea> :
//                                 <p className="posts_content">{post.content}</p>
//                         }
//                         {/* <img className="posts_img" src={post.imageUrl} alt="Post Img" /> */}
//                         {
//                             isEditing ? <input type="file" name="image" accept="image/*" multiple={false} ref={fileImput} onChange={(e) => setEditImage(e.target.value)} /> :
//                                 <img className="posts_img" src={post.imageUrl} alt="Post Img" />
//                         }
//                         <div className="posts_button">
//                             {
//                                 isEditing ? <button className="posts_button_click" onClick={() => handleEdit()}>Valider</button> :
//                                     <button className="posts_button_click" onClick={() => setIsEditing(true)}>Modifier</button>
//                             }
//                             <button className="posts_button_click" onClick={() => returned()}>Retour</button>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     )
// }

// export default PostPut;