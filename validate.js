function validator(options){
    let selectorRules = {};

    function validate(inputElement, rule){
        const errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        let errorMessage = '';
        
        const testOfSelector = selectorRules[rule.selector];

        for (let i = 0; i < testOfSelector.length; i++){
            errorMessage = testOfSelector[i](inputElement.value);
            if (errorMessage) break;
        }

        if(errorMessage){
            errorElement.innerHTML = errorMessage;
            console.log(inputElement.parentElement);
            // inputElement.parentElement.classlist.add('error');
            return 'error';
        }
        else{
            errorElement.innerHTML = '';
            // inputElement.parentElement.classlist.remove('error');
            return 'no error';
        }

    }

    const formElement = document.querySelector(options.form);

    if (formElement){
        formElement.onsubmit = (e) => {
            e.preventDefault();

            let isFormValid = true;

            options.rules.forEach(rule => {
                const inputElement = formElement.querySelector(rule.selector);
                if (validate(inputElement,rule) === 'error'){
                    isFormValid = false;
                }
            });

            if (isFormValid){
                submitForm();
            }
        }

        options.rules.forEach((rule) => {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            const inputElement = formElement.querySelector(rule.selector);
            const errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            if (inputElement) {
                inputElement.onblur = () => {
                    validate(inputElement, rule, errorElement);
                }

                // Xử lí mỗi khi người dùng nhập vào input
                inputElement.oninput = () => {
                    errorElement.innerHTML = '';
                    inputElement.parentElement.classList.remove('error');
                }
            }
        });
    }
}

validator.isRequired = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? undefined : (message || 'Fill in this field');
        }
    }
}

validator.isEmail = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : (message || 'Fill in the correct email');
        }
    }
}

validator.minLength = (selector, min, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value.length >= min ? undefined : (message || `Please input a minimum of ${min} characters`);
        }
    }
}

validator.isConfirmed = (selector, getConfirmedValue, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value === getConfirmedValue() ? undefined : (message || 'Input data incorrect');
        }
    }
}

validator.isDate = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            const regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
            return regex.test(value) ? undefined : (message || 'Please choose a correct date of birth');
        }
    }
}

validator.isPhoneNumber = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            return regex.test(value) ? undefined : (message || 'Fill in the phone number');
        }
    }
}