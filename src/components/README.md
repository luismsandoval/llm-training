# UI Components

This directory contains the React components for the LLM training workflow UI.

## Component Categories

- Data Upload and Management: Components for uploading and managing datasets
- Model Configuration: Components for configuring model architecture and hyperparameters
- Training Control: Components for controlling the training process
- Visualization: Components for visualizing training progress and model performance
- Evaluation: Components for evaluating model performance
- Inference: Components for testing the trained model

## Development

Each component is developed and tested in isolation using Storybook. The components are then integrated into the full workflow.

## Usage

Components can be imported and used in other components or in the main application:

```jsx
import { DataUpload } from './DataUpload';

function App() {
  return (
    <div>
      <DataUpload onUpload={handleUpload} />
    </div>
  );
}
``` 
