// setTimeout cho phép chương trình bị delay trong một khoảng thời gian
// nhất định và chỉ nó chỉ chỉ một lần duy nhất
// setTimeout(function, time_delay);

// setTimeout(() => {
//   console.log("Logger!!!");
// }, 3000);

// setInterval cho phép chương trình bị delay trong một khoảng thời gian nhất định
// tuy nhiên nó sẽ chạy liên tục
// setInterval(function, time_delay)

// Hàm không có tên thì được gọi là hàm ẩn danh
// const logger = () => {
//   console.log(Math.random());
// };

// setInterval(logger, 1000);

// Xây dựng ứng dụng đồng hồ

const clock = () => {
  let today = new Date();

  let hours = today.getHours().toString().padStart(2, "0");

  let minutes = today.getMinutes().toString().padStart(2, "0");

  let seconds = today.getSeconds().toString().padStart(2, "0");

  // Gắn dữ liệu vào trong DOM
  document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
};

setInterval(clock, 1000);

/**
 * Kiểm tra định dạng email
 * @param {*} email Chuỗi email cần kiểm tra
 * @returns true nếu email đúng định dạng, false nếu email sai định dạng
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

if (!validateEmail("lamxauxi@gmail.com")) {
  console.log("Sai định dạng");
} else {
  console.log("Đúng định dạng.");
}

// Xây dựng hàm kiểm tra các trường nhập vào có để trống không, trừ các giá trị là null, undefined, ""
// thì tất cả các giá trị khác đều thỏa mãn
// checkIsEmpty (field)

/**
 * Kiểm tra các trường có giá trị rỗng
 * @param {*} field trường cần kiểm tra
 * @returns true nếu trường đó bị trống, false nếu trường đó có giá trị
 * Auth: NVQUY(01/12/2023)
 */
const checkIsEmpty = (field) => {
  if (field === undefined || field === null || field === "") {
    return true;
  } else {
    return false;
  }
};

let value = "";

if (checkIsEmpty(value)) {
  console.log("Email không không được để trống");
} else {
  console.log("Gửi dữ liệu");
}

var y = +prompt("Số tiền cần gửi");

const formatMoney = (money) => {
  const moneyFormat = money.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return moneyFormat;
};

console.log(formatMoney(y));
