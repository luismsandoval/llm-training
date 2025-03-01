#!/usr/bin/env python
"""
CUDA/GPU Configuration Testing Utility for LLM Training
=======================================================

This script performs a comprehensive test of your GPU setup to ensure 
it's properly configured for LLM training. It checks:

1. CUDA availability and version
2. Environment variables for GPU optimization
3. Device capabilities and memory
4. Tensor operation performance

Usage:
    python test_gpu.py

Interpretation:
    - If "CUDA available: True" - Your PyTorch can access the GPU
    - Environment variables should match those in scripts/gpu_config.sh
    - Matrix multiplication should complete in under 100ms on modern GPUs
    - Memory allocation should be minimal for this test (<0.5 GB)

Troubleshooting:
    - If CUDA is not available, check your PyTorch installation
    - If environment variables are "Not set", the activation hook may not be working
    - If matrix operations are slow, check for thermal throttling or other GPU loads

This script is an integral part of the LLM training workflow to
verify GPU configuration before starting resource-intensive training.
"""

import os
import torch

def print_separator():
    """Print a visual separator for better readability"""
    print("\n" + "=" * 50 + "\n")

# ====================== CUDA AVAILABILITY CHECK ======================
print_separator()
print(f"PyTorch version: {torch.__version__}")
print(f"CUDA available: {torch.cuda.is_available()}")
print(f"CUDA version: {torch.version.cuda if torch.cuda.is_available() else 'N/A'}")

# ====================== ENVIRONMENT VARIABLES CHECK ==================
print_separator()
print("Environment Variables:")
# List of important environment variables to check
# These should match the ones set in gpu_config.sh
env_vars = [
    "CUDA_VISIBLE_DEVICES",
    "CUDA_DEVICE_ORDER",
    "PYTORCH_CUDA_ALLOC_CONF",
    "CUDNN_BENCHMARK",
    "TORCH_CUDA_MATMUL_PRECISION"
]
# Display the value of each variable or "Not set" if not defined
for var in env_vars:
    print(f"{var}: {os.environ.get(var, 'Not set')}")

# ====================== DEVICE INFORMATION ===========================
if torch.cuda.is_available():
    print_separator()
    print(f"Current CUDA device: {torch.cuda.current_device()}")
    print(f"Device name: {torch.cuda.get_device_name(0)}")
    
    # Device capabilities show architecture features
    # Higher numbers indicate newer GPU architecture
    capabilities = torch.cuda.get_device_capability(0)
    print(f"Device capabilities: {capabilities}")
    
    # Interpret capabilities
    if capabilities[0] >= 8:
        print(" - Ampere architecture or newer (supports TF32)")
    elif capabilities[0] >= 7:
        print(" - Volta/Turing architecture (supports Tensor Cores)")
    else:
        print(" - Older architecture (limited optimization support)")
    
    # ====================== MEMORY INFORMATION =========================
    print_separator()
    print("Memory Information:")
    # Total GPU memory available
    total_memory = torch.cuda.get_device_properties(0).total_memory / 1024**3
    print(f"Total memory: {total_memory:.2f} GB")
    # Currently allocated memory (should be minimal at this point)
    print(f"Allocated memory: {torch.cuda.memory_allocated(0) / 1024**3:.2f} GB")
    # Reserved memory (may be higher than allocated due to caching)
    print(f"Cached memory: {torch.cuda.memory_reserved(0) / 1024**3:.2f} GB")
    
    # ====================== PERFORMANCE TEST ===========================
    print_separator()
    print("Testing tensor operations...")
    
    # Create matrices for multiplication test
    # This is a common operation in transformer models
    size = 1000  # Matrix size affects performance
    print(f" - Creating random matrices of size {size}×{size}")
    x = torch.randn(size, size, device='cuda')
    y = torch.randn(size, size, device='cuda')
    
    # Benchmark matrix multiplication
    # This tests both memory bandwidth and compute performance
    start = torch.cuda.Event(enable_timing=True)
    end = torch.cuda.Event(enable_timing=True)
    
    # Warm-up run (for more accurate timing)
    _ = torch.matmul(x, y)
    torch.cuda.synchronize()
    
    # Timed run
    start.record()
    z = torch.matmul(x, y)
    end.record()
    
    # Wait for GPU to finish
    torch.cuda.synchronize()
    
    # Get elapsed time and interpret results
    elapsed_time = start.elapsed_time(end)
    print(f"Matrix multiplication time: {elapsed_time:.2f} ms")
    
    if elapsed_time < 10:
        print(" - Excellent performance!")
    elif elapsed_time < 50:
        print(" - Good performance")
    elif elapsed_time < 100:
        print(" - Acceptable performance")
    else:
        print(" - Performance may be suboptimal")
    
    # Check memory allocation after operations
    allocated_memory = torch.cuda.memory_allocated(0) / 1024**3
    print(f"Allocated memory after operations: {allocated_memory:.2f} GB")
    
    # Free up GPU memory
    del x, y, z
    torch.cuda.empty_cache()
    print(f"Memory after cleanup: {torch.cuda.memory_allocated(0) / 1024**3:.2f} GB")
else:
    print_separator()
    print("⚠️ No CUDA device available. Running on CPU only.")
    print("LLM training will be extremely slow without GPU acceleration.")
    print("Please check your PyTorch installation and CUDA configuration.")

print_separator()
print("GPU configuration test completed.") 
