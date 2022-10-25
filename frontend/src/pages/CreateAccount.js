import React from 'react';
import Banner from '../components/Banner';
import Navigation from '../components/Navigation';
import CreateForm from '../components/CreateForm';

const CreateAccount = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <h1>Créer un compte</h1>
            <CreateForm />
        </div>
    );
};

export default CreateAccount;