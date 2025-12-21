#!/usr/bin/env bash
set -e

jac build jac/*.jac
jac-client build jac-client/app.config.json --out dist
