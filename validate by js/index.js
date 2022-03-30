function chekcGmail(gmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(gmail);
}

function save() {
    let fullname = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let number = document.getElementById('number').value;
    let gmail = document.getElementById('gmail').value;
    let address = document.getElementById('address').value;
    let describe = document.getElementById('describe').value;
    let subject = '';
    let gender = '';

    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }

    if (document.getElementById('math').checked) {
        subject = document.getElementById('math').value;
    } else if (document.getElementById('physical').checked) {
        subject = document.getElementById('physical').value;
    } else if (document.getElementById('math').checked && document.getElementById('physical').checked) {
        document.getElementById('subject-error').innerHTML = ""
        subject = ''
    }



    if (fullname.length === 0) {
        fullname = '';
        document.getElementById('name-error').innerHTML = "chua nhap ten";
    } else if (fullname.length <= 5) {
        fullname = '';
        document.getElementById('name-error').innerHTML = "ten qua ngan";
    } else if (fullname.length >= 20) {
        fullname = '';
        document.getElementById('name-error').innerHTML = "ten qua dai";
    } else {
        document.getElementById('name-error').innerHTML = "";
    }

    if (gmail.length === 0) {
        gmail = '';
        document.getElementById('gmail-error').innerHTML = "chua nhap gmail"
    } else if (!chekcGmail(gmail)) {
        gmail = '';
        document.getElementById('gmail-error').innerHTML = "sai dinh dang gmail"
    } else {
        document.getElementById('gmail-error').innerHTML = "";
    }

    if (number.length === 0) {
        number = '';
        document.getElementById('number-error').innerHTML = "nhap sdt"
    } else if (number.trim().length > 10) {
        number = '';
        document.getElementById('number-error').innerHTML = "sdt khong dung"
    } else if (number.trim().length < 9) {
        number = '';
        document.getElementById('number-error').innerHTML = "sdt khong dung"
    }
    else {
        document.getElementById('number-error').innerHTML = "";
    }

    if (!date) {
        date = '';
        document.getElementById('date-error').innerHTML = "chua nhap ngay sinh"
    } else {
        document.getElementById('date-error').innerHTML = "";
    }

    if (!address) {
        address = '';
        document.getElementById('address-error').innerHTML = "nhap dia chi"
    } else {
        document.getElementById('address-error').innerHTML = "";
    }

    if (!describe) {
        describe = '';
        document.getElementById('describe-error').innerHTML = "nhap thong tin"
    } else {
        document.getElementById('describe-error').innerHTML = "";
    }
    if (!gender) {
        gender = '';
        document.getElementById('gender-error').innerHTML = "chon gioi tinh"
    } else {
        document.getElementById('gender-error').innerHTML = "";
    }

    if (!subject) {
        console.log("empty subject");
        subject = '';
        document.getElementById('subject-error').innerHTML = "chon di"
    } else if (document.getElementById('math').checked && document.getElementById('physical').checked) {
        subject = '';
        document.getElementById('subject-error').innerHTML = "chon 1 thoi"
    } else if (document.getElementById('math').checked) {
        document.getElementById('subject-error').innerHTML = ""
    } else if (document.getElementById('physical').checked) {
        document.getElementById('subject-error').innerHTML = ""
    }


    if (fullname && number && gender && date && address && describe && gmail && subject) {
        console.log(fullname, number, gender, date, address, describe);

        let informations = localStorage.getItem('informations') ? JSON.parse(localStorage.getItem('informations')) : [];
        // var newInfor = {
        //     fullname: fullname,
        //     number: number,
        //     gender: gender,
        //     gmail: gmail,
        //     date: date,
        //     address: address,
        //     describe: describe,
        // }
        informations.push({
            fullname: fullname,
            number: number,
            gender: gender,
            gmail: gmail,
            date: date,
            address: address,
            describe: describe,
            subject: subject,
        })
        localStorage.setItem('informations', JSON.stringify(informations));
        this.render();
        document.getElementById('submitt').innerHTML = "Sumit"
        showUpdateInfor()
    }
}

