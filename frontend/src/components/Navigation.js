import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    <NavLink to="/">
                        <li>Deconnection</li>
                    </NavLink>
                    <NavLink to="/home">
                        <li>Tous les posts</li>
                    </NavLink>
                    <NavLink to="/myPosts">
                        <li>Mes posts</li>
                    </NavLink>
                    <NavLink to="/createPost">
                        <li>Créé un nouveau post</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;