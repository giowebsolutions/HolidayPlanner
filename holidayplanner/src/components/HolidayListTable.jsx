import { useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import { ListContext } from "../Context/ListContext";

export default function HolidayListTable() {
  const { list, updateList } = useContext(ListContext);

  // Publlic Holidays API

  useEffect(() => {
    updateList, [];
  });

  // Request a weekday along with a long date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 1 ? (
            list.map((item) => (
              <tr key={item.name + Math.random()}>
                <td>{item.name}</td>
                <td>{new Date(item.date).toLocaleString("en-AU", options)}</td>
              </tr>
            ))
          ) : (
            <tr>No available data for this country</tr>
          )}
        </tbody>
      </Table>
    </>
  );
}
