# LLM Dashboard

This is the frontend dashboard for monitoring and controlling the LLM training process. It provides real-time visualizations of training metrics and interactive controls for the training process.

## Tech Stack

- **[Vite](https://vitejs.dev/)**: Next generation frontend tooling
- **[React](https://reactjs.org/)**: UI library
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Chart.js](https://www.chartjs.org/)**: Visualization library for training metrics
- **[react-chartjs-2](https://react-chartjs-2.js.org/)**: React wrapper for Chart.js
- **[WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)**: Real-time communication with the backend (to be installed)

## Development Setup

```bash
# Install dependencies
npm install

# Start the development server
npm run dev -- --port 3000

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Data Visualization

The dashboard uses Chart.js and react-chartjs-2 for data visualization:

```bash
# Install chart.js and react-chartjs-2
npm install chart.js react-chartjs-2
```

### Key Components

- **TrainingMetricsChart**: Visualizes training metrics (loss, accuracy) in real-time
  - Located in: `src/components/TrainingMetricsChart.tsx`
  - Features:
    - Line charts for visualizing metrics over time
    - Automatically updates with new data (simulated in demo)
    - Responsive design that adapts to different screen sizes
    - Customizable via props (title, height)

In the current implementation, the chart uses mock data that updates every 2 seconds to simulate real-time training metrics. In a production environment, this would be replaced with actual training metrics received via WebSockets.

### Future Visualization Components

Planned visualizations include:
- GPU utilization and memory usage charts
- Learning rate scheduling visualization
- Attention pattern visualizations
- Token embedding space visualizations

## Project Structure

```
dashboard/
├── public/             # Static assets
├── src/
│   ├── assets/         # Asset files (images, fonts, etc.)
│   ├── components/     # Reusable UI components
│   │   └── TrainingMetricsChart.tsx  # Chart component for training metrics
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API and WebSocket services
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── vite-env.d.ts   # Vite environment declarations
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Features (Implemented)

- Basic dashboard layout with header, content sections, and footer
- Real-time training metrics visualization using Chart.js
- Mock data generation for development and testing
- Responsive design that works on various screen sizes

## Features (Planned)

- Real-time training metrics visualization with WebSockets
- GPU utilization and memory monitoring
- Training process controls (start/stop/pause)
- Model checkpoint management
- Hyperparameter adjustment
- Interactive text generation
