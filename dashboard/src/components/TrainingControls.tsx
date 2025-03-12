import React from 'react';
import { TrainingControlsProps } from '../types';

/**
 * TrainingControls Component
 * 
 * Basic controls for the training process
 */
const TrainingControls: React.FC<TrainingControlsProps> = ({
  status,
  onStart,
  onPause,
  onStop,
  disabled
}) => {
  return (
    <div className="training-controls">
      <h3>Training Controls</h3>
      <div>
        <button onClick={onStart} disabled={disabled || status === 'running'}>Start</button>
        <button onClick={onPause} disabled={disabled || status !== 'running'}>Pause</button>
        <button onClick={onStop} disabled={disabled || status === 'idle'}>Stop</button>
      </div>
    </div>
  );
};

export default TrainingControls;
