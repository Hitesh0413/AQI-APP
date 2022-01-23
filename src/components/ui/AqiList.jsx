import React from 'react';
import PropTypes from 'prop-types';

function AqiList ({
  location, quality, time,
}) {
  const category = {
    1: {
      label: 'Good',
      color: '#55A84F',
    },
    2: {
      label: 'Satisfactory',
      color: '#A3C853',
    },
    3: {
      label: 'Moderate',
      color: '#FFF833',
    },
    4: {
      label: 'Poor',
      color: '#F29C33',
    },
    5: {
      label: 'Very Poor',
      color: '#E93F33',
    },
    6: {
      label: 'Severe',
      color: '#AF2D24',
    },
  };

  let aqiAttr = 6;
  if (quality <= 50) aqiAttr = 1;
  else if (quality > 50 && quality <= 100) aqiAttr = 2;
  else if (quality > 100 && quality <= 200) aqiAttr = 3;
  else if (quality > 200 && quality <= 300) aqiAttr = 4;
  else if (quality > 300 && quality <= 400) aqiAttr = 5;
  else aqiAttr = 6;

  let changedSec = new Date().getTime() - time.getTime();
  changedSec = ((changedSec % 60000)/1000).toFixed(0)
  let timeText = '';

  if (changedSec >= 6 && changedSec < 120) {
    timeText = 'A minute ago';
  } else if (changedSec < 5) {
    timeText = 'A few seconds ago';
  } else {
    timeText = time.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }

  return (
    <tr key={category[aqiAttr].label}>
      <td>{location}</td>
      <td>{Number(quality).toFixed(2)}</td>
      <td
        style={{
          backgroundColor: category[aqiAttr].color,
        }}
      >
        {category[aqiAttr].label}
      </td>
      <td>{timeText}</td>
    </tr>
  );
}

AqiList.defaultProp = {
  time : new Date()
}

AqiList.propTypes= {
  location: PropTypes.string.isRequired,
  time:PropTypes.instanceOf(Date).isRequired,
  quality:PropTypes.number.isRequired
}
export default AqiList;
