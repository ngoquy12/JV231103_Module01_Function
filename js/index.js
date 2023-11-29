// Tính tổng các số trong khoảng từ 10 đến 20, 20 đến 30, 30 đến 40

let total1 = 0;
let total2 = 0;
let total3 = 0;

for (let i = 10; i <= 20; i++) {
  total1 += i;
}

for (let i = 20; i <= 30; i++) {
  total2 += i;
}

for (let i = 30; i <= 40; i++) {
  total3 += i;
}

console.log("Tổng của total1: ", total1);
console.log("Tổng của total2: ", total2);
console.log("Tổng của total3: ", total3);

// => Code bị lặp lại nhiều lần
// Khó bảo trì
// => function ra đời để giải quyết vấn đề trên

// 1. Cú pháp khai báo hàm
// function ten_ham (tham_so) {
//   logic code
// }

// Viết hàm tính tổng hai số a và b

// const a = 10;
// const b = 20;
// const c = a + b;

function sum(a, b) {
  // console.log(a + b);
  // return a + b;
}

console.log(sum(10, 20));

// sum(10, 20);
// sum(30, 40);
// sum(50, 60);

// Tính tổng các số trong khoảng từ 10 đến 20, 20 đến 30, 30 đến 40
function sumNumber(a, b) {
  // Giá trị lưu trữ
  let totalNumber = 0;
  for (let i = a; i <= b; i++) {
    totalNumber += i;
  }

  // Trả về giá trị cho hàm
  return totalNumber;
}

console.log(sumNumber(1, 2));
console.log(sumNumber(3, 4));
console.log(sumNumber(5, 6));

// 1. Viết hàm tính tổng các số trong mảng [10, 22, 15, 30, 80, 65]
// 2. Viết hàm tìm giá trị lớn nhất trong mảng
// 3. Viết hàm đảo ngược một chuỗi (có thể dùng hàm có sẵn)
// 4. Viết hàm kiểm tra số chẵn và hàm kiểm tra số lẻ

/**
 * Hàm tính tổng các số trong một mảng
 * @param {*} array Mảng các số cần tính toán
 * @returns Tổng các số trong mảng
 * Author: NVQUY(29/11/2023)
 * ModifiedBy:
 */
function caculatorNumber(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

/**
 * Đảo ngược một chuỗi
 * @param {*} myString  Chuỗi cần đảo ngược
 * @returns Chuỗi đã bị đảo ngược
 * Author: NVQUY(29/11/2023)
 * ModifiedBy:
 */
function reverseString(myString) {
  let reverseStr = myString.split("").reverse().join("");
  return reverseStr;
}

const myString = "Ngọ Văn Quý";

console.log(reverseString(myString));

const array = [1, 2, 3, 4, 5, 6];
array.reverse();
