#!/usr/bin/env python3

# Requirements: 

# pip install pillow
# pip install pillow-heif
# pip install pillow-avif-plugin

# conda install pillow
# conda install -c conda-forge pillow-heif
# conda install -c conda-forge pillow-avif-plugin

# VIS164_Final_FallenStarSmall.tif: cannot build transform
# VIS164_Final_YurtGeisel.tif: cannot build transform
# VIS164_Final_DoofSplashSMALL.tif: cannot build transform


"""
Batch convert images from various formats (JPG, PNG, TIFF, etc.)
to WebP format using Pillow (Python).

Usage:
    python convert_to_webp.py <input_directory> <output_directory>
e.g.
    python convert_to_webp.py ./assets/photography/webp_photos ./assets/photography/webp_photos_webp


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
import argparse
import os
import sys
from pathlib import Path
from PIL import Image
import pillow_heif
import pillow_avif
from PIL import ImageCms
from io import BytesIO

# default color profile to sRGB
srgb_profile = ImageCms.createProfile("sRGB")

author = "Trey Scheid"

# Register HEIF/HEIC opener
pillow_heif.register_heif_opener()

# DEFAULT ARGUMENTS FOR TREY
default_input_dir = "./assets/photography/original_photos"
default_output_dir = "./assets/photography/webp_photos"

xmp_template = f"""<?xpacket begin='﻿' id='W5M0MpCehiHzreSzNTczkc9d'?>
<x:xmpmeta xmlns:x='adobe:ns:meta/'>
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/"
                     xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/">
      <dc:creator>
        <rdf:Seq>
          <rdf:li>{author}</rdf:li>
        </rdf:Seq>
      </dc:creator>
      <xmpRights:UsageTerms>
        <rdf:Alt>
          <rdf:li xml:lang="x-default">Not for AI/LLM training. © {author}</rdf:li>
        </rdf:Alt>
      </xmpRights:UsageTerms>
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>
<?xpacket end='w'?>"""


def resize_max_dimension(img, max_size=1000):
    """Helper function to reduce size"""
    width, height = img.size
    scale = min(max_size / width, max_size / height, 1.0)  # never upscale
    new_size = (int(width * scale), int(height * scale))

    resized = img.resize(new_size, Image.LANCZOS)
    return resized

def convert_to_webp(input_path, output_path, format="avif", lossless=False, quality=60):
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

            # if input has ICC profile, convert to sRGB
            if "icc_profile" in image.info:
                input_profile = ImageCms.ImageCmsProfile(BytesIO(image.info["icc_profile"]))
                image = ImageCms.profileToProfile(image, input_profile, srgb_profile, outputMode="RGB")

            # Ensure parent directory exists
            output_path.parent.mkdir(parents=True, exist_ok=True)

            # resize for web
            max_dimension = 1500 # px
            resized_image = resize_max_dimension(image, max_size=max_dimension)

            # Save in web format
            resized_image.save(
                output_path,
                format=format.upper(),
                lossless=lossless,
                quality=quality,
                xmp=xmp_template.encode("utf-8") # simple metadata replacement
            )
            print(f"[OK] {input_path} → {output_path}")
            return True

    except Exception as e:
        print(f"[ERROR] Failed to convert {input_path}: {e}")
        return False

def batch_convert(input_dir, output_dir, format, quality):
    """
    Walk through the input directory and convert all non-WebP images to WebP.

    Args:
        input_dir (Path): Directory containing input images.
        output_dir (Path): Directory where converted images will be saved.
    """
    supported_formats = {
        ".jpg", ".jpeg",
        ".png",
        ".tif", ".tiff",
        ".bmp",
        ".gif",
        ".heic", ".heif",
        ".avif"
    }
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
                output_path = output_dir / relative_path.with_suffix(f".{format}")

                if convert_to_webp(input_path, output_path, format=format, quality=quality):
                    count += 1
                else:
                    skipped += 1
            else:
                print(f"[SKIP] Unsupported format: {file}")
                skipped += 1

    print(f"\nConversion complete! {count} files converted, {skipped} skipped.")

def main(input_dir, output_dir, format, quality):
    print(f"Input directory: {input_dir}")
    print(f"Output directory: {output_dir}")
    input_dir = Path(input_dir)
    output_dir = Path(output_dir)

    if not input_dir.exists() or not input_dir.is_dir():
        print(f"Error: Input directory '{input_dir}' does not exist or is not a directory.")
        sys.exit(1)

    print(f"Converting images from '{input_dir}' → '{output_dir}'\n")
    batch_convert(input_dir, output_dir, format, quality)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Convert images to WebP format."
    )
    parser.add_argument(
        "input_dir",
        nargs="?",  # makes it optional
        default=os.path.join(os.getcwd(), default_input_dir),
        help="Path to input directory (default: ./assets/photography/original_photos)"
    )
    parser.add_argument(
        "output_dir",
        nargs="?",  # makes it optional
        default=os.path.join(os.getcwd(), default_output_dir),
        help="Path to output directory (default: ./assets/photography/webp_photos)"
    )
    parser.add_argument(
        "--format",
        choices=["webp", "avif"],
        default="avif",
        help="Output format (default: avif)"
    )
    parser.add_argument(
        "--quality",
        nargs="?",  # makes it optional
        default="60",
        help="0-100 scale quality for lossy compression (default: 60)"
    )

    args = parser.parse_args()
    main(args.input_dir, args.output_dir, args.format.lower(), int(args.quality))
