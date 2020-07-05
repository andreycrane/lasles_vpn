find ./src/img -name "*.jpg" -o -name "*.png" -exec sh -c 'cwebp -q 75 "$1" -o "${1%.png}.webp"' sh {} ';'
