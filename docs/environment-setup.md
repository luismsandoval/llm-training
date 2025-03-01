# Environment Setup for LLM Training

This document provides detailed information about the environment setup for LLM training. It covers the Python environment configuration, GPU setup, and package installation.

## Python Environment with Conda

We use Conda for environment management as it provides better handling of both Python and non-Python dependencies, which is particularly useful for deep learning projects that often require specific CUDA libraries.

### Creating the Conda Environment

```bash
# Create a conda environment with Python 3.10
conda create -n llm-training python=3.10
conda activate llm-training
```

### Installing PyTorch with CUDA Support

```bash
# Install PyTorch with CUDA support (11.8)
conda install pytorch torchvision torchaudio pytorch-cuda=11.8 -c pytorch -c nvidia
```

This installs PyTorch with CUDA 11.8 support, which is compatible with most modern NVIDIA GPUs.

### Installing Required Packages

Our `requirements.txt` file contains all the necessary packages grouped by category:

```bash
# Install dependencies from requirements.txt
pip install -r requirements.txt
```

Key packages include:
- **Core ML**: numpy, scipy, scikit-learn
- **Deep Learning**: transformers, datasets, accelerate, bitsandbytes
- **Text Processing**: nltk, regex, sentencepiece
- **Visualization**: matplotlib, tensorboard, wandb
- **API & Dashboard**: fastapi, uvicorn, websockets, pydantic
- **Utilities**: tqdm, pytest, jsonlines, h5py

## GPU Configuration

We've set up automatic GPU configuration through conda activation hooks. This ensures optimal GPU performance every time the environment is activated.

### Environment Variables Configured

The GPU configuration script (`scripts/gpu_config.sh`) sets the following environment variables:

1. **Device Selection**
   - `CUDA_VISIBLE_DEVICES`: Controls which GPUs PyTorch can access
   - `CUDA_DEVICE_ORDER`: Ensures consistent device ordering

2. **Memory Management**
   - `PYTORCH_CUDA_ALLOC_CONF`: Controls memory allocation behavior
     - Prevents memory fragmentation
     - Enables automatic garbage collection

3. **Performance Optimization**
   - `CUDNN_BENCHMARK`: Enables faster convolution operations
   - `TORCH_CUDA_MATMUL_PRECISION`: Controls precision of matrix operations

4. **Distributed Training**
   - `NCCL_SOCKET_TIMEOUT`: Sets timeout for multi-GPU communication
   - `NCCL_P2P_DISABLE`: Controls GPU-to-GPU communication

### Automatic Loading through Conda

The GPU configuration is automatically loaded when activating the conda environment through a hook script. This hook is located at:
```
$CONDA_PREFIX/etc/conda/activate.d/gpu_config.sh
```

### Testing the GPU Configuration

A test script is provided to verify the GPU configuration:

```bash
# Run the GPU test script
python scripts/test_gpu.py
```

This script checks:
- CUDA availability and version
- Environment variable settings
- GPU capabilities and memory
- Tensor operation performance

## Troubleshooting

If you encounter issues with the environment setup:

1. **Conda command not found**:
   - Check that conda is in your PATH
   - Run `export PATH="$HOME/miniconda3/bin:$PATH"`

2. **PyTorch doesn't detect CUDA**:
   - Ensure you have the NVIDIA drivers installed
   - Verify with `nvidia-smi` that your GPU is detected

3. **Environment variables not set**:
   - Check that the activation hook is in the correct location
   - Manually source the GPU configuration script

4. **Poor GPU performance**:
   - Look for thermal throttling with `nvidia-smi -l 1`
   - Check for other processes using GPU memory

## Next Steps

After setting up the environment, you can proceed to:
- Implementing the transformer architecture
- Setting up the dataset pipeline
- Building the training infrastructure 
