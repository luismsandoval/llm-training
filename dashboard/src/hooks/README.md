# React Custom Hooks

This directory will contain custom React hooks for the LLM Training Dashboard. These hooks provide reusable logic that can be shared across components.

## WebSocket Hooks (Future Implementation)

After installing the WebSocket packages (socket.io-client and @types/socket.io-client), we're planning to implement these hooks:

### useWebSocket Hook

This hook will provide a simple interface for components to connect to the WebSocket server:

```typescript
// To be implemented with Task 16 & 17
import { useState, useEffect, useCallback } from 'react';
import { WebSocketService } from '../services/WebSocketService';

export function useWebSocket(url: string = 'ws://localhost:8000') {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [socketService] = useState(() => new WebSocketService(url));

  useEffect(() => {
    const handleConnect = () => setIsConnected(true);
    const handleDisconnect = () => setIsConnected(false);
    const handleError = (error: Error) => setError(error);

    socketService.on('connect', handleConnect);
    socketService.on('disconnect', handleDisconnect);
    socketService.on('error', handleError);

    socketService.connect();

    return () => {
      socketService.off('connect', handleConnect);
      socketService.off('disconnect', handleDisconnect);
      socketService.off('error', handleError);
      socketService.disconnect();
    };
  }, [socketService, url]);

  const sendMessage = useCallback(
    (event: string, data: any) => {
      if (isConnected) {
        socketService.emit(event, data);
      } else {
        setError(new Error('WebSocket is not connected'));
      }
    },
    [isConnected, socketService]
  );

  return {
    isConnected,
    error,
    sendMessage,
    socketService
  };
}
```

### useTrainingMetrics Hook

This hook will provide components with real-time training metrics:

```typescript
// To be implemented with Task 16 & 17
import { useState, useEffect } from 'react';
import { useWebSocket } from './useWebSocket';
import { TrainingMetrics } from '../types/training';

export function useTrainingMetrics() {
  const { socketService, isConnected } = useWebSocket();
  const [metrics, setMetrics] = useState<TrainingMetrics[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState<TrainingMetrics | null>(null);
  const [status, setStatus] = useState<'idle' | 'training' | 'paused' | 'error'>('idle');

  useEffect(() => {
    if (!isConnected) return;

    const handleMetrics = (newMetrics: TrainingMetrics) => {
      setCurrentMetrics(newMetrics);
      setMetrics(prev => [...prev, newMetrics]);
    };

    const handleStatus = (newStatus: string) => {
      setStatus(newStatus as any);
    };

    socketService.on('training_metrics', handleMetrics);
    socketService.on('training_status', handleStatus);

    return () => {
      socketService.off('training_metrics', handleMetrics);
      socketService.off('training_status', handleStatus);
    };
  }, [isConnected, socketService]);

  return {
    metrics,
    currentMetrics,
    status
  };
}
```

These hooks will be implemented in conjunction with the WebSocket server as part of Tasks 16 and 17. 
