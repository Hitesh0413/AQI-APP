import React from 'react';
import PropTypes from 'prop-types';
import labelColor from '../../utils/lable-color';

function AqiList ({
  location, quality, time,
}) {
  

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
  
  const lableAndColor = labelColor(quality);
  
  return (
    <tr key={lableAndColor.label}>
      <td >{location}</td>
      <td>{quality.toFixed(2)}</td>
      <td
        style={{
          backgroundColor: lableAndColor.color,
        }}
      >
        {lableAndColor.label}
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
