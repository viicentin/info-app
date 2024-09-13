import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './CountryInfo.css'; // Certifique-se de que o CSS está importado

const CountryInfo = () => {
  const { code, name } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/country/${code}/${name}`);
        setCountryData(response.data);
      } catch (error) {
        console.error('Erro ao buscar informações do país:', error);
      }
    };

    fetchCountryData();
  }, [code, name]);

  if (!countryData) {
    return <div className="loading-container">Loading...</div>;
  }

  const { borders, populationData, flagUrl } = countryData;

  const populationChartData = {
    labels: populationData.map(data => data.year),
    datasets: [
      {
        label: 'Population',
        data: populationData.map(data => data.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
    ],
  };

  return (
    <div className="country-info-container">
      <h1>Country Info</h1>
      <img src={flagUrl} alt={`${code} Flag`} />
      <h2>Population</h2>
      <div className="chart-container">
        <Line data={populationChartData} />
      </div>
      <h2>Neighbouring Countries</h2>
      <ul>
        {borders.length > 0 ? (
          borders.map((border) => (
            <li key={border.countryCode}>
              <a href={`/country/${border.countryCode}`}>{border.commonName}</a>
            </li>
          ))
        ) : (
          <li>Não há países vizinhos.</li>
        )}
      </ul>
    </div>
  );
};

export default CountryInfo;
