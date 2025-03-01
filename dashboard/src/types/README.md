# TypeScript Type Definitions

This directory contains type definitions used throughout the LLM Training Dashboard application. Well-defined types improve code quality, make refactoring easier, and provide better IDE support with autocompletion.

## Installed Type Packages

- **@types/socket.io-client**: TypeScript definitions for Socket.IO client
- **@types/react**: Included with the Vite React TypeScript template
- **@types/react-dom**: Included with the Vite React TypeScript template

## Future Type Definitions (Task 2.4)

In the upcoming Task 2.4, we'll implement the following type definitions:

### Training Metrics Types

```typescript
// To be implemented in Task 2.4
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

export interface TrainingStatus {
  status: 'idle' | 'training' | 'paused' | 'completed' | 'error';
  message?: string;
  progress?: number;
  eta?: number;
}
```

### Model Configuration Types

```typescript
// To be implemented in Task 2.4
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
```

These type definitions will be used across the application to ensure type safety and provide clear interfaces for component props and function parameters. 
