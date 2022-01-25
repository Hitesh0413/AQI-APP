import { useState, React } from "react";
import webSocket from "../../utils/index";
import labelColor from "../../utils/lable-color";
import AqiList from "./AqiList";
import BarChart  from "./BarChart";

function Table() {
  const [aqiList, setAqiList] = useState([]);
  const [dataList, setDataList] = useState({city:['delhi'],aqi:[0]});

  let updatedList = [];


  const uniqueArrayOfObjs = (givenArray, key) => {
    const newArray = {};
    givenArray.forEach((item) => {
      newArray[item[key]] = item
      return newArray
    });
    return Object.values(newArray);
  };

  webSocket.onmessage = ({ data }) => {
    updatedList = JSON.parse(data);
    updatedList = updatedList.map((item) => {
      const list = {...item};
      list.updatedTime = new Date()
      return list;
    });

    
    updatedList = uniqueArrayOfObjs([...aqiList, ...updatedList], "city");
    const dataSet  = {
      city : [],
      aqi : [],
      color : []
    };

    updatedList.forEach((item)=>{
      dataSet.city.push(item.city);
      dataSet.aqi.push(Number(item.aqi.toFixed(2)));
      dataSet.color.push(labelColor(Number(item.aqi.toFixed(2))).color)
    })

    setDataList(dataSet);
    setAqiList(updatedList);
  };

  return (
    <div id="table-graph">
    <table className="styled-table">
      <thead>
        <tr>
          <th colSpan={4}>Live AQI Tracking</th>
        </tr>
        <tr>
          <th>City</th>
          <th>Current AQI</th>
          <th>Category</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody id="table-data">
        {aqiList.map(({ city, aqi, updatedTime }) => (
          <AqiList location={city} quality={aqi} time={updatedTime} />
        ))}
      </tbody>
    </table>
    <BarChart dataList={dataList}/>      
    </div>
  );
}

export default Table;
