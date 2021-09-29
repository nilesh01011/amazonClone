'use strict';

var overlayOne = document.getElementById('overlay'),
  overlayTwo = document.getElementById('overlayTwo'),
  Sidebar = document.getElementById('sidebar'),
  SidebarLeft = document.getElementById('sidebars_left'),
  CrossSign = document.querySelector('#sideBars_nav .close_sidebar'),
  sign_lists = document.getElementById('sign_lists');

function mouseOver() {
  sign_lists.style.display = 'block';
  overlayOne.style.display = 'block';
}

function mouseLeave() {
  sign_lists.style.display = 'none';
  overlayOne.style.display = 'none';
}

function ShowSignWithOverlay() {
  overlayOne.style.cssText = `display: block;
  transition = all 1s ease-in-out;`;
}

function HideSignWithOverlay() {
  overlayOne.style.cssText = ' display:none; transition = all 1s ease-in-out;';
}

Sidebar.addEventListener('click', function () {
  SidebarLeft.style.left = '0px';
  SidebarLeft.style.transition = 'left 0.5s ease-in-out';
  overlayTwo.style.left = '0px';
});

CrossSign.addEventListener('click', function () {
  SidebarLeft.style.left = '-150%';
  SidebarLeft.style.transition = 'left 0.5s ease-in-out';
  overlayTwo.style.left = '-150%';
});

overlayTwo.addEventListener('click', function () {
  SidebarLeft.style.left = '-150%';
  SidebarLeft.style.transition = 'left 0.5s ease-in-out';
  this.style.left = '-150%';
});

// ===========================User Find====================================

let SignOut = document.querySelectorAll('#SignOut'),
  HeaderUserName = document.querySelectorAll('#UserName'),
  SideBarUserName = document.querySelectorAll('#SideBarUser'),
  inspireAmazon = document.querySelectorAll('.inspireAmazon'),
  ChangeFooterContent = document.querySelectorAll('#ChangeFooterContent'),
  UserIsThere = document.querySelectorAll('#UserIsThere'),
  userClicks = document.querySelectorAll('#userClicks');

let GetUserName = localStorage.getItem('UserDetails');

GetUserName = JSON.parse(GetUserName);

if (GetUserName == null) {
  for (let so = 0; so < SignOut.length; so++) {
    SignOut[so].style.display = 'none';
    SignOut[so].innerHTML = '';
  }

  for (let hun = 0; hun < HeaderUserName.length; hun++) {
    HeaderUserName[hun].innerHTML = 'Hello, Sign in';
  }
  for (let sbun = 0; sbun < SideBarUserName.length; sbun++) {
    SideBarUserName[sbun].innerHTML = 'Hello, Sign in';
  }
  for (let ins = 0; ins < inspireAmazon.length; ins++) {
    inspireAmazon[ins].innerHTML = `
  <h2>Inspired by your browsing history</h2>
  <button>
  <a href="./CreateSignPage.html">Sign in to see personalized recommendations</a>
  </button>
  `;
  }
  for (let fs = 0; fs < ChangeFooterContent.length; fs++) {
    ChangeFooterContent[fs].innerHTML = `
    <a href="./CreateSignPage.html">Already a customer? Sign In</a>
    `;
  }
  for (let i = 0; i < UserIsThere.length; i++) {
    UserIsThere[i].style.display = 'block';
  }
  for (let uc = 0; uc < userClicks.length; uc++) {
    userClicks[uc].style.display = 'block';
  }
} else {
  for (let so = 0; so < SignOut.length; so++) {
    SignOut[so].style.display = 'block';
    SignOut[so].innerHTML = `<a style="color:red;" href="#">Sign Out</a>`;
  }
  GetUserName.filter((findData) => {
    findData.Username;

    for (let hun = 0; hun < HeaderUserName.length; hun++) {
      HeaderUserName[hun].innerHTML = ` Hello, ${findData.Username}`;
    }
    for (let sbun = 0; sbun < SideBarUserName.length; sbun++) {
      SideBarUserName[sbun].innerHTML = `Hello, ${findData.Username}`;
    }
    return findData;
  });

  // ===================User Data Is there section End=======================
  for (let ins = 0; ins < inspireAmazon.length; ins++) {
    inspireAmazon[ins].innerHTML = `
    <h2>Shop on the AmazonClone App</h2>
    <button id="SignOutUser">
    <a href="#" id="shopCategoryBtn">Choosing a products to Buy</a>
    </button>
    `;
  }

  for (let fs = 0; fs < ChangeFooterContent.length; fs++) {
    ChangeFooterContent[fs].innerHTML = `
    <a onclick="SignOutFooter()" style="cursor:pointer;" href="#">Sign Out</a>
    `;
  }

  for (let i = 0; i < UserIsThere.length; i++) {
    UserIsThere[i].style.display = 'none';
  }
  for (let uc = 0; uc < userClicks.length; uc++) {
    userClicks[uc].style.display = 'none';
  }
}

let UserSignOutErrors = document.querySelector('#errors_container'),
  SignOutErrors = document.querySelector('#errors_signout'),
  top_cancle = document.querySelector('#top_cancle'),
  dismiss = document.querySelector('#dismiss');

for (let i = 0; i < SignOut.length; i++) {
  SignOut[i].addEventListener('click', () => {
    UserSignOutErrors.style.display = 'block';
    SignOutErrors.classList.add('active');
    top_cancle.addEventListener('click', () => {
      SignOutErrors.classList.remove('active');
      UserSignOutErrors.style.display = 'none';
    });

    dismiss.addEventListener('click', () => {
      SignOutErrors.classList.remove('active');
      UserSignOutErrors.style.display = 'none';
      localStorage.removeItem('UserDetails');
      window.location.reload();
    });
  });
}

function SignOutFooter() {
  UserSignOutErrors.style.display = 'block';
  SignOutErrors.classList.add('active');
  top_cancle.addEventListener('click', () => {
    SignOutErrors.classList.remove('active');
    UserSignOutErrors.style.display = 'none';
  });

  dismiss.addEventListener('click', () => {
    SignOutErrors.classList.remove('active');
    UserSignOutErrors.style.display = 'none';
    localStorage.removeItem('UserDetails');
    window.location.reload();
  });
}
