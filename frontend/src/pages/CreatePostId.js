import React from 'react';
import Banner from '../components/Banner';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CreatePost from '../components/createPost/CreatePost';

const CreatePostId = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <h2 className='publications'>Vous souhaitez créer un nouveau post</h2>
            <h3 className='publications'>Remplissez les champs ci-dessous</h3>
            <CreatePost />
            <Footer />
        </div>
    );
};

export default CreatePostId;