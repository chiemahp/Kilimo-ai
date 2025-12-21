use core.jac;
use abilities.jac;

walker init_farm(name: str, owner: str, location: str) {
    spawn node Farm(name=name, owner=owner, location=location) -> root;
    report f"Farm '{name}' initialized.";
}

walker add_field(farm_name: str, field_name: str, crop: str) {
    with entry root {
        for node Farm where .name == farm_name {
            .add_field(field_name, crop);
            report f"Field '{field_name}' added to '{farm_name}'.";
        }
    }
}

walker ingest_sensor(field_name: str, kind: str, value: float, temp_c: float?, ndvi: float?) {
    with entry root {
        for node Field where .name == field_name {
            if not exists node Sensor where .kind == kind and (this -> .) {
                .add_sensor(kind);
            }
            for node Sensor where .kind == kind and (this -> .) {
                .value = value;
                .unit = moisture_unit(kind);
                .updated_at = now();
            }
            if temp_c is not None { .temp_c = temp_c; }
            if ndvi is not None { .ndvi = ndvi; }
            if kind == "moisture" { .moisture = value; }
            .last_update = now();
            .status = classify_status(.moisture, .temp_c, .ndvi);

            report { 
                "field": .name, 
                "status": .status, 
                "moisture": .moisture, 
                "temp_c": .temp_c, 
                "ndvi": .ndvi 
            };
        }
    }
}

walker get_fields() {
    with entry root {
        report [ { "name": .name, "crop": .crop, "status": .status,
                   "moisture": .moisture, "temp_c": .temp_c, "ndvi": .ndvi }
                 for node Field ];
    }
}

walker get_field_detail(name: str) {
    with entry root {
        for node Field where .name == name {
            report {
                "name": .name, "crop": .crop, "status": .status,
                "moisture": .moisture, "temp_c": .temp_c, "ndvi": .ndvi,
                "sensors": [ { "kind": s.kind, "value": s.value, "unit": s.unit,
                               "updated_at": s.updated_at }
                             for node Sensor where (this -> .) ]
            };
        }
    }
}

walker get_advisory(name: str) {
    with entry root {
        for node Field where .name == name {
            let adv = llm_advice(.crop, .status, .moisture, .temp_c, .ndvi);
            report { "field": .name, "advice": adv, "status": .status };
        }
    }
}
