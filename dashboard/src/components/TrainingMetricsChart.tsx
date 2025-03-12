import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TrainingMetricsChartProps } from '../types';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/**
 * TrainingMetricsChart Component
 * 
 * Renders a line chart for visualizing training metrics
 * from WebSocket connection to training process.
 */
const TrainingMetricsChart: React.FC<TrainingMetricsChartProps> = ({
  title = 'Training Metrics',
  height = 300,
  metrics,
  liveUpdate = true,
  updateInterval = 2000
}) => {
  // Training data state (would come from WebSocket)
  const [trainingData, setTrainingData] = useState({
    epochs: [],
    loss: [],
    accuracy: []
  });

  // Basic chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: title },
    }
  };

  // Simple mock data generator for placeholder purposes
  useEffect(() => {
    if (!liveUpdate || metrics) return;
    
    const mockDataInterval = setInterval(() => {
      setTrainingData(prevData => {
        const nextEpoch = prevData.epochs.length > 0 ? prevData.epochs[prevData.epochs.length - 1] + 1 : 1;
        const nextLoss = prevData.loss.length > 0 ? Math.max(0.1, prevData.loss[prevData.loss.length - 1] * 0.95) : 2.0;
        const nextAccuracy = prevData.accuracy.length > 0 ? Math.min(1, prevData.accuracy[prevData.accuracy.length - 1] * 1.05) : 0.5;

        return {
          epochs: [...prevData.epochs, nextEpoch],
          loss: [...prevData.loss, nextLoss],
          accuracy: [...prevData.accuracy, nextAccuracy]
        };
      });
    }, updateInterval);

    return () => clearInterval(mockDataInterval);
  }, [liveUpdate, metrics, updateInterval]);

  // Use provided metrics if available
  useEffect(() => {
    if (metrics && metrics.length > 0) {
      setTrainingData({
        epochs: metrics.map(m => m.epoch),
        loss: metrics.map(m => m.loss),
        accuracy: metrics.map(m => m.accuracy || 0)
      });
    }
  }, [metrics]);

  // Chart data
  const data = {
    labels: trainingData.epochs,
    datasets: [
      {
        label: 'Loss',
        data: trainingData.loss,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Accuracy',
        data: trainingData.accuracy,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div style={{ height, width: '100%' }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default TrainingMetricsChart;
