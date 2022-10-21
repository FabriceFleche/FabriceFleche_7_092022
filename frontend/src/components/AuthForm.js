import { useRef } from "react";
import { NavLink } from 'react-router-dom';

const AuthForm = () => {
    const emailImput = useRef();
    const passwordImput = useRef();

    // Permet de ne pas effacer les données saisies dans email et password lors du clic sur connecter s'il y a une erreur
    const submitHandler = (event) => {
        event.preventDefault()

        // Permet de stocker les données saisies dans email et password
        const enteredEmail = emailImput.current.value;
        console.log(enteredEmail)
        const enteredPassword = passwordImput.current.value;
        console.log(enteredPassword)

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
                <input type="text" id="password" ref={passwordImput} required />
            </div>
            <div className='group'>
                <NavLink to="/home">
                    <button>Connexion</button>
                </NavLink>
            </div>
        </form>

    )

}

export default AuthForm;