# LLM From Scratch

A complete implementation of a transformer-based Large Language Model (LLM) built entirely from scratch with PyTorch, including training infrastructure and a real-time monitoring dashboard.

## Features

- **Custom Transformer Architecture**: Build transformer-based language models from scratch with detailed documentation
- **Training Infrastructure**: Full implementation of training, validation, and checkpointing systems
- **Memory Optimization**: Techniques for training larger models on limited hardware (gradient accumulation, mixed precision)
- **Real-time Dashboard**: TypeScript-based visualization of training metrics and model performance
- **Text Generation**: Multiple decoding strategies with configurable parameters
- **Comprehensive Documentation**: Detailed comments and explanations of key concepts

## Project Structure

```
.
├── src/                    # Python implementation
│   ├── transformer/        # Transformer architecture components
│   │   ├── attention.py    # Multi-head attention implementation
│   │   ├── feedforward.py  # Position-wise feed-forward networks
│   │   ├── positional.py   # Positional encoding
│   │   └── model.py        # Full transformer model
│   ├── tokenizer/          # Custom tokenization implementation
│   ├── data/               # Dataset handling and processing
│   ├── training/           # Training loop and optimization
│   ├── generation/         # Text generation utilities
│   └── api/                # FastAPI server for dashboard communication
├── dashboard/              # TypeScript frontend for monitoring
│   ├── src/
│   │   ├── components/     # React visualization components
│   │   ├── hooks/          # Custom React hooks
│   │   └── services/       # WebSocket and state management
│   └── public/             # Static assets
├── scripts/                # Utility scripts for training and evaluation
│   ├── gpu_config.sh       # GPU environment variable configuration
│   └── test_gpu.py         # Script to test GPU setup and performance
└── requirements.txt        # Python dependencies
```

## Prerequisites

- Python 3.10+
- CUDA-compatible GPU (strongly recommended for training)
- Node.js 16+ (for dashboard)

## Setup Instructions

### 1. Python Environment

We use Conda for environment management, which provides better handling of both Python and non-Python dependencies (especially useful for deep learning projects).

```bash
# Create a conda environment with Python 3.10
conda create -n llm-training python=3.10
conda activate llm-training

# Install PyTorch with CUDA support
conda install pytorch torchvision torchaudio pytorch-cuda=11.8 -c pytorch -c nvidia

# Install other dependencies
pip install -r requirements.txt
```

### 2. GPU Configuration

We've created a script that configures essential environment variables for optimal GPU performance. The settings are automatically applied when activating the conda environment.

```bash
# The variables configured include:
# - CUDA device selection
# - Memory management optimizations
# - Performance tuning
# - Distributed training settings

# Test your GPU configuration
python scripts/test_gpu.py
```

The output will show your GPU device, memory, CUDA version, and performance metrics.

### 3. Dashboard Setup (Optional)

```bash
# Navigate to dashboard directory
cd dashboard

# Install dependencies
npm install

# Start the dashboard
npm run dev
```

## Usage

### Training a Model From Scratch

```python
from src.transformer.model import TransformerLM
from src.training.trainer import Trainer
from src.data.dataset import TextDataset

# Configure model architecture
model = TransformerLM(
    vocab_size=50000,
    d_model=768,
    n_layers=12,
    n_heads=12,
    d_ff=3072,
    max_seq_length=1024,
    dropout=0.1
)

# Create dataset
dataset = TextDataset("path/to/corpus.txt", max_seq_length=1024)

# Initialize trainer with memory optimizations
trainer = Trainer(
    model=model,
    dataset=dataset,
    batch_size=4,
    gradient_accumulation_steps=8,  # Effective batch size of 32
    fp16=True,  # Mixed precision training
    checkpoint_dir="checkpoints"
)

# Train the model
trainer.train(
    epochs=10,
    learning_rate=1e-4,
    warmup_steps=1000,
    enable_dashboard=True  # Streams metrics to dashboard
)
```

### Generating Text

```python
from src.transformer.model import TransformerLM
from src.tokenizer.tokenizer import BPETokenizer
from src.generation.generate import generate_text

# Load tokenizer and model
tokenizer = BPETokenizer.load("checkpoints/tokenizer.json")
model = TransformerLM.load("checkpoints/model_final.pt")

# Generate with different strategies
greedy_text = generate_text(
    model, 
    tokenizer, 
    "Once upon a time,", 
    max_length=100,
    strategy="greedy"
)

beam_text = generate_text(
    model, 
    tokenizer, 
    "Once upon a time,", 
    max_length=100,
    strategy="beam",
    num_beams=5
)

sampling_text = generate_text(
    model, 
    tokenizer, 
    "Once upon a time,", 
    max_length=100,
    strategy="sampling",
    temperature=0.8,
    top_p=0.95
)

print(greedy_text)
```

## Mathematical Details

The transformer architecture follows the structure described in "Attention Is All You Need" (Vaswani et al., 2017), implementing:

- Multi-head self-attention with scaled dot-product attention
- Position-wise feed-forward networks with GELU activation
- Sinusoidal positional encodings
- Layer normalization and residual connections

For training optimization, we implement:

- AdamW optimizer with weight decay
- Cosine learning rate scheduler with warmup
- Gradient clipping for training stability
- Mixed precision training (FP16)
- Gradient accumulation for effective batch sizing

## License

MIT

## Acknowledgements

- PyTorch
- The original transformer paper: "Attention Is All You Need"
- The open-source AI community 
