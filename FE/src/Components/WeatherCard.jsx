export default function WeatherCard({ data, onView }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
      <h2>Local Weather Forecast</h2>
      {data && (
        <>
          <p><b>Location:</b> {data.location}</p>
          <p><b>Now:</b> {data.current.tempC}°C — {data.current.condition}</p>
          <div style={{ display: "flex", gap: 12 }}>
            {data.next3days.map((d) => (
              <div key={d.day} style={{ background: "#17d017ff", padding: 8, borderRadius: 8 }}>
                <div><b>{d.day}</b></div>
                <div>{d.maxC}°C / {d.minC}°C</div>
              </div>
            ))}
          </div>
        </>
      )}
      <button onClick={onView} style={{ marginTop: 12 }}>View full report</button>
    </div>
  );
}
