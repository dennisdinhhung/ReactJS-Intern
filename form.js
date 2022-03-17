var form = document.querySelector('.form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let user_name = document.querySelector('.input-name').value;
    let phone_no = document.querySelector('.input-phone').value;
    let address = document.querySelector('.address').value;

    /* Fix this logic*/
    let gender = document.querySelector('input[name="radio"]:checked').value;
    console.log(gender);


    let email = document.querySelector('.input-email').value;
    let dob = document.querySelector('.dob').value;
    
    /* also fix this */
    let checkbox = document.querySelector('.checkbox').value;

    let desc = document.querySelector('.input-desc').value;
})