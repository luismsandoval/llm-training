/**
 * Type definitions for React component props
 * 
 * These interfaces define the prop types for various components,
 * making them type-safe and self-documenting.
 */

import { TrainingMetrics, TrainingStatus } from './training';
import { ModelConfig, TrainingConfig } from './model';

/**
 * Props for the TrainingMetricsChart component
 */
export interface TrainingMetricsChartProps {
  /**
   * Title displayed above the chart
   * @default 'Training Metrics'
   */
  title?: string;
  
  /**
   * Height of the chart in pixels
   * @default 300
   */
  height?: number;
  
  /**
   * Training metrics data to display
   * If not provided, mock data will be generated
   */
  metrics?: TrainingMetrics[];
  
  /**
   * Whether to use real-time updates
   * @default true
   */
  liveUpdate?: boolean;
  
  /**
   * Update interval in milliseconds (for mock data)
   * @default 2000
   */
  updateInterval?: number;
  
  /**
   * Callback when a data point is clicked
   */
  onDataPointClick?: (metric: TrainingMetrics) => void;
}

/**
 * Props for the TrainingControls component
 * (To be implemented in future tasks)
 */
export interface TrainingControlsProps {
  /**
   * Current training status
   */
  status: TrainingStatus;
  
  /**
   * Callback when start button is clicked
   */
  onStart?: () => void;
  
  /**
   * Callback when pause button is clicked
   */
  onPause?: () => void;
  
  /**
   * Callback when stop button is clicked
   */
  onStop?: () => void;
  
  /**
   * Whether controls are disabled
   * @default false
   */
  disabled?: boolean;
}

/**
 * Props for the ModelConfigPanel component
 * (To be implemented in future tasks)
 */
export interface ModelConfigPanelProps {
  /**
   * Current model configuration
   */
  config: ModelConfig;
  
  /**
   * Callback when configuration is changed
   */
  onChange?: (config: ModelConfig) => void;
  
  /**
   * Whether panel is in readonly mode
   * @default false
   */
  readOnly?: boolean;
} 
