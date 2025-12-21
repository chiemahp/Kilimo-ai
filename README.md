# Kilimo AI (Pure Jaseci Stack)

Kilimo AI is a graph-native farm monitoring and advisory app built entirely with the Jaseci stack:
- Backend in **Jac** (graph types, walkers, abilities)
- Frontend in **jac-client** (declarative UI bound to walkers)
- Optional **byllm** for AI advisory

## Features
- Monitor fields and sensors (moisture, temperature, NDVI)
- Auto status classification (dry, heat-stress, low-vigor, healthy)
- Advisory (rule-based fallback; LLM when enabled)
- Clean UI: Home → Fields → Field Detail → Advisory

## Prerequisites
- Python (for Jaseci/Jac tooling)
- Node.js (for jac-client)
- Shell environment (bash/zsh)

## Setup
1. **Clone and enter project**
   ```bash
   git clone https://github.com/chiemahp/kilimo-ai.git
   cd kilimo-ai

## Install Jaseci/Jac tools and jac-client Ensure jac and jac-client CLIs are available on your PATH.

## Build Jac

bash
jac build jac/*.jac
Seed demo data

bash
jac run jac/seed.jac seed_demo
Run UI (dev)

bash
jac-client dev jac-client/app.config.json
Open the printed dev URL and navigate:

Home → "View fields"

Open a field card → "Get advisory"

Enabling LLM advisory (optional)
Copy config/secrets.sample.json to config/secrets.json and fill your API key.

Set llm_enabled=true (via env or config/app.jconf).

Ensure byllm_generate is available in your runtime.

## Project structure
Code
jac/           # core types, abilities, walkers, seed
jac-client/    # UI pages, components, styles, app config
config/        # app config, secrets (sample)
scripts/       # dev/build scripts






# Kilimo-ai
