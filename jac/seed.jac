use core.jac;
use flows.jac;

walker seed_demo() {
    spawn node Farm(name="Kilimo Farm", owner="Pauline", location="Nairobi") -> root;
    with entry root {
        for node Farm where .name == "Kilimo Farm" {
            .add_field("Plot A", "Maize");
            .add_field("Plot B", "Tomatoes");
        }
    }
    ingest_sensor("Plot A", "moisture", 18.0, 33.0, 0.28);
    ingest_sensor("Plot B", "moisture", 26.0, 36.0, 0.18);
}
