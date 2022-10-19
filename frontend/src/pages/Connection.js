import React from 'react';
import Banner from '../components/Banner';
import SeConnecter from '../components/SeConnecter';
import AuthForm from '../components/AuthForm';
import '../styles/connection.css';

const Connection = () => {
    return (
        <div>
            <Banner />
            <h1>Bienvenue sur le réseau social de votre entreprise</h1>
            <h2>veuillez saisir votre identifiant et votre mot de passe</h2>
            {/* <form>
                <div className='group'>
                    <label htmlFor='login'>Email</label>
                    <input type="text" name="login" />
                </div>
                <div className='group'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type="text" name="password" />
                </div>
                <div className='group'>
                    <button>Connexion</button>
                </div>
            </form> */}

            <p><SeConnecter /></p>
            <p><AuthForm /></p>
        </div>
    );
};

export default Connection;