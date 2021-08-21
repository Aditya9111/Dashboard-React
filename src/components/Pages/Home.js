import React, { useState, useEffect } from "react";
import "./Home.css";
import * as MdIcons from "react-icons/md";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    const interval = setInterval(() => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setData(data));
    }, 5000);

    return () => clearInterval(interval);
  }, [setData]);

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
      <div class="full-table">
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

      <table cellpadding="0" cellspacing="0" border="0">
        <tbody>
          {data.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.username} </td>
              <td>{data.email}</td>
              <td>{data.website}</td>
              <td>
                <MdIcons.MdDelete size={25} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
