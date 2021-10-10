'use strict';

var overlayOne = document.getElementById('overlay'),
  overlayTwo = document.getElementById('overlayTwo'),
  Sidebar = document.getElementById('sidebar'),
  SidebarLeft = document.getElementById('sidebars_left'),
  CrossSign = document.querySelector('#sideBars_nav .close_sidebar'),
  sign_lists = document.getElementById('sign_lists'),
  SideBarHeader = document.querySelector('.sidebar_header');

SideBarHeader.addEventListener('click', () => {
  window.location = './SignPage.html';
});

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
   <a href="./index.html">Continue shopping</a>
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
  dismiss = document.querySelector('#dismiss'),
  bottom_cancle = document.querySelector('#bottom_cancle');


for (let i = 0; i < SignOut.length; i++) {
  SignOut[i].addEventListener('click', () => {
    UserSignOutErrors.style.display = 'block';
    SignOutErrors.classList.add('active');
    top_cancle.addEventListener('click', () => {
      SignOutErrors.classList.remove('active');
      UserSignOutErrors.style.display = 'none';
    });
    
     bottom_cancle.addEventListener('click', () => {
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
  
   bottom_cancle.addEventListener('click', () => {
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

// =======================================================
let SearchBtn = document.querySelector('.input_content .search_icons button'),
  Input_Search = document.querySelector('#input_fill');

SearchBtn.addEventListener('click', () => {
  if (
    Input_Search.value == 'computer' ||
    Input_Search.value == 'pc part' ||
    Input_Search.value == 'pc' ||
    Input_Search.value == 'laptop' ||
    Input_Search.value == 'laptops' ||
    Input_Search.value == 'Motherboard' ||
    Input_Search.value == 'motherboard' ||
    Input_Search.value == 'ASUS ROG Strix' ||
    Input_Search.value == 'asus rog strix' ||
    Input_Search.value == 'Asus Rog strix' ||
    Input_Search.value == 'Asus Motherboard' ||
    Input_Search.value == 'asus motherboard' ||
    Input_Search.value == 'cpu' ||
    Input_Search.value == 'CPU' ||
    Input_Search.value == 'AMD CPU' ||
    Input_Search.value == 'amd cpu' ||
    Input_Search.value == 'Crucial' ||
    Input_Search.value == 'crucial' ||
    Input_Search.value == 'ram' ||
    Input_Search.value == 'Ram'
  ) {
    ComputPartPage.classList.add('is_active');

    oculusPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'gym part' ||
    Input_Search.value == 'gym' ||
    Input_Search.value == 'Gym' ||
    Input_Search.value == 'gym product' ||
    Input_Search.value == 'fit at home' ||
    Input_Search.value == 'resistance band' ||
    Input_Search.value == 'Resistance Band ' ||
    Input_Search.value == 'Resistance' ||
    Input_Search.value == 'Waist Belt' ||
    Input_Search.value == 'waist belt' ||
    Input_Search.value == 'belt' ||
    Input_Search.value == 'Pedal Exerciser' ||
    Input_Search.value == 'pedal exerciser' ||
    Input_Search.value == 'exercise at home'
  ) {
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.add('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'video game' ||
    Input_Search.value == 'baby bag' ||
    Input_Search.value == 'Education' ||
    Input_Search.value == 'today deals' ||
    Input_Search.value == 'today deal'
  ) {
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    shopCategoryPage.classList.add('is_active');
    amazonBasicsPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'Refrigerator' ||
    Input_Search.value == 'Amazon Basics' ||
    Input_Search.value == 'Purifier' ||
    Input_Search.value == 'Microwave ' ||
    Input_Search.value == 'Water Purifier' ||
    Input_Search.value == 'water purifier'
  ) {
    amazonBasicsPage.classList.add('is_active');

    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'OculusPro' ||
    Input_Search.value == 'Oculus' ||
    Input_Search.value == 'oculus' ||
    Input_Search.value == 'oculus pro' ||
    Input_Search.value == 'oculus pro headset'
  ) {
    oculusPage.classList.add('is_active');

    amazonBasicsPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'gaming accessories' ||
    Input_Search.value == 'Gaming Accessories' ||
    Input_Search.value == 'gaming headset' ||
    Input_Search.value == 'Gaming Headset' ||
    Input_Search.value == 'gaming keybord' ||
    Input_Search.value == 'Gaming Keybord' ||
    Input_Search.value == 'Gaming Mouse' ||
    Input_Search.value == 'gaming mouse' ||
    Input_Search.value == 'gaming chair' ||
    Input_Search.value == 'chair'
  ) {
    GamingAccPage.classList.add('is_active');

    oculusPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'tv' ||
    Input_Search.value == 'TV' ||
    Input_Search.value == 'oneplus tv' ||
    Input_Search.value == 'OnePlus TV' ||
    Input_Search.value == 'Philips TV' ||
    Input_Search.value == 'philips tv'
  ) {
    FindTvPage.classList.add('is_active');

    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'Beauty Care' ||
    Input_Search.value == 'beauty care' ||
    Input_Search.value == 'Beauty Products' ||
    Input_Search.value == 'beauty products' ||
    Input_Search.value == 'Makeup'
  ) {
    TopBeautyPage.classList.add('is_active');

    FindTvPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'toys' ||
    Input_Search.value == 'kids toys' ||
    Input_Search.value == 'Kids Toys'
  ) {
    FavToysPage.classList.add('is_active');

    TopBeautyPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'laptop table' ||
    Input_Search.value == 'Laptop Table' ||
    Input_Search.value == 'Study Table' ||
    Input_Search.value == 'study table'
  ) {
    LaptopTablePage.classList.add('is_active');

    FavToysPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'mens wear' ||
    Input_Search.value == 'Joggers' ||
    Input_Search.value == 'joggers' ||
    Input_Search.value == 'Sweart shirt' ||
    Input_Search.value == 'Sweart Shirt' ||
    Input_Search.value == 'Shirt' ||
    Input_Search.value == 'shirt' ||
    Input_Search.value == 't-shirt' ||
    Input_Search.value == 'T-shirt' ||
    Input_Search.value == 'sweart shirt'
  ) {
    ComfyPage.classList.add('is_active');

    LaptopTablePage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'home bedding' ||
    Input_Search.value == 'home furniture' ||
    Input_Search.value == 'Home Furniture' ||
    Input_Search.value == 'Home Furnishings' ||
    Input_Search.value == 'home furnishing' ||
    Input_Search.value == 'home furnishings' ||
    Input_Search.value == 'Bedsheet' ||
    Input_Search.value == 'bedsheet'
  ) {
    HomeExplPage.classList.add('is_active');

    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'hats' ||
    Input_Search.value == 'Hats' ||
    Input_Search.value == 'Mugs' ||
    Input_Search.value == 'mugs' ||
    Input_Search.value == 'Action Figure' ||
    Input_Search.value == 'action figure'
  ) {
    GamingMerchPage.classList.add('is_active');

    HomeExplPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  } else if (
    Input_Search.value == 'animals toys' ||
    Input_Search.value == 'kids animal toys'
  ) {
    AnimalToyPage.classList.add('is_active');

    GamingMerchPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    SidebarLeft2.style.left = '-150%';
    SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
    overlayTwo2.style.left = '-150%';
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
  } else {
    console.log('not show in product list');
  }
});
