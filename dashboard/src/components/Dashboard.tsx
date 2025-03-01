import React from 'react';
import TrainingMetricsChart from './TrainingMetricsChart';
import TrainingControls from './TrainingControls';
import { useTrainingData } from '../hooks/useTrainingData';

/**
 * Dashboard Component (Placeholder)
 * 
 * This is a placeholder for the main Dashboard component
 * that will be implemented in Tasks 17-19.
 * 
 * It provides the basic structure for the dashboard UI but without
 * real functionality, which will be added in future tasks.
 */
const Dashboard: React.FC = () => {
  // Use the placeholder training data hook
  const { status, startTraining, pauseTraining, stopTraining } = useTrainingData();

  return (
    <div className="dashboard-placeholder">
      <header className="dashboard-header">
        <h1>LLM Training Dashboard</h1>
        <p>Placeholder for the actual dashboard (will be fully implemented in Tasks 17-19)</p>
      </header>

      <main className="dashboard-content">
        <section className="metrics-section">
          <h2>Training Metrics</h2>
          <TrainingMetricsChart title="Training Metrics Placeholder" height={300} />
        </section>

        <section className="controls-section">
          <TrainingControls
            status={status}
            onStart={startTraining}
            onPause={pauseTraining}
            onStop={stopTraining}
          />
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>LLM From Scratch - Dashboard Placeholder</p>
      </footer>
    </div>
  );
};

export default Dashboard; 
