import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  FormSelect,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import { ListContext } from "../Context/ListContext";

export default function CountrySelector() {
  // Countries List Public API
  const URL = "https://restcountries.com/v3.1/all?fields=name,cca2,cca3";

  // State Management
  const [countriesList, setCountriesList] = useState([]);
  const [countriesSelector, setCountriesSelector] = useState(
    <option>Loading countries list...</option>
  );
  const { setCountry, country } = useContext(ListContext);

  const fetchCountries = () => {
    axios
      .get(URL)
      .then((res) => {
        setCountriesList(res.data);
        setCountriesSelector(mountSelector(res.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(fetchCountries, []);
  // console.log(countriesList);

  function mountSelector(data) {
    return (
      <>
        {data.map((country) => (
          <option key={country.cca3} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </>
    );
  }
  //Handles
  const handleSelect = (e) => {
    setCountry(e.target.value);
  };

  return (
    <InputGroup>
      <FormSelect
        id="countryPick"
        name="countryPick"
        onChange={handleSelect}
        value={country}
      >
        {countriesSelector}
      </FormSelect>
    </InputGroup>
  );
}
