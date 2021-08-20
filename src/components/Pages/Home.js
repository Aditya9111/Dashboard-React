import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl =
      "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [setData]);
  console.log(data);
  return (
    <div className="page">
      <div className="title">
        <h4 className="input-heading">Add Another Keyword</h4>
        <p className="box">1/3</p>
        <h5 className="input-heading upgrade">UPGRADE</h5>
        <h5 className="input-heading advanced">Advanced Search</h5>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="🔎︎  Enter your filters here"
          className="input"
        />
        <button className="input_button">SAVE FILTER</button>
      </div>

      <div className="title">
        <h4 className="input-heading">The term you are tracking</h4>

        <h5 className="input-heading advanced">
          The data will refresh every 5 minutes
        </h5>
      </div>
      <div>
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <th>Keywords</th>
            <th>Goal</th>
            <th>Matches</th>
            <th>Search Status</th>
            <th>Delete Keyword</th>
          </tr>
        </table>
      </div>

      <div class="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