function render() {
    let informations = localStorage.getItem('informations') ? JSON.parse(localStorage.getItem('informations')) : [];

    if (informations.length === 0) {
        document.getElementById('table').style.display = 'none'
        return false
    } else {
        document.getElementById('table').style.display = 'block'

        let tableContent = `
        <tr>
                    <td>STT</td>
                    <td>Fullname</td>
                    <td>Date</td>
                    <td>Number</td>
                    <td>Gmail</td>
                    <td>Address</td>
                    <td>Gender</td>
                    <td>Subject</td>
                    <td>descrise</td>
                    <td>Actions</td>
                </tr>
        `
        informations.map((infor, index) => {
            let indexStudent = index
            index++

            tableContent +=
                `
            <tr>
                    <td>${index}</td>
                    <td>${infor.fullname}</td>
                    <td>${infor.date}</td>
                    <td>${infor.number}</td>
                    <td>${infor.gmail}</td>
                    <td>${infor.address}</td>
                    <td>${infor.gender}</td>
                    <td>${infor.subject}</td>
                    <td>${infor.describe}</td>
                    <td>
                        <a href="#" id="edit" onclick="edit(${indexStudent})">Edit</a> | <a href="#" onclick="deleteInfor(${indexStudent})">Delete</a>
                    </td>
                </tr>
            `
        })
        document.getElementById('table').innerHTML = tableContent
    }
}

function deleteInfor(id) {
    console.log(id);
    let informations = localStorage.getItem('informations') ? JSON.parse(localStorage.getItem('informations')) : [];
    informations.splice(id, 1)
    localStorage.setItem('informations', JSON.stringify(informations));
    render()
}


