const express = require('express');
const app = express();
const path = require('path');

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({ path: 'backend/config.env' });
}

app.use(express.json({ limit: '50mb' }));

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

module.exports = app;
