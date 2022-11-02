import React from 'react';
import '../styles/components/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <ul className='footer_ul'>
                <li className='footer_ul_li'>Groupomania</li>
                <li className='footer_ul_li'>Politique de protection des données</li>
                <li className='footer_ul_li'>Conditions générales d'utilisation</li>
            </ul>
        </div>
    );
};

export default Footer;