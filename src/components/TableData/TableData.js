import React from "react";
import "./TableData.css";

const TableData = (data) => {
  <tr>
    <td>{data.keyword}</td>
    <td>{data.goal} </td>
    <td>{data.matches}</td>
    <td>{data.search_status}</td>
  </tr>;
};

export default TableData;
