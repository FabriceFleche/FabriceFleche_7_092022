import { useNavigate } from 'react-router';
import { useRef } from "react";
import userCreate from './UserCreate';
import '../styles/components/authForm.css';

const CreateForm = () => {
    const nameImput = useRef();
    const emailImput = useRef();
    const passwordImput = useRef();
    let navigate = useNavigate();
    // Permet de ne pas effacer les données saisies dans email et password lors du clic sur connecter s'il y a une erreur
    const submitHandler = (event) => {
        event.preventDefault()
        navigate('../')
        // Permet de stocker les données saisies dans name, email et password
        const enteredName = nameImput.current.value;
        const enteredEmail = emailImput.current.value;
        const enteredPassword = passwordImput.current.value;
        userCreate(enteredName, enteredEmail, enteredPassword);

        // Pour vider les champs après clic connecter si Ok
        //emailImput.current.value="";
        //passwordImput.current.value="";
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form'>
                <label htmlFor='text'>Name</label>
                <input type="text" id="text" ref={nameImput} required />
            </div>
            <div className='form'>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" ref={emailImput} required />
            </div>
            <div className='form'>
                <label htmlFor='password'>Mot de passe</label>
                <input type="password" id="password" ref={passwordImput} required />
            </div>

            <div className='formButton'>
                <button>Connexion</button>
            </div>
        </form>
    )
}

export default CreateForm;
