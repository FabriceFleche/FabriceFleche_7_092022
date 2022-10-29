import React from 'react';
import Banner from '../components/Banner';
import Navigation from '../components/Navigation';
import CreatePost from '../components/CreatePost';


const CreatePostId = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <h1>Créé un nouveau post</h1>
            <CreatePost />
        </div>
    );
};

export default CreatePostId;