walker AdvisoryAgent {
    has location: str
    has crop: str
    has season: str

    can answer(question: str, kb: dict) -> dict {
        // Normalize
        let q = question.lower();

        // Pull parameters from KB for precision
        let pH_min = kb.get("soil_pH_min", 5.5);
        let pH_max = kb.get("soil_pH_max", 7.0);
        let long_rains = kb.get("long_rains_window", "March–April");
        let short_rains = kb.get("short_rains_window", "October–November");
        let cumulative_mm = kb.get("planting_cumulative_mm", 25);

        if (("plant" in q) and ("maize" in q)) {
            return {
                "answer": f"In {self.location}, plant maize at the onset of long rains ({long_rains}) or short rains ({short_rains}). Aim for soil pH {pH_min}–{pH_max} and plant after ~{cumulative_mm} mm cumulative rainfall in a week.",
                "confidence": 0.78,
                "tips": [
                    "Use certified, altitude-suitable varieties.",
                    "Prepare fine seedbeds; ensure good seed–soil contact.",
                    "Side-dress nitrogen at knee height and before expected rains."
                ],
                "references": [
                    "County agronomy guidance",
                    "Regional best practices"
                ]
            };
        } else if ("fertilizer" in q) {
            let basal = kb.get("basal_fertilizer", "DAP or NPK 10-26-10");
            let topdress = kb.get("topdress_fertilizer", "Urea or CAN");
            return {
                "answer": f"Apply {basal} at planting guided by soil tests; top-dress with {topdress} at 3–5 weeks. Split nitrogen to reduce leaching.",
                "confidence": 0.72,
                "tips": ["Do a soil test if possible", "Time top-dressing just before rains"],
                "references": ["General agronomy guidance"]
            };
        } else {
            return {
                "answer": "What crop, ward, and timing are you targeting (long vs short rains)? Share that for precise guidance.",
                "confidence": 0.45,
                "tips": ["Include crop, ward, target season"],
                "references": []
            };
        }
    }
}

