// Đối tượng Date => Phải sử dụng từ khóa new để tạo đối tượng

// 1. Lấy ra thời gian hiện tại trên máy
let today = new Date();
console.log(today);

// Lấy ra ngày, tháng, năm, giờ, phút, giây, mili giây
let day = today.getDate();
console.log("Ngày: ", day);

let month = today.getMonth() + 1;
console.log("Tháng: ", month);

let year = today.getFullYear();
console.log("Năm: ", year);

let hours = today.getHours();
console.log("Giờ: ", hours);

let minutes = today.getMinutes();
console.log("Phút: ", minutes);

let seconds = today.getSeconds();
console.log("Giây: ", seconds);

let miliSeconds = today.getMilliseconds();
console.log("Mili giây: ", miliSeconds);

// Định dạng chuỗi thời gian
// 1. Định dạng kiểu ngày/tháng/năm
let formatDMY = `${day}/${month}/${year}`;
console.log("Định dạng ngày/tháng/năm: ", formatDMY);
// 2. Định dạng kiểu năm/tháng/ngày
let formatYMD = `${year}/${month}/${day}`;
console.log("Định dạng năm/tháng/ngày: ", formatYMD);

// Viết hàm format thời gian dựa vào một chuỗi thời gian đã cho
// 11/10/2023 8:06:13 SA

let time = "Fri Dec 01 2023 08:57:28 GMT+0700 (Giờ Đông Dương)";

/**
 * Format định dạng thời gian: ngày/tháng/năm
 * @param {*} timeString Chuỗi thời gian cần định dạng
 * @returns Chuỗi định dạng ngày/tháng/năm
 * Auth: NVQUY(01/12/2023)
 */
const formatDate = (timeString) => {
  // Lấy ra thời gian hiện tại bằng đối tượng new Date() và truyền vào nó chuỗi thời gian cần format
  let today = new Date(timeString);

  // Lấy ra ngày của chuỗi cần định dạng
  let day = today.getDate();
  if (day > 0 && day < 10) {
    day = `0${day}`;
  }

  // lấy ra tháng của chuỗi cần định dạng
  let month = today.getMonth() + 1;
  if (month > 0 && month < 10) {
    month = `0${month}`;
  }

  // Lấy ra năm của chuỗi cần định dạng
  let year = today.getFullYear();

  // Trả ra chuỗi định dạng
  return `${day}/${month}/${year}`;
};

console.log(formatDate(time));

// Chuyển đổi thời gian hiện tại theo quy chuẩn ISOS và cắt chuỗi theo định dạng năm/tháng/ngày
let formatToLocal = new Date().toISOString().split("T")[0];
console.log("formatToLocal: ", formatToLocal);
