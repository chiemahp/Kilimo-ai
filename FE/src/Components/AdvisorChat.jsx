export default function AdvisorChat({ onAsk, reply, loading, question, setQuestion }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
      <h2>Agricultural Advisor</h2>
      <div style={{ display: "flex", gap: 12 }}>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about crop timing, fertilizer, pests..."
          style={{ flex: 1, padding: 12, borderRadius: 8, border: "1px solid #ddd" }}
        />
        <button onClick={onAsk} style={{ padding: "12px 16px", borderRadius: 8, background: "#155e75", color: "#fff" }}>
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
    </div>
  );
}
