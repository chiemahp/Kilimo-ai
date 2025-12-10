walker FieldConditionsAgent {
    can conditions(crop: str, county: str) -> dict {
        if (crop.lower() == "maize" and county.lower() == "kiambu") {
            return {
                "crop": "Maize", "county": "Kiambu",
                "rainfall_mm": 15, "soil_pH": 6.5, "temperatureC": 22.8
            };
        }
        return {
            "crop": crop, "county": county,
            "rainfall_mm": 10, "soil_pH": 6.2, "temperatureC": 24.0
        };
    }
}

