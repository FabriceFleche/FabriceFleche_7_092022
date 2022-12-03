import React from 'react';
import Banner from '../components/Banner';
import CreateForm from '../components/CreateForm';
import '../styles/pages.css';
import '../styles/components/authForm.css';

const CreateAccount = () => {
    return (
        <div>
            <Banner />
            <h1 className='connectionTitle'>Créer votre compte</h1>
            <CreateForm />
            <p className='form_regex_title'>Votre mot de passe doit comporter :</p>
            <p className='form_regex_content'> - au moins 1 caractère alphabétique minuscule</p>
            <p className='form_regex_content'>- au moins 1 caractère alphabétique majuscule</p>
            <p className='form_regex_content'> - au moins 1 caractère numérique</p>
            <p className='form_regex_content'>- doit comporter 6 caractères ou plus </p>
        </div>
    );
};

export default CreateAccount;