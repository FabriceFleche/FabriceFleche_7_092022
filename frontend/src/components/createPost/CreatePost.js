import { useRef } from "react";
import PostCreate from "./PostCreate";
import '../../styles/components/createPost.css';

const CreatePost = () => {
    const titleImput = useRef();
    const contentImput = useRef();
    const fileImput = useRef();

    const submitHandlerBis = (event) => {
        event.preventDefault()

        // Permet de stocker les données saisies dans name, email, password et image
        const enteredTitle = titleImput.current.value;
        const enteredContent = contentImput.current.value;
        const enteredFile = fileImput.current.files[0];

        PostCreate(enteredTitle, enteredContent, enteredFile);
    }

    return (
        <form className="formCreatepost" onSubmit={submitHandlerBis}>
            <div className='group'>
                <label htmlFor='title'>Titre</label>
                <input className="input" type="text" id="title" ref={titleImput} required />
            </div>
            <div className='group'>
                <label htmlFor='content'>Commentaire</label>
                <textarea className="inputContent" type="text" id="content" ref={contentImput} required />
            </div>
            <div className='group'>
                <label htmlFor='image'>Photo</label>
                <input type="file" name="image" id="image" accept="image/*" multiple={false} ref={fileImput} />
            </div>
            <div className='group_button_create'>
                <button className="formCreatepost_button">Créer le post</button>
            </div>
        </form>
    )
}

export default CreatePost;
