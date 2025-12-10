import axios from "axios";

export class JacClient {
  async getWeather(location = "Nairobi") {
    const res = await axios.get(`/api/weather?location=${encodeURIComponent(location)}`);
    return res.data;
  }

  async getField(crop = "Maize", county = "Kiambu") {
    const res = await axios.get(`/api/field?crop=${encodeURIComponent(crop)}&county=${encodeURIComponent(county)}`);
    return res.data;
  }

  async advise(question, { location = "Kiambu", crop = "Maize", season = "Long rains" } = {}) {
    const res = await axios.post("/api/advise", { question, location, crop, season });
    return res.data;
  }
}

export const jac = new JacClient();
