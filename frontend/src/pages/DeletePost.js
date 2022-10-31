import React from 'react';
import Banner from '../components/Banner';
import DelPost from '../components/deletePost/DelPost';
import Navigation from '../components/Navigation';


const DeletePost = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <h2>Voulez vous supprimer votre post ?</h2>
            <DelPost />
        </div>
    );
};

export default DeletePost;