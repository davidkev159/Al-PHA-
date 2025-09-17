const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'X32 AI Mixer backend running' });
});

// TODO: Add WebSocket endpoints for live data
// TODO: Add OSC protocol handler for X32

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