var currentindexInfor = -1
function edit(id) {
    let informations = localStorage.getItem('informations') ? JSON.parse(localStorage.getItem('informations')) : [];
    let inforId = informations[id]
    currentindexInfor = id
    document.getElementById('name').value = inforId.fullname
    document.getElementById('date').value = inforId.date
    document.getElementById('number').value = inforId.number
    document.getElementById('gmail').value = inforId.gmail
    document.getElementById('address').value = inforId.address
    if (inforId.gender === "male") {
        document.getElementById('male').checked = inforId.gender
    } else {
        document.getElementById('female').checked = inforId.gender
    }
    if (inforId.subject === "math") {
        document.getElementById('math').checked = inforId.subject
    } else {
        document.getElementById('physical').checked = inforId.subject
    }
    document.getElementById('describe').value = inforId.describe
    document.getElementById('submitt').innerHTML = "Update"
    document.getElementById('submitt').setAttribute('onclick', `update(${id})`);
    console.log(id);

}
function update(id) {
    let informations = localStorage.getItem('informations') ? JSON.parse(localStorage.getItem('informations')) : [];


    let fullname = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let number = document.getElementById('number').value;
    let gmail = document.getElementById('gmail').value;
    let address = document.getElementById('address').value;
    let describe = document.getElementById('describe').value;
    let subject = '';
    let gender = '';

    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }

    if (document.getElementById('math').checked) {
        subject = document.getElementById('math').value;
    } else if (document.getElementById('physical').checked) {
        subject = document.getElementById('physical').value;
    } else if (document.getElementById('math').checked && document.getElementById('physical').checked) {
        document.getElementById('subject-error').innerHTML = ""
        subject = ''
    }



    if (fullname.length === 0) {
        fullname = '';
        document.getElementById('name-error').innerHTML = "chua nhap ten";
    } else if (fullname.length <= 5) {
        fullname = '';
        document.getElementById('name-error').innerHTML = "ten qua ngan";
    } else if (fullname.length >= 20) {
        fullname = '';
        document.getElementById('name-error').innerHTML = "ten qua dai";
    } else {
        document.getElementById('name-error').innerHTML = "";
    }

    if (gmail.length === 0) {
        gmail = '';
        document.getElementById('gmail-error').innerHTML = "chua nhap gmail"
    } else if (!chekcGmail(gmail)) {
        gmail = '';
        document.getElementById('gmail-error').innerHTML = "sai dinh dang gmail"
    } else {
        document.getElementById('gmail-error').innerHTML = "";
    }

    if (number.length === 0) {
        number = '';
        document.getElementById('number-error').innerHTML = "nhap sdt"
    } else if (number.trim().length > 10) {
        number = '';
        document.getElementById('number-error').innerHTML = "sdt khong dung"
    } else if (number.trim().length < 9) {
        number = '';
        document.getElementById('number-error').innerHTML = "sdt khong dung"
    }
    else {
        document.getElementById('number-error').innerHTML = "";
    }

    if (!date) {
        date = '';
        document.getElementById('date-error').innerHTML = "chua nhap ngay sinh"
    } else {
        document.getElementById('date-error').innerHTML = "";
    }

    if (!address) {
        address = '';
        document.getElementById('address-error').innerHTML = "nhap dia chi"
    } else {
        document.getElementById('address-error').innerHTML = "";
    }

    if (!describe) {
        describe = '';
        document.getElementById('describe-error').innerHTML = "nhap thong tin"
    } else {
        document.getElementById('describe-error').innerHTML = "";
    }
    if (!gender) {
        gender = '';
        document.getElementById('gender-error').innerHTML = "chon gioi tinh"
    } else {
        document.getElementById('gender-error').innerHTML = "";
    }

    if (!subject) {
        console.log("empty subject");
        subject = '';
        document.getElementById('subject-error').innerHTML = "chon di"
    } else if (document.getElementById('math').checked && document.getElementById('physical').checked) {
        subject = '';
        document.getElementById('subject-error').innerHTML = "chon 1 thoi"
    } else if (document.getElementById('math').checked) {
        document.getElementById('subject-error').innerHTML = ""
    } else if (document.getElementById('physical').checked) {
        document.getElementById('subject-error').innerHTML = ""
    }
    if (fullname && number && gender && date && address && describe && gmail && subject) {
        informations[id] = {
            fullname: fullname,
            number: number,
            gender: gender,
            gmail: gmail,
            date: date,
            address: address,
            describe: describe,
            subject: subject,
        }
        console.log(informations);
        let tableContent = `
        <tr>
                    <td>STT</td>
                    <td>Fullname</td>
                    <td>Date</td>
                    <td>Number</td>
                    <td>Gmail</td>
                    <td>Address</td>
                    <td>Gender</td>
                    <td>Subject</td>
                    <td>descrise</td>
                    <td>Actions</td>
                </tr>
        `
        informations.map((infor, index) => {
            let indexStudent = index
            index++

            tableContent +=
                `
            <tr>
                    <td>${index}</td>
                    <td>${infor.fullname}</td>
                    <td>${infor.date}</td>
                    <td>${infor.number}</td>
                    <td>${infor.gmail}</td>
                    <td>${infor.address}</td>
                    <td>${infor.gender}</td>
                    <td>${infor.subject}</td>
                    <td>${infor.describe}</td>
                    <td>
                        <a href="#" id="edit" onclick="edit(${indexStudent})">Edit</a> | <a href="#" onclick="deleteInfor(${indexStudent})">Delete</a>
                    </td>
                </tr>
            `
        })
        document.getElementById('table').innerHTML = tableContent
        document.getElementById('submitt').innerHTML = "Submit"
        showUpdateInfor()
        return
    }
}
function showUpdateInfor() {
    document.getElementById('name').value = ''
    document.getElementById('date').value = ''
    document.getElementById('number').value = ''
    document.getElementById('gmail').value = ''
    document.getElementById('address').value = ''
    document.getElementById('describe').value = ''
    document.getElementById('male').checked = ''
    document.getElementById('female').checked = ''
    document.getElementById('math').checked = ''
    document.getElementById('physical').checked = ''
    console.log("da vao show");
}




