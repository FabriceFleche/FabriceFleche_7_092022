import React from 'react';
import Banner from '../components/Banner';
import Navigation from '../components/Navigation';
//import Posts from '../components/Posts';
import PostsImport from '../components/PostsImport';

const Home = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <h1>Publications du personnel</h1>
            <PostsImport />

        </div>
    );
};

export default Home;