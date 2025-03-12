# LLM Project Guidelines

## Build Commands
- Dashboard Development: `cd dashboard && npm run dev`
- Dashboard Build: `cd dashboard && npm run build`
- Dashboard Lint: `cd dashboard && npm run lint`
- Preview Production: `cd dashboard && npm run preview`
- GPU Test: `python scripts/test_gpu.py`
- Apply GPU Config: `source scripts/gpu_config.sh`
- Run Python Tests: `pytest`
- Run Single Test: `pytest tests/path_to_test.py::test_function_name -v`

## Code Style
- TypeScript: Strict mode, explicit return types for exported functions
- React: Functional components with React.FC type, hooks with usePrefix
- Python: Follow PEP 8, type hints for function parameters and returns
- Imports: Group by origin (React/Python stdlib, internal modules, types, services)
- Naming: PascalCase for components/classes, camelCase for variables/functions, snake_case in Python
- Documentation: JSDoc for TS/JS, docstrings for Python functions/classes
- Error Handling: Use try/catch with meaningful error messages and error boundaries in React

## Project Structure
- Components in `/dashboard/src/components/`
- React hooks in `/dashboard/src/hooks/`
- Services in `/dashboard/src/services/`
- Python scripts in `/scripts/`
- Model implementation will be in `/src/transformer/`
- Training logic will be in `/src/training/`

## Architecture
- Frontend: React, TypeScript, Chart.js for visualization
- Backend: Python, PyTorch for ML, FastAPI for WebSocket
- Real-time WebSocket communication for training metrics
- AWS S3 integration for datasets and model checkpoints
- GPU-optimized training using PyTorch, mixed precision, and gradient accumulation