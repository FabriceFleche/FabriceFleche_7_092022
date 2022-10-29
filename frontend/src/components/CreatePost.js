import { useRef } from "react";
import PostCreate from "./PostCreate";

const CreatePost = () => {
    const nameImput = useRef();
    const titleImput = useRef();
    const contentImput = useRef();

    // Permet de ne pas effacer les données saisies dans email et password lors du clic sur connecter s'il y a une erreur
    const submitHandlerBis = (event) => {
        event.preventDefault()

        // Permet de stocker les données saisies dans name, email et password
        const enteredName = nameImput.current.value;
        const enteredTitle = titleImput.current.value;
        const enteredContent = contentImput.current.value;
        PostCreate(enteredName, enteredTitle, enteredContent);

        // Pour vider les champs après clic connecter si Ok
        //emailImput.current.value="";
        //passwordImput.current.value="";
    }

    return (
        <form onSubmit={submitHandlerBis}>
            <div className='group'>
                <label htmlFor='text'>Name</label>
                <input type="text" id="name" ref={nameImput} required />
            </div>
            <div className='group'>
                <label htmlFor='text'>Title</label>
                <input type="text" id="title" ref={titleImput} required />
            </div>
            <div className='group'>
                <label htmlFor='text'>Content</label>
                <input type="text" id="content" ref={contentImput} required />
            </div>

            <div className='group'>
                <button>Créé un post</button>
            </div>
        </form>
    )

}

export default CreatePost;
