export default function FieldCard({ data, onView }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
      <h2>Field Conditions</h2>
      {data && (
        <>
          <p><b>Crop:</b> {data.crop}</p>
          <p><b>County:</b> {data.county}</p>
          <p><b>Rainfall:</b> {data.rainfall_mm} mm</p>
          <p><b>Soil pH:</b> {data.soil_pH}</p>
          <p><b>Temperature:</b> {data.temperatureC}°C</p>
        </>
      )}
      <button onClick={onView} style={{ marginTop: 12 }}>View full report</button>
    </div>
  );
}
