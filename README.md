# X32 AI Mixer

A web app to connect to your Behringer X32 console and perform live, AI-powered audio mixing. Accessible from both mobile and laptop, the app uses AI to act as a professional sound engineer, auto-mixing all channels for optimal live sound.

## Features

- **Connects to Behringer X32** over network
- **Live audio mixing** for all input channels
- **AI-driven mixing** (Python backend) for professional-quality output
- **Responsive UI**: Works on mobile and desktop browsers
- **Live preview** of mix and channel data
- **One-click deploy** (Docker support planned)
- **Live code generation** for future extensibility

## Tech Stack

- **Frontend:** React (TypeScript, Vite, Chakra UI)
- **Backend:** Node.js (Express)
- **AI/Audio:** Python (Flask/FastAPI, PyAudio, TensorFlow/PyTorch)
- **Communication:** WebSockets for live updates, REST API for control

## Architecture

```
/Al-PHA-
  /client      # React frontend
  /server      # Node.js backend
  /ai-engine   # Python AI & DSP logic
```

- **Frontend** connects to backend for control and real-time data
- **Backend** manages X32 connection, routes audio to AI engine, serves frontend
- **AI Engine** receives channel data, returns optimal mix settings

## Setup

1. Clone the repo
2. Install dependencies for each part
3. Start AI engine (`python ai-engine/main.py`)
4. Start backend (`npm start` in `/server`)
5. Start frontend (`npm start` in `/client`)

## Roadmap

- [ ] X32 OSC protocol support
- [ ] Real-time channel metering UI
- [ ] AI mixing MVP (Python)
- [ ] User presets, recall scenes
- [ ] Docker deployment

---

## License

MIT