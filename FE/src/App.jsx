// src/App.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [field, setField] = useState(null);
  const [question, setQuestion] = useState("When should I plant maize in Kiambu?");
  const [reply, setReply] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("/api/weather?location=Nairobi").then(res => setWeather(res.data));
    axios.get("/api/field?crop=Maize&county=Kiambu").then(res => setField(res.data));
  }, []);

  const askAdvisor = async () => {
    setLoading(true);
    const res = await axios.post("/api/advise", {
      question,
      location: "Kiambu",
      crop: "Maize",
      season: "Long rains"
    });
    setReply(res.data);
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Inter, system-ui", padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <h1> Kilimo AI</h1>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {/* Weather Card */}
        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
          <h2>Local Weather Forecast</h2>
          {weather && (
            <>
              <p><b>Location:</b> {weather.location}</p>
              <p><b>Now:</b> {weather.current.tempC}°C — {weather.current.condition}</p>
              <div style={{ display: "flex", gap: 12 }}>
                {weather.next3days.map((d) => (
                  <div key={d.day} style={{ background: "#2ce317ff", padding: 8, borderRadius: 8 }}>
                    <div><b>{d.day}</b></div>
                    <div>{d.maxC}°C / {d.minC}°C</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Field Conditions */}
        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
          <h2>Field Conditions</h2>
          {field && (
            <>
              <p><b>Crop:</b> {field.crop}</p>
              <p><b>County:</b> {field.county}</p>
              <p><b>Rainfall:</b> {field.rainfall_mm} mm</p>
              <p><b>Soil pH:</b> {field.soil_pH}</p>
              <p><b>Temperature:</b> {field.temperatureC}°C</p>
            </>
          )}
        </div>

        {/* Analytics (mock) */}
        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
          <h2>Analytics</h2>
          <ul>
            <li><b>Yield trend:</b> +3% (mock)</li>
            <li><b>Soil metric:</b> 1.2 n (mock)</li>
            <li><b>Weather index:</b> 1.8 WEI (mock)</li>
          </ul>
        </div>
      </section>

      {/* Advisory Chat */}
      <section style={{ marginTop: 24, border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
        <h2>Agricultural Advisor</h2>
        <div style={{ display: "flex", gap: 12 }}>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about crop timing, fertilizer, pests..."
            style={{ flex: 1, padding: 12, borderRadius: 8, border: "1px solid #ddd" }}
          />
          <button onClick={askAdvisor} style={{ padding: "12px 16px", borderRadius: 8, background: "#13ca2cff", color: "#f4f8f5ff" }}>
            {loading ? "Thinking..." : "Ask"}
          </button>
        </div>

        {reply && (
          <div style={{ marginTop: 16 }}>
            <p><b>Advisor:</b> {reply.answer}</p>
            <p><b>Confidence:</b> {(reply.confidence * 100).toFixed(0)}%</p>
            {reply.tips?.length > 0 && (
              <>
                <p><b>Tips:</b></p>
                <ul>
                  {reply.tips.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
//UPDATE LATER
/*import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, system-ui", padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h1>AngaWatch Kenya — Mkulima AI</h1>
        <nav style={{ display: "flex", gap: 16 }}>
          <Link to="/">Dashboard</Link>
          <Link to="/report/weather">Weather report</Link>
          <Link to="/report/field">Field report</Link>
          <Link to="/report/analytics">Analytics report</Link>
          <Link to="/report/advisory">Advisory report</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}*/
