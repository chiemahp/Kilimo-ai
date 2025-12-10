export default function AnalyticsCard({ data, onView }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
      <h2>Analytics</h2>
      <ul>
        <li><b>Yield trend:</b> +3% (mock)</li>
        <li><b>Soil metric:</b> 1.2 n (mock)</li>
        <li><b>Weather index:</b> 1.8 WEI (mock)</li>
      </ul>
      <button onClick={onView} style={{ marginTop: 12 }}>View full report</button>
    </div>
  );
}
