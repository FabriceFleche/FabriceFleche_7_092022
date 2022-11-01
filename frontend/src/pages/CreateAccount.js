import React from 'react';
import Banner from '../components/Banner';
import CreateForm from '../components/CreateForm';
import '../styles/pages.css';

const CreateAccount = () => {
    return (
        <div>
            <Banner />
            <h1 className='connectionTitle'>Créer votre compte</h1>
            <CreateForm />
        </div>
    );
};

export default CreateAccount;