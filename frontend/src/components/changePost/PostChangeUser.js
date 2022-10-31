import { useRef } from "react";
//import PostCreate from "./PostCreate";

const PostChangeUser = () => {
    const nameImput = useRef();
    const titleImput = useRef();
    const contentImput = useRef();

    // Permet de ne pas effacer les données saisies dans email et password lors du clic sur connecter s'il y a une erreur
    const submitHandlerTer = (event) => {
        event.preventDefault()

        // Permet de stocker les données saisies dans name, email et password
        // const enteredName = nameImput.current.value;
        // const enteredTitle = titleImput.current.value;
        // const enteredContent = contentImput.current.value;
        // PostCreate(enteredName, enteredTitle, enteredContent);
    }

    return (
        <form onSubmit={submitHandlerTer}>
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
                {/* Lancer fonction fetch qui modifie la BDD */}
                <button>Modifier le post</button>
            </div>
        </form>
    )
}

export default PostChangeUser;
