import React from "react";
import PropTypes, {string, number} from "prop-types";
import {Chart, registerables} from 'chart.js'; 

import {Bar} from "react-chartjs-2";


Chart.register(...registerables);

function BarChart({dataList}){

    return (
        <div style={{
            margin : '20px 10px 0px 10px',
            padding : '20px 10px 0px 10px',
            backgroundColor:'#fff',
            height : 400
        }}>
            <Bar
                data={{
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    borderRadius:5,
                    labels : dataList.city,
                    datasets:[{
                        label:'Live AQI Tracking',
                        data : dataList.aqi,
                        backgroundColor:dataList.color
                    }]
                }}
                height={400}
                width={600}
            />
        </div>
    );
}

BarChart.defaultProps = {
    dataList : [{
        city : [],
        aqi : [],
        color :[]
    }]
}
BarChart.propTypes = {
    dataList : PropTypes.shape({
        city : PropTypes.arrayOf(string),
        aqi : PropTypes.arrayOf(number),
        color : PropTypes.arrayOf(string)
    }),
}
export default BarChart;