# Kilimo AI Architecture 

## Overview
Kilimo AI is built on a modular architecture that separates concerns between frontend, backend, and agent orchestration.

---

## Components
- **Frontend (React/Vite)**: Provides user interface for queries and results.

- **Backend (FastAPI)**: Handles API requests, authentication, and routing.

- **Jaseci Agents (JacLang)**: Encapsulate agricultural logic and workflows.

- **Dockerized Deployment**: Ensures reproducibility and scalability.

---

## A Demo Showing the System

 **Features**----> Weather report, field report, advisory assistant, analytics dashboard. 

 **Workflow**----> User → React UI → FastAPI → Jac → byLLM → Response.                    

**Jaseci components used**----> Jac agent, byLLM integration, Jac client execution.
                    
**End-to-end functionality**----> Full advisory workflow demonstrating AI answers and field monitoring.


## Diagram
## Frontend → FastAPI → Jac agent → byLLM → Response

## Data Flow
1. User submits query in frontend.
2. FastAPI backend receives request.
3. Backend invokes Jaseci agents.
4. Agents process agricultural logic.
5. Response returned to frontend.


