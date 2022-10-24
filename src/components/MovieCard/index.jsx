import React from 'react';
import './MovieCard.scss';
import harry from '../../assets/download.jpeg';

function MovieCard() {
  return (
    <article className="card-container">
      <figure>
        <div className="card-container-ad">New</div>
        <img src={harry} alt="harry potter" />
        <figcaption className="card-container-description">
          Harry Potter
        </figcaption>
      </figure>
    </article>
  );
}

export default MovieCard;
