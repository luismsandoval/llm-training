import { useState } from 'react'
import './App.css'
import TrainingMetricsChart from './components/TrainingMetricsChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>LLM Training Dashboard</h1>
        <p>Real-time monitoring for Large Language Model training</p>
      </header>

      <main className="app-content">
        <section className="metrics-section">
          <h2>Training Metrics</h2>
          <div className="chart-container">
            <TrainingMetricsChart title="Loss & Accuracy" height={400} />
          </div>
          <div className="metrics-info">
            <p>
              This chart displays mock training metrics. In a real application, 
              this data would come from a WebSocket connection to the training process.
            </p>
            <p>
              The chart updates every 2 seconds to simulate real-time data.
            </p>
          </div>
        </section>

        <section className="controls-section">
          <h2>Training Controls</h2>
          <div className="control-buttons">
            <button 
              className="control-button"
              onClick={() => alert('Training would start here')}
            >
              Start Training
            </button>
            <button 
              className="control-button"
              onClick={() => alert('Training would pause here')}
            >
              Pause
            </button>
            <button 
              className="control-button"
              onClick={() => alert('Training would stop here')}
            >
              Stop
            </button>
          </div>
          <div className="counter-demo">
            <p>React state demo counter: {count}</p>
            <button onClick={() => setCount((count) => count + 1)}>
              Increment
            </button>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>LLM From Scratch - Training Dashboard</p>
      </footer>
    </div>
  )
}

export default App
