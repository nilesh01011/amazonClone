'use strict';

let NotInputUser = document.querySelectorAll('[disabled="disabled"]');

let getDataUser = localStorage.getItem('UserDetails');
getDataUser = JSON.parse(getDataUser);

let Uname = getDataUser.filter((un) => {
  un.Username;
  let UN = un.Username;
  let username = document.querySelector('#payment_name');
  username.setAttribute('placeholder', `${UN}`);
  return UN;
});

let Unumber = getDataUser.filter((unos) => {
  unos.Usermobile;
  let UNs = unos.Usermobile;
  let usernumber = document.querySelector('#payment_number');
  usernumber.setAttribute('placeholder', `${UNs}`);
  return UNs;
});

let Uemail = getDataUser.filter((ue) => {
  ue.Useremail;
  let UE = ue.Useremail;
  let useremail = document.querySelector('#payment_email');
  useremail.setAttribute('placeholder', `${UE}`);
  return UE;
});

let UserHeading = getDataUser.filter((uh) => {
  uh.Username;
  let UH = uh.Username;
  let username = document.querySelector('#username');
  username.innerHTML = ` ${UH} `;
});

let getProductData = localStorage.getItem('totalCost');
getProductData = JSON.parse(getProductData);

let payment_order_price = (document.querySelector(
  '#price_order'
).innerHTML = `₹${getProductData}`);

let payment_Btn = document.querySelector('#payment_Btn'),
  dismiss = document.querySelector('.dismiss'),
  popup = document.querySelector('.popup'),
  overlays_payment = document.querySelector('#overlays_payment'),
  payment_cvv = document.querySelector('#payment_cvv'),
  payment_expire = document.querySelector('#payment_expire'),
  card_number = document.querySelector('#card_number'),
  card_error = document.querySelector('#card_error'),
  card_error3 = document.querySelector('#card_error3'),
  card_exiper_error = document.querySelector('#card_exiper_error'),
  card_cvv_error = document.querySelector('#card_cvv_error');

payment_Btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    card_number.value == 0 &&
    payment_expire.value == 0 &&
    payment_cvv.value == 0
  ) {
    card_error.style.display = 'block';
    card_exiper_error.style.display = 'block';
    card_cvv_error.style.display = 'block';
    card_number.style.border = '1px solid red';
    payment_cvv.style.border = '1px solid red';
    payment_expire.style.border = '1px solid red';
    card_number.focus();
  } else if (card_number.value == 0 && payment_cvv.value == 0) {
    card_error.style.display = 'block';
    card_exiper_error.style.display = 'none';
    card_cvv_error.style.display = 'block';
    card_number.style.border = '1px solid red';
    payment_cvv.style.border = '1px solid red';
    payment_expire.style.border = '';
    card_number.focus();
  } else if (card_number.value == 0 && payment_expire.value == 0) {
    card_error.style.display = 'block';
    card_exiper_error.style.display = 'block';
    card_cvv_error.style.display = 'none';
    card_number.style.border = '1px solid red';
    payment_expire.style.border = '1px solid red';
    payment_cvv.style.border = '';
    card_number.focus();
  } else if (payment_expire.value == 0 && payment_cvv.value == 0) {
    card_error.style.display = 'none';
    card_exiper_error.style.display = 'block';
    card_cvv_error.style.display = 'block';
    card_number.style.border = '';
    payment_cvv.style.border = '1px solid red';
    payment_expire.style.border = '1px solid red';
    payment_expire.focus();
  } else if (card_number.value == 0) {
    card_number.style.border = '1px solid red';
    card_error.style.display = 'block';
    card_exiper_error.style.display = 'none';
    card_cvv_error.style.display = 'none';
    card_number.focus();
  } else if (payment_expire.value == 0) {
    card_exiper_error.style.display = 'block';
    card_cvv_error.style.display = 'none';
    card_error.style.display = 'none';
    payment_expire.style.border = '1px solid red';
    payment_expire.focus();
  } else if (payment_cvv.value == 0) {
    card_cvv_error.style.display = 'block';
    card_error.style.display = 'none';
    card_exiper_error.style.display = 'none';
    payment_cvv.style.border = '1px solid red';
    payment_cvv.focus();
  } else {
    card_error.style.display = 'none';
    card_exiper_error.style.display = 'none';
    card_cvv_error.style.display = 'none';
    card_number.style.border = '';
    payment_cvv.style.border = '';
    payment_expire.style.border = '';
    popup.classList.add('active');
    overlays_payment.style.display = 'block';
  }
});

dismiss.addEventListener('click', () => {
  popup.classList.remove('active');
  overlays_payment.style.display = 'none';
  setInterval(anim, 700);
});

function anim() {
  window.location = './index.html';
}
