/**
 * Type definitions for training metrics and status
 * 
 * These types are used for:
 * 1. Data received from the WebSocket server
 * 2. Props for visualization components
 * 3. State management in React components
 */

/**
 * Training metrics data received from the backend
 */
export interface TrainingMetrics {
  epoch: number;
  iteration: number;
  loss: number;
  accuracy?: number;
  learning_rate: number;
  time_elapsed: number;
  samples_per_second: number;
  gpu_memory_used?: number;
  gpu_utilization?: number;
}

/**
 * The status of the training process
 */
export interface TrainingStatus {
  status: 'idle' | 'training' | 'paused' | 'completed' | 'error';
  message?: string;
  progress?: number;
  eta?: number;
}

/**
 * Aggregated training metrics history
 */
export interface TrainingHistory {
  metrics: TrainingMetrics[];
  current: TrainingMetrics | null;
  status: TrainingStatus;
} 
