#!/usr/bin/env bash
set -e

# Build Jac and start runtime
jac build jac/*.jac

# Seed demo data
jac run jac/seed.jac seed_demo

# Start jac-client dev server
jac-client dev jac-client/app.config.json
