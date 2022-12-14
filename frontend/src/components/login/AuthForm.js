import { useRef } from "react";
import UserLogin from './UserLogin';
import '../../styles/components/authForm.css';

const AuthForm = () => {
    const emailImput = useRef();
    const passwordImput = useRef();

    const submitHandler = (event) => {
        event.preventDefault()

        // Permet de stocker les données saisies dans email et password
        const enteredEmail = emailImput.current.value;
        const enteredPassword = passwordImput.current.value;
        UserLogin(enteredEmail, enteredPassword);
    }

    return (
        <form onSubmit={submitHandler}>
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

export default AuthForm;
