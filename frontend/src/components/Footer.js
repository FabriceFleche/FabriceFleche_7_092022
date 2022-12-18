import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer_ul'>
                <p className='footer_ul_li'>Groupomania</p>
                <p className='footer_ul_li'>Politique de protection des données</p>
                <p className='footer_ul_li'>Conditions générales d'utilisation</p>
                <NavLink to="/admin">
                    <p className='footer_ul_li'>Admin</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;