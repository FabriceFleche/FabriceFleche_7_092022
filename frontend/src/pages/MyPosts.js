import React from 'react';
import Banner from '../components/Banner';
import Navigation from '../components/Navigation';
import PostImport from '../components/Post/PostImport';


const MyPosts = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <h1>Mes posts</h1>
            <PostImport />

        </div>
    );
};

export default MyPosts;