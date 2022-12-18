import { useNavigate } from 'react-router';
import { useRef, useState } from "react";
import { validEmail, validPassword } from '../regex/Regex';
import userCreate from './UserCreate';
import '../../styles/components/authForm.css';

const CreateForm = () => {
    const nameImput = useRef();
    const emailImput = useRef();
    const passwordImput = useRef();
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);

    const validate = () => {
        if (!validEmail.test(email)) {
            setEmailErr(true)
        } else { setEmailErr(false) }
        if (!validPassword.test(password)) {
            setPwdError(true)
        } else { setPwdError(false) }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (emailErr !== true && pwdError !== true) {
            navigate('../')

            // Permet de stocker les données saisies dans name, email et password
            const enteredName = nameImput.current.value;
            const enteredEmail = emailImput.current.value;
            const enteredPassword = passwordImput.current.value;

            userCreate(enteredName, enteredEmail, enteredPassword);
        } else {
            alert("Vérifier la saisie de votre email et/ou de votre mot de passe pour respecter les consignes")
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form'>
                <label htmlFor='text'>Name</label>
                <input type="text" id="text" ref={nameImput} required />
            </div>
            <div className='form'>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" value={email} ref={emailImput} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='form'>
                <label htmlFor='password'>Mot de passe</label>
                <input type="password" id="password" value={password} ref={passwordImput} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className='formButton'>
                <button onClick={validate}>Créer votre compte</button>
            </div>
        </form>
    )
}

export default CreateForm;
