# LLM From Scratch

A transformer-based Large Language Model (LLM) implementation built from scratch with PyTorch, featuring a real-time monitoring dashboard.

## Overview

This project demonstrates the implementation of a transformer-based language model with:

- Local GPU training on NVIDIA RTX 3090
- Real-time metrics monitoring through a React/TypeScript dashboard
- WebSocket communication between Python backend and frontend
- AWS S3 integration for dataset and model management
- Performance optimizations for GPU-based training

## Current State

The project is in early development with the following components:

- React/TypeScript dashboard structure with training metrics visualization
- Basic GPU configuration and testing scripts
- Placeholder components for WebSocket communication
- Component structure and type definitions

A detailed checklist of remaining tasks can be found in [TODO.md](./TODO.md).

## Project Structure

```
.
├── dashboard/              # TypeScript frontend for monitoring
│   ├── src/
│   │   ├── components/     # React visualization components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # WebSocket and state management
│   │   └── types/          # TypeScript type definitions
│   ├── public/             # Static assets
│   ├── README.md           # Dashboard-specific documentation
│   └── package.json        # Frontend dependencies
├── scripts/                # Utility scripts for training and evaluation
│   ├── gpu_config.sh       # GPU environment variable configuration
│   └── test_gpu.py         # Script to test GPU setup and performance
├── docs/                   # Documentation
├── CLAUDE.md               # Project guidelines and commands
├── TODO.md                 # Implementation checklist
└── requirements.txt        # Python dependencies
```

## Prerequisites

- Python 3.10+
- CUDA-compatible GPU (NVIDIA RTX 3090)
- Node.js 16+ (for dashboard)

## Setup Instructions

### 1. Python Environment

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

Test the GPU configuration:

```bash
# Test your GPU configuration
python scripts/test_gpu.py
```

### 3. Dashboard Setup

```bash
# Navigate to dashboard directory
cd dashboard

# Install dependencies
npm install

# Start the development server
npm run dev

# For production build
npm run build
```

## Implementation Plan

The implementation follows the checklist in [TODO.md](./TODO.md), covering:

1. **Transformer Architecture**: Attention mechanisms, positional encoding, etc.
2. **GPU-Optimized Training**: Memory optimizations, mixed precision, etc.
3. **React/TypeScript Dashboard**: Real-time metrics visualization
4. **WebSocket Communication**: Bi-directional data flow between Python and TypeScript
5. **AWS S3 Integration**: Dataset and model checkpoint management

## License

MIT
