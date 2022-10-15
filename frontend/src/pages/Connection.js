import React from 'react';
import Banner from '../components/Banner';
import SeConnecter from '../components/SeConnecter';

const Connection = () => {
    return (
        <div>
            <Banner />
            <h1>Bienvenue sur le réseau social de votre entreprise</h1>
            <h2>veuillez saisir votre identifiant et votre mot de passe</h2>
            <h3>Email :</h3>
            <p>""</p>
            <h3>Mot de passe :</h3>
            <p>""</p>
            <SeConnecter />
        </div>
    );
};

export default Connection;