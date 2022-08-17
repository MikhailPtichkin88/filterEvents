import React from 'react';
import bg from "../../assets/images/Footer.jpg";

const Footer = () => {

    return (
        <footer className="footer" style={{
            backgroundImage: `url(${bg})`,
            minHeight: '396px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>

        </footer>
    );
};

export default Footer;