import React from 'react';
import './Landing.scss';
import PropTypes from 'prop-types';
import Button from '../Button';
import Properties from './Properties';

function Landing({ cover }) {
  const movieBg = `https://image.tmdb.org/t/p/w500${cover?.backdrop_path}`;
  return (
    <section className="landing" style={{ backgroundImage: `url(${movieBg})` }}>
      <div className="landing-cover" style={{ backgroundImage: cover?.poster_path }}>
        <h1>{cover?.title}</h1>
        <p className="landing-cover-description">
          {cover?.overview}
        </p>
        <Properties
          date={cover?.release_date}
          lang={cover?.original_language}
          rate={cover?.vote_average}
        />
        <div className="landing-cover-btns">
          <Button classSelector="primary">
            play
          </Button>
          <Button classSelector="secundary">
            + Add list
          </Button>
        </div>

      </div>

    </section>
  );
}
Landing.propTypes = {
  cover: PropTypes.objectOf.isRequired,
};

export default Landing;
