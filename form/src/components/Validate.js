export default function Validate(obj){
    let error_msg = {};

    if (obj.user_name !== undefined){
        error_msg.user_name = Validate.isRequired(obj.user_name, 'Please enter your name.');
        if (!error_msg.user_name){
            error_msg.user_name = Validate.isName(obj.user_name);
        }
    }

    if (obj.phone_no !== undefined){
        error_msg.phone_no = Validate.isRequired(obj.phone_no, 'Please enter your phone number.');
        if (!error_msg.phone_no){
            error_msg.phone_no = Validate.isPhone(obj.phone_no);
        }
    }

    if(obj.address !== undefined){
        error_msg.address = Validate.isRequired(obj.address, 'Please choose an address.');
    }

    if(obj.email !== undefined){
        error_msg.email = Validate.isRequired(obj.email, 'Please enter your email.');
        if (!error_msg.email){
            error_msg.email = Validate.isEmail(obj.email);
        }
    }

    if(obj.dob !== undefined){
        error_msg.dob = Validate.isRequired(obj.dob, 'Please choose a date of birth.')
        if (!error_msg.dob){
            error_msg.dob = Validate.isDate(obj.dob);
        }
    }

    return error_msg;
}

Validate.isRequired = (value, msg) => {
    return value.trim() !== '' ? null : (msg || 'This is field is empty.')
}

Validate.isName = (value, msg) => {
    const regex = /[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/;
    return regex.test(value) ? null : (msg || "Your name can't have numbers.")
}

Validate.isPhone = (value, msg) => {
    const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return regex.test(value) ? null : (msg || 'Please enter the correct phone number.')
}

Validate.isEmail = (value, msg) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(value) ? null : (msg || 'Please enter the correct email.')
}

Validate.isDate = (value, message) => {
    const regex = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
    return regex.test(value) ? null : (message || 'Vui lòng nhập đúng định dạng ngày');
}