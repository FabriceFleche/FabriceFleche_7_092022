import React from 'react';
import Banner from '../components/Banner';
import Navigation from '../components/Navigation';
//import posts from '../components/Posts';

const Home = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <h1>Publications du personnel</h1>

            {/* {posts.map((post) => (post))} */}

        </div>
    );
};

export default Home;