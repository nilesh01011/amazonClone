'use strict';

function backToHome() {
  window.location = './index.html';
}

function PurchaseLocation() {
  window.location = './Purchase.html';
}

let buttonCollapse = document.querySelector(
  '#cart_page .collapse .collapsible'
);
let collapse = document.querySelector('#cart_page .collapse .content');
let DownArrow = document.querySelector(
  '#cart_page .collapse .collapsible .fas.fa-chevron-down'
);
buttonCollapse.addEventListener('click', () => {
  if (collapse.style.display === 'block') {
    collapse.style.display = 'none';
    collapse.classList.remove('active');
    DownArrow.classList.add('fa-chevron-down');
    DownArrow.classList.remove('fa-chevron-up');
  } else {
    collapse.style.display = 'block';
    collapse.classList.add('active');
    DownArrow.classList.add('fa-chevron-up');
    DownArrow.classList.remove('fa-chevron-down');
  }
});

function Empty_Cart() {
  let productContainer = document.querySelector('.cart_section');
  let CartItems = localStorage.getItem('cartNumbers');
  let buyBtn = document.querySelector('[disabled="disabled"]');
  let UserFind = localStorage.getItem('UserDetails');

  if (CartItems == 0 || CartItems == null) {
    buyBtn.setAttribute('disabled', 'disabled');
    buyBtn.addEventListener('click', () => {
      return false;
    });
    productContainer.innerHTML = `
    <div class="empty_cart_image">
      <div class="image">
        <img src="./images/Vision.svg" alt="empty_cart_images" />
      </div>
      <div class="right_side_cart">
        <h2>
        Your AmazonClone Cart is empty <br>
          <a href="./index.html">Shop today’s deals</a> 
        </h2>
        <div class="btn">
            <button onclick="GoToSingUp()" type="button">Sign in to your account</button>
        </div>
      </div>
    </div>
    `;
  } else {
    buyBtn.removeAttribute('disabled', 'disabled');
    buyBtn.addEventListener('click', () => {
      return true;
    });
  }
  if (UserFind == null) {
    buyBtn.addEventListener('click', () => {
      window.location = './CreateSignPage.html';
    });
  } else {
    buyBtn.addEventListener('click', () => {
      window.location = './Purchase.html';
    });
  }
}

Empty_Cart();
