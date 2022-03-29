export default function Validate(user) {
  let error = {};
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  const message = "Vui lòng nhập trường này!";

  if (!user.userName || user.userName.trim() === "") {
    error.userName = "Vui lòng nhập tên!" || message;
  }
  if (!user.email) {
    error.email = "Vui lòng nhập email!" || message;
  } else if (!user.email.match(emailRegex)) {
    error.email = "Vui lòng nhập đúng định dạng!" || message;
  }
  if (!user.phoneNumber) {
    error.phoneNumber = "Vui lòng nhập số điện thoại!" || message;
  } else if (!user.phoneNumber.match(phoneRegex)) {
    error.phoneNumber = "Vui lòng nhập đúng định dạng!" || message;
  }
  if (!user.date) {
    error.date = "Vui lòng nhập ngày sinh!" || message;
  }
  if (!user.address) {
    error.address = "Vui lòng nhập địa chỉ!" || message;
  }
  return error;
}
