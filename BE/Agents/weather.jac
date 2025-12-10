walker WeatherAgent {
    can forecast(location: str) -> dict {
        return {
            "location": location,
            "current": {"tempC": 27, "condition": "Sunny"},
            "next3days": [
                {"day": "Thursday", "maxC": 25, "minC": 16},
                {"day": "Friday", "maxC": 25, "minC": 18},
                {"day": "Saturday", "maxC": 23, "minC": 17}
            ]
        };
    }
}


