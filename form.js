var form = document.querySelector('.form');
const table = document.querySelector('.table');
const tableBody = document.querySelector('tbody');
const submitBtn = document.querySelector('#submit');
const updateBtn = document.querySelector('#update');

class User{
    constructor(id, user_name, phone_no, address, radio, email, dob, checkedValue, desc) {
        this.id = id;
        this.user_name = user_name;
        this.phone_no = phone_no;
        this.address = address;
        this.radio = radio;
        this.email = email;
        this.dob = dob;
        this.checkedValue = checkedValue;
        this.desc = desc;
    }
}

const getUserById = (id) => {
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i].id == id) return listUser[i];
    }
    return null;
}

let listUser = []
let id = 0;

if (localStorage.getItem('listUser') != null) {
    listUser = JSON.parse(localStorage.getItem('listUser'));
}

const submitForm = (e) => {
    let user_name = document.querySelector('.input-name').value;
    let phone_no = document.querySelector('.input-phone').value;
    let address = document.querySelector('.address').value;
    let radio = document.querySelector('input[name="radio"]:checked').value;
    let email = document.querySelector('.input-email').value;
    let dob = document.querySelector('.dob').value;

    /* get all checked checkbox */
    let checkbox = document.querySelectorAll('input[name="checkbox"]');
    let checkedValue = [];
    for (let i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked){
            checkedValue.push(checkbox[i].value);
        }
    }

    let desc = document.querySelector('.input-desc').value;

    id = listUser[listUser.length-1].id + 1;

    // make new user
    let user = new User(id, user_name, phone_no, address, radio, email, dob, checkedValue, desc);
    listUser.push(user);
    console.log(listUser);
    
    // render the row
    renderRow(listUser);
    console.log(user.id);
    location.reload();
}

const renderRow = (listUser) => {
    let rowHTML = listUser.reduce((output, user) => {
        return output +
        `<tr>
            <td>${user.id}</td>
            <td>${user.user_name}</td>
            <td>${user.phone_no}</td>
            <td>${user.address}</td>
            <td>${user.radio}</td>
            <td>${user.email}</td>
            <td>${user.dob}</td>
            <td>${user.checkedValue}</td>
            <td>${user.desc}</td>
            <td>
                <button id="edit-button-${user.id}">Edit</button>
                &nbsp;&nbsp;
                <button id="delete-button-${user.id}">Delete</button>
            </td>
        </tr>`
    }, '');

    tableBody.innerHTML = rowHTML;
    localStorage.setItem('listUser', JSON.stringify(listUser));
}

renderRow(listUser);

// TODO: edit button and func

for (let i = 0; i < listUser.length; i++){
    let user = listUser[i];
    let editBtn = document.getElementById(`edit-button-${user.id}`);
    let deleteBtn = document.getElementById(`delete-button-${user.id}`);

    // when the edit button is clicked
    editBtn.onclick = (e) => {
        e.preventDefault();
        
        document.querySelector('.id').value = user.id;
        document.querySelector('.input-name').value = user.user_name;
        document.querySelector('.input-phone').value = user.phone_no;
        document.querySelector('.address').value = user.address;

        if (user.radio === 'male') {
            document.querySelector('input[id="male"]').checked = true;
        } else {
            document.querySelector('input[id="female"]').checked = true;
        }

        document.querySelector('.input-email').value = user.email;
        document.querySelector('.dob').value = user.dob;
        document.querySelector('.input-desc').value = user.desc;
        
        let checkboxHTML = document.querySelectorAll('input[name=checkbox]');
        for (let i = 0; i < user.checkedValue.length; i++){
            if (user.checkedValue.includes(checkboxHTML[i].value)){
                checkboxHTML[i].checked = true;
            }
            else{
                checkboxHTML[i].checked = false;
            }
        }

        //change the class type of the buttons
            //change submit to disabled
        submitBtn.classList.add('disabled');
        submitBtn.classList.remove('avail');
            //change update to avail
        updateBtn.classList.add('avail');
        updateBtn.classList.remove('disabled');
    }

    deleteBtn.onclick = (e) => {
        e. preventDefault();

        listUser.splice(listUser.indexOf(user), 1);

        renderRow(listUser);
        location.reload();
    }
}

updateBtn.onclick = (e) => {
    e.preventDefault();

    let id = document.querySelector('.id').value;
    let user_name = document.querySelector('.input-name').value;
    console.log(user_name);
    let phone_no = document.querySelector('.input-phone').value;
    let address = document.querySelector('.address').value;
    let radio = document.querySelector('input[name="radio"]:checked').value;
    let email = document.querySelector('.input-email').value;
    let dob = document.querySelector('.dob').value;

    /* get all checked checkbox */
    let checkbox = document.querySelectorAll('input[name="checkbox"]');
    let checkedValue = [];
    for (let i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked){
            checkedValue.push(checkbox[i].value);
        }
    }

    let desc = document.querySelector('.input-desc').value;

    // find the user that is being updated
    let updateUser = getUserById(id);

    // update the info of the updateUser
    updateUser.user_name = user_name;
    updateUser.phone_no = phone_no;
    updateUser.address = address;
    updateUser.radio = radio;
    updateUser.email = email;
    updateUser.dob = dob;
    updateUser.checkedValue = checkedValue;
    updateUser.desc = desc;
    
    // find the index of the updating user
    let index = listUser.indexOf(updateUser);
    // let the OG user = updateUser
    listUser[index] = updateUser;

    // render the row
    renderRow(listUser);

    //change the buttons
    submitBtn.classList.add('btn-active');
    submitBtn.classList.remove('btn-inactive');
    updateBtn.classList.add('btn-inactive');
    updateBtn.classList.remove('btn-active');
    location.reload();
}

// const setError = (element, msg) => {
//     const parentElement = element.parentElement;
//     const errorDisplay = parentElement.querySelector('.validate-msg');

//     errorDisplay.innerHTML = msg;
//     parentElement.classList.add('error');
// }


// validate function
// const validateInput = () => {
//     const user_nameVali = user_name;
//     const phone_noVali = phone_no;
//     const addressVali = address;
//     const radioVali = radio;
//     const emailVail = email;
//     const dobVali = dob;
//     const checkedValueVali = checkedValue;
//     const descVali = desc;
    
//     if(user_nameVali == ''){
//         setError(user_name)
//     }
// }