import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CountryList.css'; 

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/countries');
        const sortedCountries = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setCountries(sortedCountries);
      } catch (error) {
        console.error('Erro ao buscar a lista de países:', error);
      }
    };

    fetchCountries();
  }, []);


  const numColumns = 4;
  const columns = Array.from({ length: numColumns }, (_, i) =>
    countries.filter((_, index) => index % numColumns === i)
  );

  return (
    <div className="country-list">
      <h1>Country List</h1>
      <div className="country-columns">
        {columns.map((column, colIndex) => (
          <div className="country-column" key={colIndex}>
            {column.map((country) => (
              <div className="country-item" key={country.countryCode}>
                <Link to={`/country/${country.countryCode}/${country.name}`}>{country.name}</Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
