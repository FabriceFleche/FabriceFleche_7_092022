import React from 'react';
import Banner from '../components/Banner';
import AuthForm from '../components/AuthForm';
import { NavLink } from 'react-router-dom';
import '../styles/connection.css';

const Connection = () => {
    return (
        <div>
            <Banner />
            <h1>Bienvenue sur le réseau social de votre entreprise</h1>
            <h2>veuillez saisir votre identifiant et votre mot de passe</h2>


            <p><AuthForm /></p>
            <div>
                <NavLink to="/CreateAccount">
                    Créer un compte
                </NavLink>
            </div>
        </div>



    );
};

export default Connection;