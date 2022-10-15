import React from 'react';
import { NavLink } from 'react-router-dom';

const SeConnecter = () => {
    return (
        <div>
            <div className="seConnecter">
                <ul>
                    <NavLink to="/home">
                        <li>Se connecter</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default SeConnecter;