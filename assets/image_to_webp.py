#!/usr/bin/env python3
# pip install pillow
# conda install pillow

"""
Batch convert images from various formats (JPG, PNG, TIFF, etc.)
to WebP format using Pillow (Python).

Usage:
    python convert_to_webp.py <input_directory> <output_directory>
e.g.
    python convert_to_webp.py ./assets/photography ./assets/photography_webp


Dependencies:
    - Pillow (install with `pip install pillow`)
    Pillow>=10.0.0


Notes:
    - The script skips files that are already in WebP format.
    - It defaults to lossy WebP compression set to 80% quality.
    - Works on all OS (Windows, macOS, Linux).
    - handles .jpg, .jpeg, .png, .tiff, .bmp, and .gif formats.
    - does not handle any RAW, pdf, svg, ico, heic, avif formats.
"""

import os
import sys
from pathlib import Path
from PIL import Image

# DEFAULT ARGUMENTS FOR TREY
input_dir = "./assets/photography_original"
output_dir = "./assets/photography"

def convert_to_webp(input_path=input_dir, output_path=output_dir, lossless=False, quality=80):
    """
    Convert a single image file to WebP format.

    Args:
        input_path (Path): Path to the input image file.
        output_path (Path): Path to save the output WebP image.
        lossless (bool): Whether to use lossless WebP compression.
        quality (int): Compression quality (0–100). Only used if lossless=False.
    """
    try:
        # Open the image
        with Image.open(input_path) as image:
            # Convert to 'RGB' if not already (WebP doesn't support CMYK/other modes well)
            if image.mode not in ("RGB", "RGBA"):
                image = image.convert("RGB")

            # Ensure parent directory exists
            output_path.parent.mkdir(parents=True, exist_ok=True)

            # Save in WebP format
            image.save(
                output_path,
                format="webp",
                lossless=lossless,
                quality=quality
            )
            print(f"[OK] {input_path} → {output_path}")

    except Exception as e:
        print(f"[ERROR] Failed to convert {input_path}: {e}")

def batch_convert(input_dir, output_dir):
    """
    Walk through the input directory and convert all non-WebP images to WebP.

    Args:
        input_dir (Path): Directory containing input images.
        output_dir (Path): Directory where converted images will be saved.
    """
    supported_formats = {".jpg", ".jpeg", ".png", ".tiff", ".bmp", ".gif"}
    count = 0
    skipped = 0

    # Walk through directory tree
    for root, _, files in os.walk(input_dir):
        for file in files:
            ext = Path(file).suffix.lower()

            # Skip if already WebP
            if ext == ".webp":
                skipped += 1
                continue

            # Only process supported formats
            if ext in supported_formats:
                input_path = Path(root) / file
                relative_path = input_path.relative_to(input_dir)

                # Replace extension with .webp
                output_path = output_dir / relative_path.with_suffix(".webp")

                convert_to_webp(input_path, output_path)
                count += 1
            else:
                skipped += 1

    print(f"\nConversion complete! {count} files converted, {skipped} skipped.")

def main():
    if len(sys.argv) != 3:
        print("Usage: python convert_to_webp.py <input_directory> <output_directory>")
        sys.exit(1)

    input_dir = Path(sys.argv[1]).resolve()
    output_dir = Path(sys.argv[2]).resolve()

    if not input_dir.exists() or not input_dir.is_dir():
        print(f"Error: Input directory '{input_dir}' does not exist or is not a directory.")
        sys.exit(1)

    print(f"Converting images from '{input_dir}' → '{output_dir}'\n")
    batch_convert(input_dir, output_dir)

if __name__ == "__main__":
    main()
