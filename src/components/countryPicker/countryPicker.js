import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountryData } from '../../api';
import "./countryPicker.styles.css";

const CountryPicker = ({handleCountryChange}) => {
    const [name, setName] = useState([]);

    useEffect(() => {
       const countryName = async () => {
        setName( await fetchCountryData())
       }
       countryName()
    }, [])


  return (
    <FormControl className='countries' >
      <NativeSelect  defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {name.map((country, i) => (
          <option
            value={country}
            key={i}
          >
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
