const balloon = document.getElementById('balloon');
let size = 200;
const maxSize = 420;
const minSize = 200;
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange']; // เพิ่มสีตามชอบ

// ฟังก์ชันสุ่มสี
function randomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

// เมื่อคลิกบอลลูน
balloon.addEventListener('click', () => {
  size += 10;

  if (size > maxSize) {
    // ระเบิด
    size = minSize;
    balloon.style.backgroundColor = randomColor();
  } else {
    balloon.style.backgroundColor = randomColor();
  }

  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;
});

// เมื่อเมาส์ออกจากบอลลูน
balloon.addEventListener('mouseleave', () => {
  if (size > minSize) {
    size -= 5;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    balloon.style.backgroundColor = randomColor();
  }
});
