import React from 'react';
import './Landing.scss';
import Button from '../Button';

function Landing() {
  return (
    <section className="landing">
      <div className="landing-cover">
        <h1>THE LOST CITY</h1>
        <p className="landing-cover-description">
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Qui adipisci saepe nobis
          minus similique aspernatur, hic magnam,
          maxime voluptate odit reiciendis esse,
          distinctio animi officiis accusantium
          sint eveniet consequuntur repudiandae
        </p>
        <div className="landing-cover-properties">
          <span>
            126 min.
          </span>
          <span>
            Subtitles
          </span>
          <span>
            Imd: 9,1/10
          </span>
        </div>
        <div className="landing-cover-btns">
          <Button>
            play
          </Button>
        </div>

      </div>

    </section>
  );
}

export default Landing;
