import React from 'react';
import './MovieCard.scss';
import PropTypes from 'prop-types';

function MovieCard({ title, poster }) {
  return (
    <article className="card-container">
      <figure>
        <div className="card-container-ad">New</div>
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="" />
        <figcaption className="card-container-description">
          {title}
        </figcaption>
      </figure>
    </article>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,

};

export default MovieCard;
