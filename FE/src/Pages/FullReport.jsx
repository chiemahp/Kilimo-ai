import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { jac } from "../API/jacClient";

export default function FullReport() {
  const { section } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const load = async () => {
      if (section === "weather") setData(await jac.getWeather("Nairobi"));
      else if (section === "field") setData(await jac.getField("Maize", "Kiambu"));
      else if (section === "analytics") setData({ trend: "+3%", soil: "1.2n", wei: "1.8" });
      else if (section === "advisory") setData({ history: [] });
    };
    load();
  }, [section]);

  return (
    <div>
      <Link to="/">← Back to dashboard</Link>
      <h2 style={{ marginTop: 12, textTransform: "capitalize" }}>{section} full report</h2>

      {section === "weather" && data && (
        <div>
          <p><b>Location:</b> {data.location}</p>
          <p><b>Current:</b> {data.current.tempC}°C — {data.current.condition}</p>
          <h3>Next 3 days</h3>
          <ul>
            {data.next3days.map((d) => (
              <li key={d.day}>{d.day}: {d.maxC}°C / {d.minC}°C</li>
            ))}
          </ul>
        </div>
      )}

      {section === "field" && data && (
        <div>
          <p><b>Crop:</b> {data.crop}</p>
          <p><b>County:</b> {data.county}</p>
          <p><b>Rainfall:</b> {data.rainfall_mm} mm</p>
          <p><b>Soil pH:</b> {data.soil_pH} (recommended {data.soil_pH_min}–{data.soil_pH_max})</p>
          <p><b>Planting rainfall:</b> ~{data.planting_cumulative_mm} mm in a week</p>
          <p><b>Windows:</b> {data.long_rains_window} / {data.short_rains_window}</p>
          <p><b>Fertilizer:</b> Basal {data.basal_fertilizer}, Top-dress {data.topdress_fertilizer}</p>
        </div>
      )}

      {section === "analytics" && data && (
        <div>
          <p><b>Yield trend:</b> {data.trend}</p>
          <p><b>Soil metric:</b> {data.soil}</p>
          <p><b>Weather index:</b> {data.wei}</p>
          <h3>Charts (mock)</h3>
          <p>Include line charts and comparisons here.</p>
        </div>
      )}

      {section === "advisory" && (
        <div>
          <h3>Advisor history (mock)</h3>
          <p>Persist Q/A pairs here for session review.</p>
        </div>
      )}
    </div>
  );
}
