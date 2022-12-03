import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import DelPost from '../components/deletePost/DelPost';
import Navigation from '../components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import '../styles/components/delPost.css';
const elementWarning = <FontAwesomeIcon icon={faTriangleExclamation} />;

const DeletePost = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <p className='warning'>{elementWarning} </p>
            <h2 className='title'>Voulez vous supprimer votre post ?</h2>
            <DelPost />
            <Footer />
        </div>
    );
};

export default DeletePost;