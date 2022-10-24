import React from 'react';
import Banner from '../components/Banner';
//import UserLogin from '../components/UserLogin';
import AuthForm from '../components/AuthForm';
import Button from '../components/Button';
import '../styles/connection.css';

const Connection = () => {
    return (
        <div>
            <Banner />
            <h1>Bienvenue sur le réseau social de votre entreprise</h1>
            <h2>veuillez saisir votre identifiant et votre mot de passe</h2>


            <p><AuthForm /></p>


        </div>
    );
};

export default Connection;