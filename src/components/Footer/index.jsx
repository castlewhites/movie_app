import React from 'react';
import './Footer.scss';

function Footer() {
  const footerOps = ['Tv Show', 'Movies', 'Trailers', 'My list'];
  return (
    <footer className="footer">
      <div className="footer-section-one">
        <div className="footer-section-one-logo">
          <p className="footer-section-one-logo-red">MOVIE</p>
          <p className="footer-section-one-logo-white">DOM</p>
        </div>
        <ul className="footer-section-one-menu">
          {
            footerOps.map((op) => (
              <li key={op}>
                {' '}
                {op}
                {' '}
              </li>
            ))
          }
        </ul>
        <div className="footer-section-one-icons">
          <span>X</span>
          <span>X</span>
          <span>X</span>
        </div>
      </div>
      {/* <div>
        <h1>Hola</h1>
      </div> */}
    </footer>
  );
}

export default Footer;
