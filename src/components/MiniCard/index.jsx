import React from 'react';
import './MiniCard.scss';
import ReactPlayer from 'react-player';

function MiniCard() {
  return (
    <article className="card-container">
      <figure>
        <ReactPlayer
          url="https://youtu.be/j-dlYiyliUQ"
          width="100%"
          height="100%"
        />
        <div className="card-container-progress">
          <p>11 min from 23 min</p>
          <progress max={100} value={30}>70%</progress>
        </div>
        <figcaption className="card-container-description">
          Hola
        </figcaption>
      </figure>
    </article>
  );
}

export default MiniCard;
