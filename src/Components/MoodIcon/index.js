import React from 'react';

import PropTypes from 'prop-types';

import radMood from '../../assets/moods/rad.svg';
import goodMood from '../../assets/moods/good.svg';
import mehMood from '../../assets/moods/meh.svg';
import badMood from '../../assets/moods/bad.svg';
import awfulMood from '../../assets/moods/awful.svg';

const moods = [radMood, goodMood, mehMood, badMood, awfulMood];

function MoodIcon({ groupId, size }) {
  function getMoodIcon() {
    return moods[groupId - 1] || moods[0];
  }

  return <img src={getMoodIcon()} alt="MoodIcon" width={size} height={size} />;
}

MoodIcon.propTypes = {
  groupId: PropTypes.number.isRequired,
  size: PropTypes.number,
};

MoodIcon.defaultProps = {
  size: 40,
};

export default MoodIcon;
