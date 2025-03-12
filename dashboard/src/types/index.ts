/**
 * Central export point for all type definitions
 */

// Training related types
export interface TrainingMetrics {
  epoch: number;
  iteration: number;
  loss: number;
  accuracy?: number;
  timestamp: string;
}

export type TrainingStatus = 'idle' | 'running' | 'paused' | 'completed' | 'error';

// Model related types
export interface ModelConfig {
  name: string;
  vocab_size: number;
  d_model: number;
  n_layers: number;
  n_heads: number;
  d_ff: number;
  max_seq_length: number;
  dropout: number;
}

// Component props
export interface TrainingMetricsChartProps {
  title?: string;
  height?: number;
  metrics?: TrainingMetrics[];
  liveUpdate?: boolean;
  updateInterval?: number;
}

export interface TrainingControlsProps {
  status: TrainingStatus;
  onStart?: () => void;
  onPause?: () => void;
  onStop?: () => void;
  disabled?: boolean;
}

// WebSocket configuration
export interface WebSocketConfig {
  url: string;
  reconnectionAttempts: number;
  timeout: number;
  autoConnect: boolean;
}

// Basic utility type
export type VoidFunction = () => void;