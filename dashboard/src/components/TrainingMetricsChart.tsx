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
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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

// Define the props interface for the component
interface TrainingMetricsChartProps {
  title?: string;
  height?: number;
}

/**
 * TrainingMetricsChart Component
 * 
 * This component renders a line chart for visualizing training metrics
 * such as loss, accuracy, learning rate, etc. over time.
 * 
 * In a real application, this would receive data from a WebSocket connection
 * to the training process, but for now it uses mock data.
 */
const TrainingMetricsChart: React.FC<TrainingMetricsChartProps> = ({
  title = 'Training Metrics',
  height = 300
}) => {
  // Mock data state (in a real app, this would come from WebSocket)
  const [trainingData, setTrainingData] = useState<{
    epochs: number[];
    loss: number[];
    accuracy: number[];
  }>({
    epochs: [],
    loss: [],
    accuracy: []
  });

  // Chart options
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Generate mock data on component mount
  useEffect(() => {
    // Simulate data coming in over time
    const mockDataInterval = setInterval(() => {
      setTrainingData(prevData => {
        const nextEpoch = prevData.epochs.length > 0 
          ? prevData.epochs[prevData.epochs.length - 1] + 1 
          : 1;
        
        // Generate random metrics (in a real app, these would be actual training metrics)
        const nextLoss = prevData.loss.length > 0 
          ? Math.max(0.1, prevData.loss[prevData.loss.length - 1] * (0.9 + Math.random() * 0.2)) 
          : 2.0;
        
        const nextAccuracy = prevData.accuracy.length > 0 
          ? Math.min(1, prevData.accuracy[prevData.accuracy.length - 1] * (1 + Math.random() * 0.1)) 
          : 0.5;

        return {
          epochs: [...prevData.epochs, nextEpoch],
          loss: [...prevData.loss, nextLoss],
          accuracy: [...prevData.accuracy, nextAccuracy]
        };
      });
    }, 2000); // Update every 2 seconds

    // Clean up interval on component unmount
    return () => clearInterval(mockDataInterval);
  }, []);

  // Prepare chart data
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
