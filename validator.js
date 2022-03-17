function Validator(options) {
  function valdidate(inputElement, rule) {
    var errorMessage = rule.test(inputElement.value);
    var errorElement =
      inputElement.parentElement.querySelector(".form-message");

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }
  // lấy element của form cần valdidate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = document.querySelector(rule.selector);
      if (inputElement) {
        //   blur khoi input
        inputElement.onblur = function () {
          valdidate(inputElement, rule);
        };

        // xu ly khi nhap input
        inputElement.oninput = function () {
          console.log("alo");
          inputElement.parentElement.querySelector(".form-message");
          inputElement.parentElement.querySelector(".form-message").innerText =
            "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập vào trường này!";
    },
  };
};
// Validator.isGender = function (selector) {
//   return {
//     selector: selector,
//     test: function (value) {},
//   };
// };
Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Email chưa chính xác!";
    },
  };
};
Validator.isNumber = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return Number(value) ? undefined : "Vui lòng nhập số điện thoại!";
    },
  };
};
Validator.isDate = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : "Vui lòng chọn ngày sinh!";
    },
  };
};
Validator.isAdd = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập vào trường này!";
    },
  };
};
