const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Endpoint para obter a lista de países
app.get('/api/countries', async (req, res) => {
  try {
    const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar a lista de países:', error.message);
    res.status(500).send('Erro ao buscar a lista de países');
  }
});

// Endpoint para obter informações detalhadas do país
app.get('/api/country/:countryCode/:countryName', async (req, res) => {
  const { countryCode, countryName } = req.params;
  
  try {
    // Verifique se o countryCode é válido
    if (!countryCode) {
      return res.status(400).send('Country code is required');
    }

    // Obter informações do país
    const countryInfoUrl = `https://date.nager.at/api/v3/CountryInfo/${countryCode}`;
    const countryResponse = await axios.get(countryInfoUrl);
    const countryData = countryResponse.data;

    if (!countryData) {
      return res.status(404).send('Country not found');
    }

   // Função para obter dados de população
   async function getCountryPopulation(countryName) {
    try {
      // Fazendo a requisição para obter a população do país
      const populationResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/population', {
        country: countryName  // Incluindo o nome do país como parâmetro
      });
  
      // Verificando se a resposta contém dados de população
      const populationData = populationResponse.data?.data?.populationCounts;
  
      if (populationData && Array.isArray(populationData)) {
        // Retornar os dados populacionais se estiverem disponíveis
        return populationData;
      } else {
        console.log(`Dados de população não encontrados para o país ${countryName}.`);
        return [];
      }
    } catch (error) {
      console.error("Erro ao buscar dados de população:", error);
      return [];
    }
  }
  

    // Chamar a função para obter a população
    const populationData = await getCountryPopulation(countryName);

    // Obter URL da bandeira
    const flagResponse = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/images');
    const flagUrl = flagResponse.data.data.find(c => c.name.toLowerCase() === countryName.toLowerCase())?.flag || '';

    // Enviar resposta com as informações
    res.json({
      borders: countryData.borders || [],
      populationData: populationData,
      flagUrl: flagUrl
    });
    
  } catch (error) {
    console.error('Erro ao buscar informações do país:', error.response?.data || error.message);
    res.status(500).send('Erro ao buscar informações do país');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
