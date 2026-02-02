// Câu 1:
let number = +prompt("Nhập Số Nguyên n");

if (number % 2 === 0) console.log(`Số ${number} là số chẵn`);
else console.log(`Số ${number} là số lẻ`);

if (number === 0) console.log(`Số ${number} bằng 0`);
else if (number > 0) console.log(`Số ${number} là số dương`);
else console.log(`Số ${number} là số âm`);

if (number > 0)
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
else console.log("Giá trị n không hợp lệ để tạo dãy số");

// Câu 2:
let sum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
    sum += i;
  } else if (i % 5 === 0) console.log("Buzz");
  else if (i % 5 === 0 && i % 3 === 0) console.log("FizzBuzz");
  else console.log(i);
}
console.log(`Tổng của tất cả các chữ số đã in ra chữ "Fizz" là: ${sum}`);
