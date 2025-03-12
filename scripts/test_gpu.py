#!/usr/bin/env python
"""
Basic GPU test script for LLM training
"""

import os
import torch

# Check CUDA availability
print(f"PyTorch version: {torch.__version__}")
print(f"CUDA available: {torch.cuda.is_available()}")
print(f"CUDA version: {torch.version.cuda if torch.cuda.is_available() else 'N/A'}")

# Check environment variables
print("\nEnvironment Variables:")
env_vars = [
    "CUDA_VISIBLE_DEVICES",
    "CUDA_DEVICE_ORDER",
    "PYTORCH_CUDA_ALLOC_CONF"
]
for var in env_vars:
    print(f"{var}: {os.environ.get(var, 'Not set')}")

# Check device info
if torch.cuda.is_available():
    print(f"\nDevice name: {torch.cuda.get_device_name(0)}")
    total_memory = torch.cuda.get_device_properties(0).total_memory / 1024**3
    print(f"Total memory: {total_memory:.2f} GB")
    
    # Basic performance test
    print("\nRunning basic matrix multiplication test...")
    size = 1000
    x = torch.randn(size, size, device='cuda')
    y = torch.randn(size, size, device='cuda')
    
    start = torch.cuda.Event(enable_timing=True)
    end = torch.cuda.Event(enable_timing=True)
    
    start.record()
    z = torch.matmul(x, y)
    end.record()
    
    torch.cuda.synchronize()
    elapsed_time = start.elapsed_time(end)
    print(f"Matrix multiplication time: {elapsed_time:.2f} ms")
    
    # Cleanup
    del x, y, z
    torch.cuda.empty_cache()
else:
    print("\nNo CUDA device available. GPU training will not be possible.")

print("\nGPU test completed.")
