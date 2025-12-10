from pathlib import Path
from typing import Any, Dict

# Adjust imports to your installed Jac runtime APIs
from jaclang import jac_import, get_walker

AGENTS_DIR = Path(__file__).parent.parent / "agents"

class JacEngine:
    def __init__(self):
        self.modules = {}
        self._load_modules()

    def _load_modules(self):
        for jac_file in ["advisory.jac", "weather.jac", "field_conditions.jac"]:
            module_path = AGENTS_DIR / jac_file
            module_name = jac_file.replace(".jac", "")
            self.modules[module_name] = jac_import(str(module_path))

    def walker(self, module_name: str, walker_name: str, init_kwargs: Dict[str, Any] = None):
        if module_name not in self.modules:
            raise RuntimeError(f"Jac module not loaded: {module_name}")
        WalkerCls = get_walker(self.modules[module_name], walker_name)
        return WalkerCls(**(init_kwargs or {}))

jac_engine = JacEngine()

