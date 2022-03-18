const userElement = document.querySelector("#user");
const tableElement = document.querySelector(".table");
const formElement = document.querySelector(".form");
const addBtn = document.querySelector(".form-submit");

class User {
  constructor(id, userName, gender, date, phone, email, address, about, save) {
    this.id = id;
    this.userName = userName;
    this.gender = gender;
    this.date = date;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.about = about;
    this.save = save;
  }
}

let listUsers = [];
// console.log(localStorage.getItem('listUsers'))
if (localStorage.getItem("listUsers") != null) {
  listUsers = JSON.parse(localStorage.getItem("listUsers"));
}

const hadId = (id) => {
  return listUsers.some((user) => user.id === id);
};
// update
const getUserById = (id) => {
  for (let i = 0; i < listUsers.length; i++) {
    if (listUsers[i].id == id) return listUsers[i];
  }
  return null;
};

const renderUI = (listUsers) => {
  let usersHTML = listUsers.reduce((output, user) => {
    console.log(output);
    return (
      output +
      `<tr>
                <td>${user.id}</td>
                <td>${user.userName}</td>
                <td>${user.gender}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.date}</td>
                <td>${user.address}</td>
                <td>${user.about}</td>
                <td>
                    <a href=""  id="edit-button-${user.id}">Edit</a>
                     | 
                    <a href=""  id="delete-button-${user.id}">Delete</a>
                </td>
            </tr>`
    );
  }, "");

  userElement.innerHTML = usersHTML;

  // Save to localStorage
  localStorage.setItem("listUsers", JSON.stringify(listUsers));
};

renderUI(listUsers);

// Handle submit form
const submitForm = () => {
  // Get value from form
  let userName = document.getElementById("fullname").value;
  let gender = document.querySelector('input[name="gender"]').value;
  let date = document.getElementById("date").value;
  let phone = document.getElementById("phone-number").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let about = document.getElementById("about").value;

  // Random id
  const id = Math.floor(Math.random() * 10000);
  while (hadId(id)) {
    id = Math.floor(Math.random() * 10000);
  }

  // Init new user
  let user = new User(
    id,
    userName,
    gender,
    date,
    phone,
    email,
    address,
    about,
    save
  );
  listUsers.push(user);

  // Re-render UI
  renderUI(listUsers);
  location.reload();
};

// Add event for edit and delete
for (let i = 0; i < listUsers.length; i++) {
  let user = listUsers[i];
  let editButtonElement = document.getElementById(`edit-button-${user.id}`);
  let deleteButtonElement = document.getElementById(`delete-button-${user.id}`);

  // Add event for edit button
  editButtonElement.onclick = (e) => {
    e.preventDefault();
    document.getElementById("id").value = user.id;
    document.getElementById("name").value = user.userName;
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
    let inputCheckboxElements = document.querySelectorAll(
      'input[name="checkbox"]'
    );
    let checkedValue = user.save;
    if (checkedValue.includes(inputCheckboxElements.value)) {
      inputCheckboxElements[i].checked = true;
    } else {
      inputCheckboxElements[i].checked = false;
    }
    addBtn.classList.add("btn-inactive");
    addBtn.classList.remove("btn-active");
    addBtn.classList.add("btn-active");
    addBtn.classList.remove("btn-inactive");
  };

  // Add event for delete button
  deleteButtonElement.onclick = (e) => {
    e.preventDefault();
    listUsers.splice(listUsers.indexOf(user), 1);

    renderUI(listUsers);
    location.reload();
  };
}

// Add event for update button
addBtn.onclick = (e) => {
  e.preventDefault();

  // Get value from form
  let id = document.getElementById("id").value;
  let userName = document.getElementById("fullname").value;
  let gender = document.querySelector('input[name="gender"]').value;
  let date = document.getElementById("date").value;
  let phone = document.getElementById("phone-number").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let about = document.getElementById("about").value;
  let checkedValue = "";
  let inputCheckboxElements = document.querySelectorAll(
    'input[name="checkbox"]'
  );
  if (inputCheckboxElements.checked) {
    checkedValue = inputCheckboxElements.value;
  }

  let user = getUserById(id);
  // console.log(user);
  if (user === null) return;
  user.userName = userName;
  user.gender = gender;
  user.date = date;
  user.phone = phone;
  user.email = email;
  user.address = address;
  user.about = about;
  user.save = checkedValue;

  let index = listUsers.indexOf(user);
  listUsers[index] = user;

  renderUI(listUsers);
  addBtn.classList.add("btn-active");
  addBtn.classList.remove("btn-inactive");
  addBtn.classList.add("btn-inactive");
  addBtn.classList.remove("btn-active");
  location.reload();
};
