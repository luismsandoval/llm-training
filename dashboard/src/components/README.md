# Dashboard Components

This directory contains all the React components used in the LLM Training Dashboard.

## Data Visualization Components

### TrainingMetricsChart

`TrainingMetricsChart` is the primary visualization component for displaying training metrics like loss and accuracy over time.

**File**: [TrainingMetricsChart.tsx](./TrainingMetricsChart.tsx)

**Dependencies**:
- [Chart.js](https://www.chartjs.org/): The underlying chart library
- [react-chartjs-2](https://react-chartjs-2.js.org/): React wrapper for Chart.js

**Features**:
- Real-time visualization of training metrics
- Automatic data updates (simulated in demo mode)
- Responsive design that adapts to container size
- Support for multiple metrics display
- Customizable appearance via props

**Props**:
- `title` (optional): The title displayed above the chart (default: 'Training Metrics')
- `height` (optional): The height of the chart in pixels (default: 300)

**Example usage**:

```tsx
import TrainingMetricsChart from './components/TrainingMetricsChart';

// Basic usage
<TrainingMetricsChart />

// With custom properties
<TrainingMetricsChart 
  title="Training Loss & Accuracy" 
  height={400} 
/>
```

**Implementation Details**:

The component is implemented with React hooks:
- `useState`: Maintains the current training metrics data
- `useEffect`: Sets up a timer to simulate real-time data updates

In a production environment, the mock data generation would be replaced with WebSocket communication to receive actual training metrics from the Python backend.

## Planned Components

The following components are planned for future implementation:

1. **GPUMetricsChart**: For visualizing GPU utilization and memory usage
2. **ModelStructureViewer**: For displaying the model architecture
3. **TrainingControlPanel**: For controlling training parameters and execution
4. **AttentionPatternVisualization**: For visualizing attention patterns in the transformer model 
