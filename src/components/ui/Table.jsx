import { useState, React } from "react";
import webSocket from "../../utils/index";
import AqiList from "./AqiList";

function Table() {
  const [aqiList, setAqiList] = useState([]);

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
    updatedList.map((item) => {
      const list = {...item};
      list.updated_time = new Date()
      return list;
    });

    updatedList = uniqueArrayOfObjs([...aqiList, ...updatedList], "city");
    setAqiList(updatedList);
  };

  return (
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
  );
}

export default Table;
