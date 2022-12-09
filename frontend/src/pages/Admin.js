import React from 'react';
import Administrateur from '../components/admin/Administrateur';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import '../styles/pages.css';

const admin = localStorage.getItem("admin");

function UserAdmin(props) {
    return <Administrateur />;
}

function UserNoAdmin(props) {
    return <h1 className='noAdmin'>Vous n'avez pas l'autorisation de consulter cette page</h1>;
}

function TestAdmin() {
    //const isLoggedIn = props.isLoggedIn;
    if (admin === "77") {
        return <UserAdmin />;
    }
    return <UserNoAdmin />;
}

const Admin = () => {

    return (
        <div>
            <Banner />
            <Navigation />
            <h2 className='publications'>Vous êtes dans la page Admin</h2>
            <h2 className='publications'>Vous pouvez gerer l'ensemble des publications</h2>
            <TestAdmin />,
            <Footer />
        </div>



    );
};

export default Admin;