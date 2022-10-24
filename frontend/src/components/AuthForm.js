import { useRef } from "react";
import { NavLink } from 'react-router-dom';
import userLogin from './UserLogin';


const AuthForm = () => {
    const emailImput = useRef();
    const passwordImput = useRef();

    // Permet de ne pas effacer les données saisies dans email et password lors du clic sur connecter s'il y a une erreur
    const submitHandler = (event) => {
        event.preventDefault()

        // Permet de stocker les données saisies dans email et password
        const enteredEmail = emailImput.current.value;
        const enteredPassword = passwordImput.current.value;
        userLogin(enteredEmail, enteredPassword);
        // Pour vider les champs après clic connecter si Ok
        //emailImput.current.value="";
        //passwordImput.current.value="";
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='group'>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" ref={emailImput} required />
            </div>
            <div className='group'>
                <label htmlFor='password'>Mot de passe</label>
                <input type="password" id="password" ref={passwordImput} required />
            </div>
            <div className='group'>

                <button >Connexion</button>

            </div>
        </form>

    )

}

export default AuthForm;
