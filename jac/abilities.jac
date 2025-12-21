ability classify_status(moisture: float, temp_c: float, ndvi: float) -> str {
    if moisture < 20.0 { return "dry"; }
    if ndvi < 0.2 { return "low-vigor"; }
    if temp_c > 35.0 { return "heat-stress"; }
    return "healthy";
}

ability moisture_unit(kind: str) -> str {
    if kind == "moisture" { return "%"; }
    if kind == "weather" { return "C"; }
    if kind == "ndvi" { return "idx"; }
    return "";
}

ability llm_advice(crop: str, status: str, moisture: float, temp_c: float, ndvi: float) -> str {
    if __cfg__("llm_enabled") {
        return byllm_generate(
            prompt=f"Provide concise, practical farm advice for crop={crop}, "
                   f"status={status}, moisture={moisture}%, temp={temp_c}C, ndvi={ndvi}. "
                   "Max 120 words. Use Kenyan context where relevant."
        );
    }
    return f"For {crop} and status '{status}': "
           f"Irrigate if moisture < 25%. Provide mulch or shade if temp > 35C. "
           f"Investigate nutrients/pests for low NDVI.";
}
