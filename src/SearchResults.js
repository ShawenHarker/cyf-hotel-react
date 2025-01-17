import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  let [rows, setRows] = useState([]);

  const setRowClicked = index => {
    if (rows.includes(index)) {
      setRows(rows.filter(element => element !== index));
    } else {
      setRows([...rows, index]);
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number Of Days</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((el, index) => {
            const checkInDate = moment(el.checkInDate);
            const checkOutDate = moment(el.checkOutDate);
            return (
              <tr
                key={index}
                className={
                  rows.includes(index) ? "table-row-selected" : "table-row"
                }
                onClick={() => setRowClicked(index)}
              >
                <th scope="row" key>
                  {el.id}
                </th>
                <td>{el.title}</td>
                <td>{el.firstName}</td>
                <td>{el.surname}</td>
                <td>{el.email}</td>
                <td>{el.roomId}</td>
                <td>{el.checkInDate}</td>
                <td>{el.checkOutDate}</td>
                <td>
                  {moment.duration(checkOutDate.diff(checkInDate)).asDays()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
