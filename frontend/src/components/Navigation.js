import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/navigation.css';

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul className='navigation_ul'>
                    <NavLink to="/home">
                        <li className='navigation_ul_li'>Tous les posts</li>
                    </NavLink>
                    <NavLink to="/myPosts">
                        <li className='navigation_ul_li'>Mes posts</li>
                    </NavLink>
                    <NavLink to="/createPost">
                        <li className='navigation_ul_li'>Créer un nouveau post</li>
                    </NavLink>
                    <NavLink to="/">
                        <li className='navigation_ul_li'>Deconnection</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;