import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import PostsImport from '../components/PostsImport';
import '../styles/pages.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <h2 className='publications'>Vous visualisez l'ensemble des publications du personnel</h2>
            <PostsImport />
            <Footer />
        </div>



    );
};

export default Home;