#!/bin/bash
# GPU Configuration for LLM Training
# Basic environment variables for GPU optimization

# GPU device selection
export CUDA_VISIBLE_DEVICES="0"
export CUDA_DEVICE_ORDER="PCI_BUS_ID"

# Memory management
export PYTORCH_CUDA_ALLOC_CONF="max_split_size_mb:256,garbage_collection_threshold:0.8"

# Performance tuning
export CUDNN_BENCHMARK="true"
export TORCH_CUDA_MATMUL_PRECISION="medium"

echo "GPU environment variables configured successfully."
echo "CUDA is visible on device(s): $CUDA_VISIBLE_DEVICES"
