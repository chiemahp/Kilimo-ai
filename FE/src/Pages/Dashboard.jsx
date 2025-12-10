import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jac } from "../API/jacClient";
import WeatherCard from "../Components/WeatherCard";
import FieldCard from "../Components/FieldCard";
import AnalyticsCard from "../Components/AnalyticsCard";
import AdvisorChat from "../Components/AdvisorChat";

export default function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [field, setField] = useState(null);
  const [question, setQuestion] = useState("When should I plant maize in Kiambu?");
  const [reply, setReply] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    jac.getWeather("Nairobi").then(setWeather);
    jac.getField("Maize", "Kiambu").then(setField);
  }, []);

  const askAdvisor = async () => {
    setLoading(true);
    const res = await jac.advise(question, { location: "Kiambu", crop: "Maize", season: "Long rains" });
    setReply(res);
    setLoading(false);
  };

  return (
    <>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        <WeatherCard data={weather} onView={() => navigate("/report/weather")} />
        <FieldCard data={field} onView={() => navigate("/report/field")} />
        <AnalyticsCard data={{}} onView={() => navigate("/report/analytics")} />
      </section>

      <section style={{ marginTop: 24 }}>
        <AdvisorChat
          onAsk={askAdvisor}
          reply={reply}
          loading={loading}
          question={question}
          setQuestion={setQuestion}
        />
      </section>
    </>
  );
}
