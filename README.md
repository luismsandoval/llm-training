# LLM Training Workflow with Storybook

This project provides a comprehensive UI for building and training Large Language Models on a local machine. It uses Storybook.js for the UI components and Python for the machine learning backend.

## Project Structure

- `src/components`: React components for the UI
- `src/stories`: Storybook stories for the components
- `src/ml-modules`: Python modules for machine learning
  - `preprocessing`: Data preprocessing modules
  - `models`: Model architecture definitions
  - `training`: Training loop implementations
  - `evaluation`: Model evaluation metrics
  - `inference`: Text generation and inference
- `src/data`: Data storage
  - `raw`: Raw datasets
  - `processed`: Processed datasets
- `src/utils`: Utility functions and helpers

## Setup

1. Clone this repository
2. Activate the Python virtual environment: `source llm-env/bin/activate`
3. Install Python dependencies: `pip install -r requirements.txt`
4. Install Node.js dependencies: `npm install`
5. Start Storybook: `npm run storybook`

## Development

This project follows a component-based development approach using Storybook. Each component is developed and tested in isolation before being integrated into the full workflow.

The machine learning functionality is implemented in Python and exposed to the UI through a simple API.

## License

[MIT](LICENSE) 
