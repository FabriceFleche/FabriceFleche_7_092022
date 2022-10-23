import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserLogin from './UserLogin';
//import AuthForm from './AuthForm';


const Button = () => {
    //const [button, setButton] = useState();
    return (
        <div>
            <NavLink to="/home">
                <button onClick={() => UserLogin}>Connexion</button>
            </NavLink>
        </div>
    );
};

export default Button;