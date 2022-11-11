import React from 'react';
import Banner from '../components/Banner';
//import PostChangeUser from '../components/changePost/PostChangeUser'
import PostPut from '../components/changePost/PostPut';
import Navigation from '../components/Navigation';



const ChangePostId = () => {
    return (
        <div>
            <Banner />
            <Navigation />
            <h1>Modifier votre post</h1>
            {/* <PostChangeUser /> */}
            <PostPut />
        </div>
    );
};

export default ChangePostId;