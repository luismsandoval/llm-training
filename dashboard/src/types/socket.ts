/**
 * Type definitions for WebSocket communication
 * 
 * These types define:
 * 1. Messages sent from client to server
 * 2. Messages received from server to client
 * 3. WebSocket connection configuration
 */

import { TrainingMetrics, TrainingStatus } from './training';

/**
 * WebSocket connection configuration
 */
export interface WebSocketConfig {
  url: string;
  reconnectionAttempts: number;
  timeout: number;
  autoConnect: boolean;
}

/**
 * Types of messages that can be sent from client to server
 */
export enum ClientMessageType {
  START_TRAINING = 'start_training',
  PAUSE_TRAINING = 'pause_training',
  RESUME_TRAINING = 'resume_training',
  STOP_TRAINING = 'stop_training',
  SAVE_CHECKPOINT = 'save_checkpoint',
  UPDATE_CONFIG = 'update_config'
}

/**
 * Types of messages that can be received from server to client
 */
export enum ServerMessageType {
  TRAINING_METRICS = 'training_metrics',
  TRAINING_STATUS = 'training_status',
  CHECKPOINT_SAVED = 'checkpoint_saved',
  ERROR = 'error'
}

/**
 * Base message interface for all client-to-server messages
 */
export interface ClientMessage {
  type: ClientMessageType;
  timestamp: number;
}

/**
 * Base message interface for all server-to-client messages
 */
export interface ServerMessage {
  type: ServerMessageType;
  timestamp: number;
}

/**
 * Message to start or resume training
 */
export interface StartTrainingMessage extends ClientMessage {
  type: ClientMessageType.START_TRAINING;
  config?: {
    batch_size?: number;
    learning_rate?: number;
    max_steps?: number;
  };
}

/**
 * Message containing training metrics from server
 */
export interface TrainingMetricsMessage extends ServerMessage {
  type: ServerMessageType.TRAINING_METRICS;
  data: TrainingMetrics;
}

/**
 * Message containing training status from server
 */
export interface TrainingStatusMessage extends ServerMessage {
  type: ServerMessageType.TRAINING_STATUS;
  data: TrainingStatus;
}

/**
 * Error message from server
 */
export interface ErrorMessage extends ServerMessage {
  type: ServerMessageType.ERROR;
  error: string;
  code: number;
} 
