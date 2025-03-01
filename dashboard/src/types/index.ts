/**
 * Central export point for all type definitions
 * 
 * This file simplifies imports by providing a single entry point.
 * For example:
 * import { TrainingMetrics, ModelConfig } from './types';
 */

export * from './training';
export * from './model';
export * from './socket';
export * from './components';

/**
 * Common type utilities used throughout the application
 */

/**
 * Type for a function that doesn't return a value
 */
export type VoidFunction = () => void;

/**
 * Type for a generic async callback function
 */
export type AsyncCallback<T> = (result: T) => Promise<void>;

/**
 * Type for component children props
 */
export interface ChildrenProps {
  children: React.ReactNode;
} 
