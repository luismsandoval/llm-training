# LLM Dashboard

A React/TypeScript dashboard for monitoring LLM training, providing real-time metrics visualization and training process controls.

## Tech Stack

- **[Vite](https://vitejs.dev/)**: Fast frontend build tool
- **[React](https://reactjs.org/)**: UI library
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Chart.js](https://www.chartjs.org/)**: Data visualization library
- **[react-chartjs-2](https://react-chartjs-2.js.org/)**: React wrapper for Chart.js
- **[Socket.IO Client](https://socket.io/docs/v4/client-api/)**: WebSocket client for real-time data

## Development Setup

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Current Components

### TrainingMetricsChart

Visualizes training metrics (loss, accuracy) in a line chart:
- Located in: `src/components/TrainingMetricsChart.tsx`
- Currently uses mock data that updates every 2 seconds
- Will connect to WebSocket service for real-time data

### TrainingControls

Basic UI controls for the training process:
- Located in: `src/components/TrainingControls.tsx`
- Provides start/pause/stop functionality
- Currently uses placeholder callbacks

### WebSocketService

Placeholder service for communication with Python backend:
- Located in: `src/services/WebSocketService.ts`
- Will handle real-time metric streaming and control commands

## Project Structure

```
dashboard/
├── public/             # Static assets
├── src/
│   ├── assets/         # Asset files (images, fonts, etc.)
│   ├── components/     # UI components
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API and WebSocket services
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## Next Steps

See the project [TODO.md](/TODO.md) for the comprehensive implementation plan, including:

1. Implementing WebSocket communication with Python backend
2. AWS S3 integration for dataset and model management
3. GPU utilization and memory monitoring
4. Enhanced training controls and hyperparameter adjustment
5. Model checkpoint management interface
