## ⚙️ Backend Setup (Jaclang + FastAPI)

**Create virtual environment**
   ```bash
   python -m venv .venv
   source .venv/Scripts/activate   # Windows Git Bash
   
   # or
   .\.venv\Scripts\Activate.ps1    # PowerShell
Install dependencies

bash
pip install fastapi uvicorn 


## Run Backend
install dependencies:

## Code
pip install fastapi uvicorn jaclang
Run FastAPI:

## Code
uvicorn backend.main:app --reload --port 8000
Open http://localhost:8000

##Run Frontend
From frontend/:

## Code
install node.js
npm install
npm run dev
Open http://localhost:5173


### Dockerized Setup
bash
docker-compose up --build

###🧪 Testing
bash
cd backend
pytest



## # 🌱 KILIMO AI

Kilimo AI is a full-stack agricultural advisory platform built with:

 **Backend**: [Jaclang](https://jaclang.com) walkers orchestrated via FastAPI
 **Frontend**: React + Vite with a Jac client wrapper
 **Knowledge Base**: CSV/JSON files containing county- and crop-specific agronomy parameters

Kilimo-ai provides farmers with:
- Local weather forecasts
- Field conditions (rainfall, soil pH, temperature)
- Analytics (yield trends, soil metrics)
- An AI advisory chat with mock agronomy answers
- “View Full Report” detail pages for expanded insights

---

## 📂 Project Structure
kilimo-ai/
├── backend/
│   ├── main.py
│   ├── runtime/
│   │   └── jac_bridge.py
│   ├── agents/
│   │   ├── advisory.jac
│   │   ├── weather.jac
│   │   └── field_conditions.jac
│   └── data/
│       ├── kilimo_kb.csv
│       └── kb.py
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── api/
│       │   └── jacClient.js
│       ├── App.jsx
│       ├── main.jsx
│       ├── pages/
│       │   ├── Dashboard.jsx
│       │   └── FullReport.jsx
│       └── components/
│           ├── WeatherCard.jsx
│           ├── FieldCard.jsx
│           ├── AnalyticsCard.jsx
│           └── AdvisorChat.jsx
└── docker-compose.yml  (optional)


## 📚 Documentation
- [Architecture Overview](docs/ARCHITECTURE.md)
- [Workflow Guide](docs/WORKFLOW.md)


