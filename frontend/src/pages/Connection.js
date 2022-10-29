import React from 'react';
import Banner from '../components/Banner';
import AuthForm from '../components/AuthForm';
import { NavLink } from 'react-router-dom';
import '../styles/connection.css';

const Connection = () => {
    return (
        <div>
            <p><Banner /></p>
            <h1>Bienvenue sur le réseau social de votre entreprise</h1>
            <h2>veuillez saisir votre identifiant et votre mot de passe</h2>


            <p><AuthForm /></p>
            <p>
                <NavLink to="/CreateAccount">
                    Créer un compte
                </NavLink>
            </p>
        </div>



    );
};

export default Connection;