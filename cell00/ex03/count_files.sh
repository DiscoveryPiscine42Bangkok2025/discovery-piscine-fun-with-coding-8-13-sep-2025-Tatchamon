#!/bin/bash
# นับจำนวนไฟล์ปกติและโฟลเดอร์ใน directory ปัจจุบัน (ไม่นับซ่อน .)

count=$(find . -maxdepth 1 -mindepth 1 \( -type f -o -type d \) ! -name ".*" | wc -l)
echo $count
