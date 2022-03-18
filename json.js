// list nguoi dung
const usersElement = document.querySelector("tbody");
// bang thong tin
const tableElement = document.querySelector(".table");
// toan bo form
const formElement = document.querySelector(".form");
// button submit
const addBtn = document.querySelector(".form-submit");
const editBtn = document.getElementById("btn-update");

var userApi = "http://localhost:3000/user";
// Hàm bắt đầu khởi tạo dl
function start() {
  getUsers(renderUsers);
}
start();

// Lấy user từ API
function getUsers(callback) {
  fetch(userApi)
    .then((respone) => respone.json())
    .then(callback);
}

// Tạo user mới
function creatUser(data, callback) {
  let options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(userApi, options)
    .then((respone) => respone.json())
    .then(callback);
}

// Sự kiện onclick edit
function handleEdit(id) {
  addBtn.classList.add("btn-inactive");
  addBtn.classList.remove("btn-active");
  editBtn.classList.add("btn-active");
  editBtn.classList.remove("btn-inactive");
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(userApi + "/" + id, options)
    .then((respone) => respone.json())
    .then(showUser);
}

function updateUser(data) {
  let options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(userApi + "/" + currentId, options)
    .then((respone) => respone.json())
    .then(getUsers);
}

//xóa thông tin
function handleDeleteUser(id) {
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(userApi + "/" + id, options)
    .then((respone) => respone.json())
    .then(function (id) {
      let userItem = document.querySelector(".user-" + id);
      if (userItem) {
        userItem.remove();
      }
    });
}

// Hàm render user vào list user trong API
function renderUsers(users) {
  let htmls = users.map((user, index) => {
    return `<tr class="user-${user.id}">
                      <td>${index}</td>
                      <td>${user.userName}</td>
                      <td>${user.gender}</td>
                      <td>${user.email}</td>
                      <td>${user.phone}</td>
                      <td>${user.date}</td>
                      <td>${user.address}</td>
                      <td>${user.about}</td>
                      <td>
                          <button onclick="handleEdit(${user.id})">Edit</button>
                           | 
                          <button onclick="handleDeleteUser(${user.id})">Delete</button>
                      </td>
                  </tr>`;
  });
  //   Nối các mảng user lại với nhau
  usersElement.innerHTML = htmls.join("");
}

// Thêm user vào bảng
function handleAddUser() {
  addBtn.onclick = function (e) {
    e.preventDefault();
    let userName = document.getElementById("fullname").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let date = document.getElementById("date").value;
    let phone = document.getElementById("phone-number").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let about = document.getElementById("about").value;
    let formData = {
      userName: userName,
      gender: gender,
      date: date,
      phone: phone,
      email: email,
      address: address,
      about: about,
    };

    creatUser(formData, function () {
      getUsers(renderUsers);
    });
  };
}

// Update user
editBtn.onclick = function (e) {
  //   alert("gg");
  e.preventDefault();
  let userName = document.getElementById("fullname").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let date = document.getElementById("date").value;
  let phone = document.getElementById("phone-number").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let about = document.getElementById("about").value;
  let formData = {
    userName: userName,
    gender: gender,
    date: date,
    phone: phone,
    email: email,
    address: address,
    about: about,
  };

  updateUser(formData);
};

let currentId;
function showUser(user) {
  currentId = user.id;
  document.getElementById("fullname").value = user.userName;
  if (user.gender === "Male") {
    document.querySelector('input[id="male"]').checked = true;
  } else {
    document.querySelector('input[id="female"]').checked = true;
  }
  document.getElementById("date").value = user.date;
  document.getElementById("phone-number").value = user.phone;
  document.getElementById("email").value = user.email;
  document.getElementById("address").value = user.address;
  document.getElementById("about").value = user.about;
}
