node Farm {
    has name: str;
    has owner: str;
    has location: str;

    can add_field(name: str, crop: str) {
        spawn node Field(name=name, crop=crop) -> this;
    }
}

node Field {
    has name: str;
    has crop: str;
    has area_ha: float = 1.0;

    has status: str = "unknown";
    has moisture: float = 0.0;
    has temp_c: float = 0.0;
    has ndvi: float = 0.0;
    has last_update: datetime?;
    can add_sensor(kind: str) {
        spawn node Sensor(kind=kind) -> this;
    }
}

node Sensor {
    has kind: str;             # moisture | weather | ndvi | custom
    has value: float = 0.0;
    has unit: str = "";
    has updated_at: datetime?;
}

node Advisory {
    has title: str;
    has text: str;
    has severity: str = "info";  # info | warn | critical
    has tags: list[str] = [];
}
