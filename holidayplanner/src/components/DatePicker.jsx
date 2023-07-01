import React, { useContext } from "react";
import { FormSelect } from "react-bootstrap";
import { ListContext } from "../Context/ListContext";

export default function DatePicker() {
  const initialYear = 1923;
  const currentYear = new Date().getFullYear();
  const yearsList = [];

  //Context
  const { setYear, year } = useContext(ListContext);

  for (let i = initialYear; i <= currentYear; i++) {
    yearsList.push(i);
  }

  const handleSelect = (e) => {
    setYear(e.target.value);
  };

  return (
    <FormSelect
      id="datePick"
      name="datePick"
      onChange={handleSelect}
      value={year}
    >
      {yearsList.map((year) => (
        <option key={year} value={year} defaultValue="default">
          {year}
        </option>
      ))}
    </FormSelect>
  );
}
