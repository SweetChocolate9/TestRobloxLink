const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// GitHub repository details
const owner = 'your-github-username';
const repo = 'your-repository-name';
const path = 'data.json';

// API endpoint to fetch data from GitHub
app.get('/data', async (req, res) => {
  try {
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});