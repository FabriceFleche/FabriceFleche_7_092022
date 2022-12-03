import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import PostPut from '../components/changePost/PostPut';
import Navigation from '../components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const elementWarning = <FontAwesomeIcon icon={faTriangleExclamation} />;

const ChangePostId = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <h1 className='publications'><pre>{elementWarning}    Vous allez modifier votre post !</pre></h1>
            <PostPut />
            <Footer />
        </div>
    );
};

export default ChangePostId;