const labelColor = (quality = 0) => {
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

      return category[aqiAttr];
}

export default labelColor;