// ฟังก์ชันคำนวณ
function calculate() {
    const left = document.getElementById('left').value;
    const right = document.getElementById('right').value;
    const operator = document.getElementById('operator').value;
  
    const leftNum = parseInt(left);
    const rightNum = parseInt(right);
  
    // เช็คว่าเป็นเลขจำนวนเต็มบวก
    if (isNaN(leftNum) || isNaN(rightNum) || leftNum < 0 || rightNum < 0) {
      alert("Error :(");
      return;
    }
  
    // เช็คหารหรือโมด้วย 0
    if ((operator === '/' || operator === '%') && rightNum === 0) {
      alert("It's over 9000!!");
      console.log("It's over 9000!!");
      return;
    }
  
    let result;
    switch (operator) {
      case '+':
        result = leftNum + rightNum;
        break;
      case '-':
        result = leftNum - rightNum;
        break;
      case '*':
        result = leftNum * rightNum;
        break;
      case '/':
        result = leftNum / rightNum;
        break;
      case '%':
        result = leftNum % rightNum;
        break;
    }
  
    alert(result);
    console.log(result);
  }
  
  // เพิ่ม event listener ให้ปุ่ม
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('calculateBtn');
    btn.addEventListener('click', calculate);
  
    // แจ้งเตือนทุก 30 วินาที
    setInterval(() => {
      alert("Please, use me...");
    }, 30000);
  });
  