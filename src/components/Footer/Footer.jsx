import React from 'react';
import FooterKasaLogo from '../../assets/FooterLogo.png';
import './Footer.scss';

function Footer() {
  return (
    <footer className="FooterKasa">
      <img src={FooterKasaLogo} />
      <h2>© 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

export default Footer;
