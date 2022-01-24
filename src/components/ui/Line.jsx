import React from "react";
// import PropTypes, {string, number} from "prop-types";
import {Chart, registerables} from 'chart.js'; 

import {Line} from "react-chartjs-2";


Chart.register(...registerables);

const dateString = (date) =>  date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });


function LineChart(){
    return (
        <div>
            <Line
                data={{
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    borderRadius:5,
                    labels : [dateString(new Date()),dateString(new Date()),dateString(new Date())],
                    datasets:[{
                        label:'Delhi',
                        data : [10,20,40,50],
                        backgroundColor:['red']
                    }]
                }}
                height={400}
                width={600}
            />
        </div>
    );
}

export default LineChart;