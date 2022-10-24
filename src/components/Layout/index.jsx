import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
/* import Footer from '../Footer'; */
import MiniCard from '../MiniCard';
/* import MovieCard from '../MovieCard'; */

import './Layout.scss';

function Layout({ children }) {
  return (
    <main className="main-layout">
      <Header />
      {children}
      {/* <Footer /> */}
      {/* <MovieCard /> */}
      <MiniCard />
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
