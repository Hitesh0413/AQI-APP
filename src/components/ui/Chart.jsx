import React from "react";
// import PropTypes from "prop-types";
import {Bar} from "react-chartjs-2";

function Chart(){

    return (
        <div>
            <Bar
                data = {{
                    lables : ['red','green','blue'],
                    dataSets : [{
                        data : [10,20,50]
                    }]
                }}
                height={400}
                width={400}
            />
        </div>
    );
}

// Chart.defaultProps = {
//     dataList : []
// }
// Chart.propTypes = {
//     dataList : PropTypes.instanceOf(Array),
// }
export default Chart;