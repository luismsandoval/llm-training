/**
 * Type definitions for model architecture and training configuration
 * 
 * These types define the structure of:
 * 1. Model architecture parameters
 * 2. Training hyperparameters
 * 3. Configuration for model checkpoints
 */

/**
 * Transformer model architecture configuration
 */
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

/**
 * Training configuration and hyperparameters
 */
export interface TrainingConfig {
  batch_size: number;
  gradient_accumulation_steps: number;
  learning_rate: number;
  warmup_steps: number;
  total_steps: number;
  fp16: boolean;
  checkpoint_dir: string;
  checkpoint_interval: number;
}

/**
 * Checkpoint information
 */
export interface Checkpoint {
  id: string;
  timestamp: string;
  epoch: number;
  iteration: number;
  loss: number;
  accuracy?: number;
  file_path: string;
  is_best: boolean;
} 
