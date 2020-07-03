import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchData } from "./api";
import Cards from "./components/card/cards";
import CountryPicker from "./components/countryPicker/countryPicker";
import Chart from "./components/chart/chart";
import Navbar from './components/navbar/navbar';


const App = () => {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState("");
  console.log("countries", countries);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchData();
      setData(data);
    };
    fetchApi();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
    setCountries(country);
  };
 return (
    <div className="App">
      <Navbar />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} countries={countries} />
    </div>
  );
};

export default App;
