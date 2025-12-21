kilimo-ai/
├─ jac/
│  ├─ core.jac            # Core types: Farm, Field, Sensor, Advisory
│  ├─ flows.jac           # Walkers: onboarding, field monitoring, advisory
│  ├─ abilities.jac       # AI abilities (byllm), rules, utilities
│  └─ seed.jac            # Seed graph initialization
├─ jac-client/
│  ├─ pages/
│  │  ├─ Home.jcui        # Overview dashboard
│  │  ├─ Fields.jcui      # Field list + status
│  │  ├─ FieldDetail.jcui # Time-series + recommendations
│  │  └─ Advisory.jcui    # Conversational AI advisor
│  ├─ components/
│  │  ├─ StatCard.jcui
│  │  ├─ SensorChart.jcui
│  │  └─ AdvisoryPanel.jcui
│  └─ app.config.json     # Routes + walker bindings
├─ config/
│  ├─ app.jconf           # Jaseci app/runtime config
│  └─ secrets.sample.json # LLM keys (if using byllm)
├─ scripts/
│  ├─ dev.sh
│  └─ build.sh
├─ README.md
└─ LICENSE
