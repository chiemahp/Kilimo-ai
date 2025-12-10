from pathlib import Path
import csv

DATA_DIR = Path(__file__).parent
CSV_PATH = DATA_DIR / "kilimo_kb.csv"

_cache = {}

def _load_csv():
    if not CSV_PATH.exists():
        return
    with CSV_PATH.open() as f:
        reader = csv.DictReader(f)
        for row in reader:
            key = f"{row['crop'].strip()}:{row['county'].strip()}"
            _cache[key] = {
                "soil_pH_min": float(row["soil_pH_min"]),
                "soil_pH_max": float(row["soil_pH_max"]),
                "planting_cumulative_mm": float(row["planting_cumulative_mm"]),
                "long_rains_window": row["long_rains_window"],
                "short_rains_window": row["short_rains_window"],
                "basal_fertilizer": row["basal_fertilizer"],
                "topdress_fertilizer": row["topdress_fertilizer"],
                "altitude_m": int(row["altitude_m"])
            }

_load_csv()

def get_params_for(crop: str, county: str):
    key = f"{crop.strip()}:{county.strip()}"
    return _cache.get(key, {})
