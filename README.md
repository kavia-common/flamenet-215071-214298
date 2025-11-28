# FlameNet

This workspace contains the FlameNet frontend application.

- Frontend: flamenet_frontend (React, runs at http://localhost:3000)

This project has been renamed and rebranded to FlameNet. All future references should use "FlameNet".

## Run & Verify (Frontend + Backend)

- Backend (port 3001):
  - From `../flamenet-215071-215063/flamenet_backend`:
    - `python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt`
    - `uvicorn api.main:app --host 0.0.0.0 --port 3001`
  - Test: visit http://localhost:3001/meta or http://localhost:3001/

- Frontend (port 3000):
  - From `flamenet_frontend`:
    - `npm install`
    - `npm start`
  - Open http://localhost:3000 and look for the backend status badge near the primary buttons.