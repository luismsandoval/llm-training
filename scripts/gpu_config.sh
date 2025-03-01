#!/bin/bash
# ======================================================================
# GPU Configuration for LLM Training
# ======================================================================
# 
# This script sets environment variables that optimize CUDA/GPU usage 
# for training large language models. Each variable has been carefully  
# selected to enhance performance while maintaining stability.
#
# When to use: 
# - Before starting model training sessions
# - When experiencing GPU memory issues
# - When optimizing for multi-GPU setups
# 
# Note: This script is automatically sourced when the conda environment 
# is activated through the activation hook in:
# $CONDA_PREFIX/etc/conda/activate.d/gpu_config.sh
# ======================================================================

# ========================= GPU DEVICE SELECTION =======================
# Controls which GPUs are visible to PyTorch
# Examples:
#   "0,1,2,3" - Use first 4 GPUs
#   "0" - Use only the first GPU
#   "" - Use CPU only
#
# Impact: 
# - Limits PyTorch to only use specified GPUs
# - Can isolate training to specific GPUs, leaving others for different tasks
# - Useful in multi-user or multi-job environments
export CUDA_VISIBLE_DEVICES="0"

# Controls the order in which CUDA devices are enumerated
# "PCI_BUS_ID" - orders devices as they appear in the PCI bus (recommended)
# "FASTEST_FIRST" - orders devices by computational performance
#
# Impact:
# - PCI_BUS_ID ensures consistent device numbering across program runs
# - Especially important in multi-GPU setups where device IDs need to be predictable
export CUDA_DEVICE_ORDER="PCI_BUS_ID"

# ========================= MEMORY MANAGEMENT =========================
# Controls PyTorch's CUDA memory allocation behavior with these options:
#
# - max_split_size_mb:256
#   Limits the size of memory blocks that can be allocated at once
#   Smaller values reduce fragmentation but may increase allocation overhead
#
# - garbage_collection_threshold:0.8
#   Trigger garbage collection when 80% of reserved memory is unused
#   Helps reclaim GPU memory that's no longer needed
#
# Impact:
# - Reduces memory fragmentation
# - Improves memory utilization efficiency
# - Can prevent out-of-memory errors during long training sessions
export PYTORCH_CUDA_ALLOC_CONF="max_split_size_mb:256,garbage_collection_threshold:0.8"

# ========================= PERFORMANCE TUNING ========================
# Enable cuDNN benchmark mode for faster convolution operations
# When enabled, cuDNN will benchmark multiple algorithms and select the fastest
#
# Impact:
# - Can significantly improve performance on fixed-size inputs (common in training)
# - May slightly increase memory usage
# - Most beneficial when input shapes don't change between iterations
export CUDNN_BENCHMARK="true"

# Use TF32 precision for tensor operations (Ampere+ GPUs only)
# Options: 
#   - "highest" (uses FP32)
#   - "high" (uses TF32 for matmul only)
#   - "medium" (uses TF32 for matmul and convolutions)
#
# Impact:
# - TF32 provides up to 10x speedup with minimal precision loss
# - "medium" gives a good balance between speed and accuracy for LLM training
# - Only affects NVIDIA GPUs with Ampere architecture or newer (RTX 3xxx+)
export TORCH_CUDA_MATMUL_PRECISION="medium" 

# ==================== DISTRIBUTED TRAINING SETTINGS =================
# Timeout for NCCL operations (communication between GPUs)
# Value in seconds before NCCL operations time out
#
# Impact:
# - Prevents training jobs from hanging indefinitely on communication errors
# - Higher values are needed for large model synchronization
export NCCL_SOCKET_TIMEOUT="300"

# Control peer-to-peer communication between GPUs
# 0 = enabled (default), 1 = disabled
#
# Impact:
# - Disabling P2P can help when there are NVLink/PCIe issues
# - Usually should be left enabled for better performance
export NCCL_P2P_DISABLE="0"

# ============================== MISC =================================
# Print CUDA error messages verbosely (useful for debugging)
# 0 = normal mode, 1 = synchronous/verbose mode
#
# Impact:
# - Setting to 1 forces synchronous CUDA execution
# - Significantly slows down execution but provides precise error locations
# - Only use when debugging CUDA issues
export CUDA_LAUNCH_BLOCKING="0" # Set to 1 for debug

# Display PyTorch operations on CUDA devices
# 0 = disabled, 1 = enabled
#
# Impact:
# - When enabled, shows the C++ stack trace for PyTorch operations
# - Helpful for debugging complex models but creates verbose output
export TORCH_SHOW_CPP_STACK_DURING_EXECUTION="0" # Set to 1 for debug

echo "GPU environment variables configured successfully."
echo "CUDA is visible on device(s): $CUDA_VISIBLE_DEVICES"
echo "Using CUDA device order: $CUDA_DEVICE_ORDER" 
