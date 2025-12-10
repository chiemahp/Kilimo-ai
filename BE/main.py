from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
from runtime.jac_bridge import jac_engine
from Data.kb import get_params_for

app = FastAPI()

class AdviseReq(BaseModel):
    question: str
    location: Optional[str] = "Kiambu"
    crop: Optional[str] = "Maize"
    season: Optional[str] = "Long rains"

@app.get("/api/weather")
def get_weather(location: str = "Nairobi"):
    walker = jac_engine.walker("weather", "WeatherAgent")
    return walker.forecast(location)

@app.get("/api/field")
def get_field(crop: str = "Maize", county: str = "Kiambu"):
    walker = jac_engine.walker("field_conditions", "FieldConditionsAgent")
    base = walker.conditions(crop, county)
    kb = get_params_for(crop, county)
    return {**base, **kb}

@app.post("/api/advise")
def advise(req: AdviseReq):
    kb = get_params_for(req.crop, req.location)
    walker = jac_engine.walker(
        "advisory", "AdvisoryAgent",
        init_kwargs={"location": req.location, "crop": req.crop, "season": req.season}
    )
    result = walker.answer(req.question, kb)
    return {
        "answer": result["answer"],
        "confidence": result.get("confidence", 0.6),
        "tips": result.get("tips", []),
        "references": result.get("references", []),
        "context": kb
    }


