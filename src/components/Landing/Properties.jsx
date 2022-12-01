import React from 'react';
import PropTypes from 'prop-types';

function Properties({ date, lang, rate }) {
  return (
    <div className="landing-cover-properties">
      <span>
        {date}
      </span>
      <span>
        Languages:
        {' '}
        {lang}
      </span>
      <span>
        Imd:
        {' '}
        {rate}
      </span>
    </div>
  );
}

Properties.propTypes = {
  date: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
};

export default Properties;
