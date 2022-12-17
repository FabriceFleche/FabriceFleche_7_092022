import React from 'react';
import Banner from '../components/Banner';
import Navigation from '../components/Navigation';
import PostImport from '../components/Post/PostImport';
import Footer from '../components/Footer';
import '../styles/pages.css';

const MyPosts = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <h2 className='publications'>Mes posts</h2>
            <PostImport />
            <Footer />
        </div>
    );
};

export default MyPosts;