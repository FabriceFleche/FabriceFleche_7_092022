import React from 'react';
import logo from '../assets/icon-left-font-monochrome-black.svg'

const Banner = () => {
    return (
        <div className='groupomania-banner'>
            <img src={logo} alt='Groupomania' className='groupomania-logo' />
        </div>
    );
};

export default Banner;
