export default function ValidateUser(product) {
    let error = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    const message = "Vui lòng nhập trường này!";
  
   
    if (!product.userName || product.desc.trim()==="") {
        error.userName = "Vui lòng nhập tên tài khoản" || message;
      }
    if (!product.passWord || product.passWord.trim()==="") {
        error.passWord = "Vui lòng nhập mật khẩu" || message;
      }
      if (!product.name || product.name.trim()==="") {
        error.name = "Vui lòng nhập mật khẩu" || message;
      }
    return error;
  }