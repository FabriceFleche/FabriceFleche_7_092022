import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/navigation.css';

const Navigation = () => {
    const linkMyPost = () => {
        window.location = "/myPosts"
    }

    return (
        <div>
            <div className="navigation">
                <div className='navigation_ul'>
                    <NavLink to="/home">
                        <p className='navigation_ul_li'>Tous les posts</p>
                    </NavLink>
                    <NavLink>
                        <p className='navigation_ul_li' onClick={() => linkMyPost()}>Mes posts</p>
                    </NavLink>
                    <NavLink to="/createPost">
                        <p className='navigation_ul_li'>Créer un nouveau post</p>
                    </NavLink>
                    <NavLink to="/">
                        <p className='navigation_ul_li'>Deconnection</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;