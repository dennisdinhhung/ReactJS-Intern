var addBtn = document.querySelector(".add-btn");
addBtn.onclick = function (e) {
  e.preventDefault();

  function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    const save = () => {
      localStorage.setItem(key, JSON.stringify(store));
    };

    const storage = {
      get(key) {
        return store[key];
      },
      set(key, value) {
        store[key] = value;
        save();
      },
      remove(key) {
        delete store[key];
        save();
      },
    };

    return storage;
  }

  let listUsers = [];
  let users = Math.random(Math.floor() * 10000);

  let user = createStorage(users);
  var user1 = [
    document.querySelector("#fullname").value,
    document.querySelector("#email").value,
    document.querySelector("#date").value,
    document.querySelector("#phone-number").value,
    document.querySelector("#adress").value,
    document.querySelector("#about").value,
  ];
  user.set("fullname", user1[0]);
  user.set("email", user1[1]);
  user.set("date", user1[2]);
  user.set("phonenumber", user1[3]);
  user.set("adress", user1[4]);
  user.set("about", user1[5]);
  console.log(user.get("fullname"));
  listUsers.push(`<th scope="row">1</th>
          <td>${user.get("fullname")}</td>
          <td>Male</td>
          <td>${user.get("email")}</td>
          <td>${user.get("phonenumber")}</td>
          <td>${user.get("date")}</td>
          <td>${user.get("adress")}</td>
          <td>${user.get("about")}</td>`);
  listUsers.forEach((user) => {
    document.querySelector("#user").innerHTML = user;
  });
  document.querySelector("#fullname").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#phone-number").value = "";
  document.querySelector("#adress").value = "";
  document.querySelector("#about").value = "";
};
