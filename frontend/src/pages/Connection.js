import React from 'react';
import Banner from '../components/Banner';
import AuthForm from '../components/login/AuthForm';
import { NavLink } from 'react-router-dom';
import '../styles/pages.css';

const Connection = () => {
    return (
        <div className='connection'>
            <Banner />
            <h1 className='connectionTitle'>Bienvenue sur le réseau social de votre entreprise</h1>
            <h2 className='connectionIdent'>veuillez saisir votre identifiant et votre mot de passe</h2>


            <AuthForm />

            <p className='connectionCreateUser'>
                Vous venez d'intégrer notre entreprise :
                <NavLink to="/CreateAccount">
                    Créer un compte
                </NavLink>
            </p>
        </div>



    );
};

export default Connection;