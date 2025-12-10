# backend/jac_runtime.py
# This is a lightweight shim to simulate Jac walkers in Python for demo purposes.
class AdvisoryAgent:
    def __init__(self, location="Kiambu", crop="Maize", season="Long rains"):
        self.location = location
        self.crop = crop
        self.season = season

    def answer(self, question: str) -> dict:
        q = question.lower()
        if ("plant" in q and "maize" in q):
            return {
                "answer": "In Kiambu, plant maize at the onset of long rains (Mar–Apr), or short rains (Oct–Nov). Ensure adequate soil moisture and pH 5.5–7.0.",
                "confidence": 0.78,
                "tips": [
                    "Choose certified, altitude-suitable varieties.",
                    "Plant after ~20–30 mm cumulative rainfall in a week.",
                    "Basal fertilizer at planting; side-dress at knee height."
                ],
                "references": ["Local extension guidance", "Regional agronomy practices"]
            }
        elif "fertilizer" in q:
            return {
                "answer": "Apply NPK/DAP at planting based on soil tests; top-dress with urea or CAN at 3–5 weeks. Split nitrogen doses.",
                "confidence": 0.72,
                "tips": ["Test soil; avoid blanket rates", "Time top-dressing before expected rains"],
                "references": ["General agronomy guidance"]
            }
        else:
            return {
                "answer": "Please share crop, ward, and whether you’re targeting long or short rains for precise guidance.",
                "confidence": 0.41,
                "tips": ["Include crop, ward, timing"],
                "references": []
            }

class WeatherAgent:
    def forecast(self, location: str) -> dict:
        return {
            "location": location,
            "current": {"tempC": 27, "condition": "Sunny"},
            "next3days": [
                {"day": "Thursday", "maxC": 25, "minC": 16},
                {"day": "Friday", "maxC": 25, "minC": 18},
                {"day": "Saturday", "maxC": 23, "minC": 17}
            ]
        }

class FieldConditionsAgent:
    def conditions(self, crop: str, county: str) -> dict:
        if crop.lower() == "maize" and county.lower() == "kiambu":
            return {"crop": "Maize", "county": "Kiambu", "rainfall_mm": 15, "soil_pH": 6.5, "temperatureC": 22.8}
        return {"crop": crop, "county": county, "rainfall_mm": 10, "soil_pH": 6.2, "temperatureC": 24.0}
