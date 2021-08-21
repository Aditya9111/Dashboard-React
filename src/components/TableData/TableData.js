import React from "react";
import "./TableData.css";
import axios from "axios";

class TableData extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <>
        {this.state.data.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.username} </td>
            <td>{data.email}</td>
            <td>{data.website}</td>
          </tr>
        ))}
      </>
    );
  }
}
export default TableData;
