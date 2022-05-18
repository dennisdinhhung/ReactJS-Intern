export default function Validate(product) {
    let error = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    const message = "Vui lòng nhập trường này!";
  
    if (!product.title || product.title.trim() === "") {
      error.title = "Vui lòng nhập tên mặt hàng!" || message;
    }
    if (!product.price || product.price.trim()==="") {
        error.price = "Vui lòng nhập giá tiền" || message;
    }
    if (!product.img || product.img.trim()==="") {
        error.img = "Vui lòng nhập ảnh" || message;
      }
    if (!product.desc || product.desc.trim()==="") {
        error.desc = "Vui lòng nhập mô tả mặt hàng" || message;
      }
    // if (!product.userName || product.desc.trim()==="") {
    //     error.userName = "Vui lòng nhập tên tài khoản" || message;
    //   }
    // if (!product.passWord || product.passWord.trim()==="") {
    //     error.passWord = "Vui lòng nhập mật khẩu" || message;
    //   }
    //   if (!product.name || product.name.trim()==="") {
    //     error.name = "Vui lòng nhập mật khẩu" || message;
    //   }
    return error;
  }