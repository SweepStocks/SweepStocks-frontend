const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const API_BASE_URL = 'http://api.football-data.org/v4/competitions';
const API_TOKEN = 'dd41988b9df44a98b40f6543eee6e5f3';

app.get('/api/standings/pl', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/PL/standings`, {
      headers: { 'X-Auth-Token': API_TOKEN },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Premier League data' });
  }
});

app.get('/api/standings/bsa', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/BSA/standings`, {
      headers: { 'X-Auth-Token': API_TOKEN },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Brasileirão data' });
  }
});

app.get('/api/standings/fl1', async (req, res) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/FL1/standings`, {
        headers: { 'X-Auth-Token': API_TOKEN },
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching Ligue 1 data' });
    }
  });

  app.get('/api/standings/bl1', async (req, res) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/BL1/standings`, {
        headers: { 'X-Auth-Token': API_TOKEN },
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching Bundesliga data' });
    }
  });

  app.get('/api/standings/sa', async (req, res) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/SA/standings`, {
        headers: { 'X-Auth-Token': API_TOKEN },
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching Serie A data' });
    }
  });

  app.get('/api/standings/ppl', async (req, res) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/PPL/standings`, {
        headers: { 'X-Auth-Token': API_TOKEN },
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching Primeira Liga data' });
    }
  });

  app.get('/api/standings/pd', async (req, res) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/PD/standings`, {
        headers: { 'X-Auth-Token': API_TOKEN },
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching Primera Division data' });
    }
  });

//   app.get('/api/standings/mls', async (req, res) => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/MLS/standings`, {
//         headers: { 'X-Auth-Token': API_TOKEN },
//       });
//       res.json(response.data);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching MLS data' });
//     }
//   });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
