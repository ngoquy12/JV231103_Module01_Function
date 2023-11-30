// Trong JS thông thường có 3 loại function
// 1. Declaration function
// 2. Expression function
// 3. Arrow function
// 4. Generation function (redux saga)

// 1. Declation function
// Cú pháp: function ten_function (tham_so) { // logic code }
// Chú ý: Function Declation có cơ chế hosting ()
// Phạm vi sử dụng biến: Những biến được khai báo với từ khóa let, const trong function thì phạm vi sử dụng
// của biến đó chỉ nằm trong khối block (function)
// Nếu khai báo function loại này mà trùng tên nhau thì nó sẽ lấy giá trị của hàm được khai báo sau

// Xây dựng một hàm tính tổng hai số a và b

function sum(a, b) {
  let c = 10;
  // logic code
  return a + b;
}

function sum(a, b) {
  let c = 10;
  // logic code
  return a - b;
}

function sum(a, b) {
  let c = 10;
  // logic code
  return a * b;
}

console.log(sum(1, 3));

// 2. Expression function

// let ten_ham = function (tham_so) {
//    logic code
// }
// Chú ý: hàm này không có cơ chế hosting
// Nếu như khai báo với từ khóa var thì chúng ta có thể khai báo lại được và
// nó sẽ lấy kết quả của hàm được khai báo sau cùng

var subtraction = function (a, b) {
  return a + b;
};

var subtraction = function (a, b) {
  return a * b;
};

console.log(subtraction(4, 5));

// 3. Arrow function
// Cú pháp : tu_khoa_khai_bao ten_ham = (tham_so) => { logic code }
// Không có cơ chế hosting
// Khuyến cáo: Nên khai báo với từ khóa const, không nên sử dụng với từ khóa var

// Khi sử dụng hàm thì yêu cầu phải bắt try-catch cho hàm để tránh việc hàm bị dừng đột ngôt, làm cho chương
// trình bị chết
// Khi chương trình thành công thì nó sẽ lọt vào try
// Khi có lỗi xảy ra thì nó sẽ lọt vào trong catch
// Khi thành công hoặc thất bại thì mặc định nó đều chạy vào finally

/**
 * Thực hiện nhân hai số
 * @param {*} a Số thứ nhất
 * @param {*} b Số thứ 2
 * @returns Kết quả của phép nhân hai số
 * Auth: NVQUY(30/11/2023)
 */
const multiplication = (a, b) => {
  try {
    hihi();
    throw new Error("Có lỗi");
    // console.log("Thành công");
  } catch (error) {
    console.log("Xử lý lỗi", error);
  } finally {
    console.log("Kết thúc");
  }
};

// Bài tập cơ bản:
// 1. Viết một hàm JavaScript để tính tổng của hai số.

// 2. Viết một hàm JavaScript nhận vào một mảng số nguyên và trả về tổng của các số đó.

// 3. Viết một hàm JavaScript để kiểm tra xem một số có phải là số nguyên tố hay không.

//. 4. Viết một hàm JavaScript để đảo ngược một chuỗi.

// Bài tập nâng cao:
// 5. Viết một hàm JavaScript nhận vào một mảng các số và trả về một mảng mới chỉ chứa số chẵn.

// 6. Viết một hàm JavaScript nhận vào một chuỗi và trả về số lượng từ trong chuỗi.

// 7. Viết một hàm JavaScript nhận vào một mảng các chuỗi và trả về một mảng mới chỉ
// chứa các chuỗi đã được viết hoa.

// Viết một hàm JavaScript nhận vào một mảng số và trả về mảng mới
// chứa các số đã được sắp xếp theo thứ tự tăng dần.

// Viết một hàm JavaScript nhận vào một số nguyên dương và trả về mảng các số nguyên tố nhỏ hơn số đó.
