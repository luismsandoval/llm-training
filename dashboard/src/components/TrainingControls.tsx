import React from 'react';
import { TrainingControlsProps } from '../types';

/**
 * TrainingControls Component (Placeholder)
 * 
 * This is a placeholder for the actual TrainingControls component
 * that will be implemented in Tasks 17-18.
 */
const TrainingControls: React.FC<TrainingControlsProps> = ({
  status,
  onStart,
  onPause,
  onStop
}) => {
  return (
    <div className="training-controls-placeholder">
      <h3>Training Controls</h3>
      <p>Placeholder for training control buttons (will be implemented in Tasks 17-18)</p>
      <div>
        <button onClick={onStart}>Start</button>
        <button onClick={onPause}>Pause</button>
        <button onClick={onStop}>Stop</button>
      </div>
    </div>
  );
};

export default TrainingControls; 
