# Dashboard Services

This directory will contain service modules for the LLM Training Dashboard, including WebSocket communication with the backend.

## WebSocket Communication

For real-time communication with the training backend, we've installed:

- **socket.io-client**: A powerful WebSocket client library with automatic reconnection, event handling, and support for fallbacks
- **@types/socket.io-client**: TypeScript type definitions for Socket.IO client

### Future Implementation (Task 16)

In future tasks, we'll implement:

1. **WebSocketService**: A service module for connecting to the training server
   - Connection management (connect, disconnect, reconnect)
   - Event handling for training metrics and status updates
   - Error handling and retry mechanisms

2. **React Hooks**:
   - `useWebSocket`: A custom hook for components to access WebSocket functionality
   - `useTrainingMetrics`: A hook to subscribe to real-time training metrics

### Example Usage (Planned)

```typescript
// Future implementation in Task 16
import { io, Socket } from 'socket.io-client';
import { TrainingMetrics } from '../types/training';

export class WebSocketService {
  private socket: Socket | null = null;
  private url: string;

  constructor(url: string = 'ws://localhost:8000') {
    this.url = url;
  }

  connect(): void {
    this.socket = io(this.url, {
      reconnectionAttempts: 5,
      timeout: 10000
    });

    this.socket.on('connect', () => {
      console.log('Connected to training server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from training server');
    });

    this.socket.on('error', (error: any) => {
      console.error('WebSocket error:', error);
    });
  }

  subscribeToMetrics(callback: (metrics: TrainingMetrics) => void): void {
    if (!this.socket) {
      throw new Error('Socket not connected');
    }
    
    this.socket.on('training_metrics', callback);
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}
```

This implementation will be created in Task 16, along with the corresponding backend WebSocket server. 
