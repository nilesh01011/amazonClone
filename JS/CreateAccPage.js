'use strict';

let SubmitBtn = document.querySelector('#SubmitBtn');

SubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let name, email, mobile, password;

  name = document.getElementById('input_name');
  email = document.getElementById('input_email');
  mobile = document.getElementById('input_number');
  password = document.getElementById('input_password');

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem('UserDetails'))
    ? JSON.parse(localStorage.getItem('UserDetails'))
    : [];

  let Userpassword_error = document.querySelector('#Userpassword_error'),
    Usernumber_error = document.querySelector('#Usernumber_error'),
    Username_error = document.querySelector('#Username_error');

  if (
    name.value == 0 &&
    email.value == 0 &&
    mobile.value == 0 &&
    password.value == 0
  ) {
    Userpassword_error.style.display = 'block';
    Usernumber_error.style.display = 'block';
    Username_error.style.display = 'block';
    name.style.border = '1px solid red';
    mobile.style.border = '1px solid red';
    password.style.border = '1px solid red';
    name.focus();
  } else if (mobile.value == 0 && password.value == 0) {
    Userpassword_error.style.display = 'block';
    Usernumber_error.style.display = 'block';
    Username_error.style.display = 'none';
    name.style.border = '';
    mobile.style.border = '1px solid red';
    password.style.border = '1px solid red';
    mobile.focus();
  } else if (name.value == 0 && password.value == 0) {
    Userpassword_error.style.display = 'block';
    Usernumber_error.style.display = 'none';
    Username_error.style.display = 'block';
    name.style.border = '1px solid red';

    mobile.style.border = '';
    password.style.border = '1px solid red';
    mobile.focus();
  } else if (name.value == 0 && mobile.value == 0) {
    Userpassword_error.style.display = 'none';
    Usernumber_error.style.display = 'block';
    Username_error.style.display = 'block';
    name.style.border = '1px solid red';
    mobile.style.border = '1px solid red';
    password.style.border = '';
    name.focus();
  } else if (name.value == 0) {
    name.focus();
    name.style.border = '1px solid red';
    mobile.style.border = '';
    password.style.border = '';
    Userpassword_error.style.display = 'none';
    Usernumber_error.style.display = 'none';
    Username_error.style.display = 'block';
  } else if (mobile.value == 0) {
    mobile.focus();
    mobile.style.border = '1px solid red';
    name.style.border = '';
    password.style.border = '';
    Userpassword_error.style.display = 'none';
    Usernumber_error.style.display = 'block';
    Username_error.style.display = 'none';
  } else if (password.value == 0) {
    password.focus();
    password.style.border = '1px solid red';
    name.style.border = '';
    mobile.style.border = '';
    Userpassword_error.style.display = 'block';
    Usernumber_error.style.display = 'none';
    Username_error.style.display = 'none';
  } else if (
    user_records.some((notSame) => {
      return notSame.Username == email;
    }) ||
    user_records.some((notSame) => {
      return notSame.Usermobile == mobile;
    })
  ) {
    alert('Duplicate data not allowed');
  } else {
    user_records.push({
      Username: name.value,
      Useremail: email.value,
      Usermobile: mobile.value,
      Userpassword: password.value,
    });

    window.location = './index.html';
  }

  localStorage.setItem('UserDetails', JSON.stringify(user_records));
});
