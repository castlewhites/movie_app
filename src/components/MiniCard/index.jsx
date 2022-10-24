import React from 'react';
import './MiniCard.scss';

function MiniCard() {
  return (
    <article className="card-container">
      <figure>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/lUO9lBtpHRs?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        <div className="card-container-progress">
          <span>11 min from 23 min</span>
          <progress max={100} value="30"> 70% </progress>
        </div>
        <figcaption className="card-container-description">
          Harry Potter
        </figcaption>
      </figure>
    </article>
  );
}

export default MiniCard;
