# LLM Dashboard

This is the frontend dashboard for monitoring and controlling the LLM training process. It provides real-time visualizations of training metrics and interactive controls for the training process.

## Tech Stack

- **[Vite](https://vitejs.dev/)**: Next generation frontend tooling
- **[React](https://reactjs.org/)**: UI library
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Chart.js](https://www.chartjs.org/)**: Visualization library (to be installed)
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

## Project Structure

```
dashboard/
├── public/             # Static assets
├── src/
│   ├── assets/         # Asset files (images, fonts, etc.)
│   ├── components/     # Reusable UI components
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

## Features (Planned)

- Real-time training metrics visualization
- GPU utilization and memory monitoring
- Training process controls (start/stop/pause)
- Model checkpoint management
- Hyperparameter adjustment
- Interactive text generation
