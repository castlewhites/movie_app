import React from 'react';
import './SectionBanner.scss';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

function SectionBanner({ title, movieList }) {
  return (
    <section className="sectionBanner">
      <div className="sectionBanner__title">
        <h1 style={{ color: '#fff' }}>{ title }</h1>
        <span className="sectionBanner__bar" />
      </div>
      <div className="sectionBanner__movies">
        {
          movieList.map((movie) => (
            <MovieCard
              title={movie.title}
              poster={movie.poster_path}
            />
          ))
        }
      </div>
    </section>
  );
}

SectionBanner.propTypes = {
  title: PropTypes.string.isRequired,
  movieList: PropTypes.string.isRequired,
};

export default SectionBanner;
