'use strict';

let Unavailable = document.querySelectorAll('#Unavailable');

for (let a = 0; a < Unavailable.length; a++) {
  Unavailable[a].addEventListener('click', () => {
    alert('Sorry this products is Unavailable');
  });
}

let cart = document.getElementById('cart');

cart.addEventListener('click', () => {
  window.location = './CartPage.html';
});

let home_page = document.getElementById('home');

let backToHome = document.querySelectorAll('#backToHome');

let fitAtBtn = document.querySelectorAll('#fitAtBtn');
let fitAtPage = document.getElementById('fitAthome');

let shopCategoryBtn = document.querySelectorAll('#shopCategoryBtn');
let shopCategoryPage = document.getElementById('shopCategory');

let amazonBasicsBtn = document.querySelectorAll('#amazonBasicsBtn');
let amazonBasicsPage = document.getElementById('amazonBasics');

let oculusBtn = document.querySelectorAll('#oculusBtn');
let oculusPage = document.getElementById('oculusPage');

let ComputPartBtn = document.querySelectorAll('#ComputPartBtn');
let ComputPartPage = document.getElementById('ComputPartPage');

let GamingAccBtn = document.querySelectorAll('#GamingAccBtn');
let GamingAccPage = document.getElementById('GamingAccPage');

let FindTvBtn = document.querySelectorAll('#FindTvBtn');
let FindTvPage = document.getElementById('FindTvPage');

let TopBeautyBtn = document.querySelectorAll('#TopBeautyBtn');
let TopBeautyPage = document.getElementById('TopBeautyPage');

let FavToysBtn = document.querySelectorAll('#FavToysBtn');
let FavToysPage = document.getElementById('FavToysPage');

let LaptopTableBtn = document.querySelectorAll('#LaptopTableBtn');
let LaptopTablePage = document.getElementById('LaptopTablePage');

let ComfyBtn = document.querySelectorAll('#ComfyBtn');
let ComfyPage = document.getElementById('ComfyPage');

let HomeExplBtn = document.querySelectorAll('#HomeExplBtn');
let HomeExplPage = document.getElementById('HomeExplPage');

let GamingMerchBtn = document.querySelectorAll('#GamingMerchBtn');
let GamingMerchPage = document.getElementById('GamingMerchPage');

let AnimalToyBtn = document.querySelectorAll('#AnimalToyBtn');
let AnimalToyPage = document.getElementById('AnimalToyPage');

for (let f = 0; f < fitAtBtn.length; f++) {
  fitAtBtn[f].addEventListener('click', () => {
    fitAtPage.classList.add('is_active');
    home_page.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let i = 0; i < backToHome.length; i++) {
  backToHome[i].addEventListener('click', BackToHomePage, false);
}

nav_brand.addEventListener('click', BackToHomePage, false);

for (let s = 0; s < shopCategoryBtn.length; s++) {
  shopCategoryBtn[s].addEventListener('click', () => {
    shopCategoryPage.classList.add('is_active');
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let a = 0; a < amazonBasicsBtn.length; a++) {
  amazonBasicsBtn[a].addEventListener('click', () => {
    amazonBasicsPage.classList.add('is_active');
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let o = 0; o < oculusBtn.length; o++) {
  oculusBtn[o].addEventListener('click', () => {
    oculusPage.classList.add('is_active');
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');

    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let c = 0; c < ComputPartBtn.length; c++) {
  ComputPartBtn[c].addEventListener('click', () => {
    ComputPartPage.classList.add('is_active');
    home_page.classList.remove('is_active');

    fitAtPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let g = 0; g < GamingAccBtn.length; g++) {
  GamingAccBtn[g].addEventListener('click', () => {
    GamingAccPage.classList.add('is_active');
    home_page.classList.remove('is_active');
    fitAtPage.classList.remove('is_active');

    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let f = 0; f < FindTvBtn.length; f++) {
  FindTvBtn[f].addEventListener('click', () => {
    FindTvPage.classList.add('is_active');

    fitAtPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    home_page.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let t = 0; t < TopBeautyBtn.length; t++) {
  TopBeautyBtn[t].addEventListener('click', () => {
    TopBeautyPage.classList.add('is_active');

    fitAtPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    home_page.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let ft = 0; ft < FavToysBtn.length; ft++) {
  FavToysBtn[ft].addEventListener('click', () => {
    FavToysPage.classList.add('is_active');

    fitAtPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    home_page.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let lt = 0; lt < LaptopTableBtn.length; lt++) {
  LaptopTableBtn[lt].addEventListener('click', () => {
    LaptopTablePage.classList.add('is_active');
    fitAtPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    home_page.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let comfy = 0; comfy < ComfyBtn.length; comfy++) {
  ComfyBtn[comfy].addEventListener('click', () => {
    ComfyPage.classList.add('is_active');

    fitAtPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    home_page.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let he = 0; he < HomeExplBtn.length; he++) {
  HomeExplBtn[he].addEventListener('click', () => {
    HomeExplPage.classList.add('is_active');
    fitAtPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    home_page.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let gm = 0; gm < GamingMerchBtn.length; gm++) {
  GamingMerchBtn[gm].addEventListener('click', () => {
    GamingMerchPage.classList.add('is_active');

    fitAtPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    home_page.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    AnimalToyPage.classList.remove('is_active');
  });
}

for (let at = 0; at < AnimalToyBtn.length; at++) {
  AnimalToyBtn[at].addEventListener('click', () => {
    AnimalToyPage.classList.add('is_active');

    fitAtPage.classList.remove('is_active');
    shopCategoryPage.classList.remove('is_active');
    amazonBasicsPage.classList.remove('is_active');
    ComputPartPage.classList.remove('is_active');
    oculusPage.classList.remove('is_active');
    GamingAccPage.classList.remove('is_active');
    home_page.classList.remove('is_active');
    FindTvPage.classList.remove('is_active');
    TopBeautyPage.classList.remove('is_active');
    FavToysPage.classList.remove('is_active');
    LaptopTablePage.classList.remove('is_active');
    ComfyPage.classList.remove('is_active');
    HomeExplPage.classList.remove('is_active');
    GamingMerchPage.classList.remove('is_active');
  });
}

function BackToHomePage() {
  home_page.classList.add('is_active');

  fitAtPage.classList.remove('is_active');
  shopCategoryPage.classList.remove('is_active');
  amazonBasicsPage.classList.remove('is_active');
  ComputPartPage.classList.remove('is_active');
  oculusPage.classList.remove('is_active');
  GamingAccPage.classList.remove('is_active');
  FindTvPage.classList.remove('is_active');
  TopBeautyPage.classList.remove('is_active');
  FavToysPage.classList.remove('is_active');
  LaptopTablePage.classList.remove('is_active');
  ComfyPage.classList.remove('is_active');
  HomeExplPage.classList.remove('is_active');
  GamingMerchPage.classList.remove('is_active');
  AnimalToyPage.classList.remove('is_active');
}
// =========================================================
// =========================================================
let SidebarLeft2 = document.querySelector('#sidebars_left'),
  overlayTwo2 = document.getElementById('overlayTwo'),
  sideBar_HomeExplBtn = document.querySelector('#sideBar_HomeExplBtn'),
  sideBar_amazonBasicsBtn = document.querySelector('#sideBar_amazonBasicsBtn'),
  sideBar_ComputPartBtn = document.querySelector('#sideBar_ComputPartBtn'),
  sideBar_shopCategoryBtn = document.querySelector('#sideBar_shopCategoryBtn'),
  sideBar_GamingAccBtn = document.querySelector('#SideBar_GamingAccBtn'),
  sideBar_LaptopTableBtn = document.querySelector('#SideBar_LaptopTableBtn'),
  sideBar_oculusBtn = document.getElementById('SideBar_OculusBtn');

sideBar_amazonBasicsBtn.addEventListener('click', () => {
  amazonBasicsPage.classList.add('is_active');
  SidebarLeft2.style.left = '-150%';
  SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
  overlayTwo2.style.left = '-150%';
  home_page.classList.remove('is_active');
  fitAtPage.classList.remove('is_active');
  shopCategoryPage.classList.remove('is_active');
  ComputPartPage.classList.remove('is_active');
  oculusPage.classList.remove('is_active');
  GamingAccPage.classList.remove('is_active');
  FindTvPage.classList.remove('is_active');
  TopBeautyPage.classList.remove('is_active');
  FavToysPage.classList.remove('is_active');
  LaptopTablePage.classList.remove('is_active');
  ComfyPage.classList.remove('is_active');
  HomeExplPage.classList.remove('is_active');
  GamingMerchPage.classList.remove('is_active');
  AnimalToyPage.classList.remove('is_active');
});

sideBar_ComputPartBtn.addEventListener('click', () => {
  ComputPartPage.classList.add('is_active');
  SidebarLeft2.style.left = '-150%';
  SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
  overlayTwo2.style.left = '-150%';

  home_page.classList.remove('is_active');
  fitAtPage.classList.remove('is_active');
  shopCategoryPage.classList.remove('is_active');
  amazonBasicsPage.classList.remove('is_active');
  oculusPage.classList.remove('is_active');
  GamingAccPage.classList.remove('is_active');
  FindTvPage.classList.remove('is_active');
  TopBeautyPage.classList.remove('is_active');
  FavToysPage.classList.remove('is_active');
  LaptopTablePage.classList.remove('is_active');
  ComfyPage.classList.remove('is_active');
  HomeExplPage.classList.remove('is_active');
  GamingMerchPage.classList.remove('is_active');
  AnimalToyPage.classList.remove('is_active');
});

sideBar_HomeExplBtn.addEventListener('click', () => {
  HomeExplPage.classList.add('is_active');

  SidebarLeft2.style.left = '-150%';
  SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
  overlayTwo2.style.left = '-150%';

  home_page.classList.remove('is_active');
  fitAtPage.classList.remove('is_active');
  shopCategoryPage.classList.remove('is_active');
  amazonBasicsPage.classList.remove('is_active');
  oculusPage.classList.remove('is_active');
  GamingAccPage.classList.remove('is_active');
  FindTvPage.classList.remove('is_active');
  TopBeautyPage.classList.remove('is_active');
  FavToysPage.classList.remove('is_active');
  LaptopTablePage.classList.remove('is_active');
  ComfyPage.classList.remove('is_active');
  ComputPartPage.classList.remove('is_active');
  GamingMerchPage.classList.remove('is_active');
  AnimalToyPage.classList.remove('is_active');
});

sideBar_shopCategoryBtn.addEventListener('click', () => {
  shopCategoryPage.classList.add('is_active');

  amazonBasicsPage.classList.remove('is_active');
  SidebarLeft2.style.left = '-150%';
  SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
  overlayTwo2.style.left = '-150%';
  home_page.classList.remove('is_active');
  fitAtPage.classList.remove('is_active');
  ComputPartPage.classList.remove('is_active');
  oculusPage.classList.remove('is_active');
  GamingAccPage.classList.remove('is_active');
  FindTvPage.classList.remove('is_active');
  TopBeautyPage.classList.remove('is_active');
  FavToysPage.classList.remove('is_active');
  LaptopTablePage.classList.remove('is_active');
  ComfyPage.classList.remove('is_active');
  HomeExplPage.classList.remove('is_active');
  GamingMerchPage.classList.remove('is_active');
  AnimalToyPage.classList.remove('is_active');
});

sideBar_GamingAccBtn.addEventListener('click', () => {
  GamingAccPage.classList.add('is_active');

  oculusPage.classList.remove('is_active');
  shopCategoryPage.classList.remove('is_active');
  amazonBasicsPage.classList.remove('is_active');
  SidebarLeft2.style.left = '-150%';
  SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
  overlayTwo2.style.left = '-150%';
  home_page.classList.remove('is_active');
  fitAtPage.classList.remove('is_active');
  ComputPartPage.classList.remove('is_active');
  FindTvPage.classList.remove('is_active');
  TopBeautyPage.classList.remove('is_active');
  FavToysPage.classList.remove('is_active');
  LaptopTablePage.classList.remove('is_active');
  ComfyPage.classList.remove('is_active');
  HomeExplPage.classList.remove('is_active');
  GamingMerchPage.classList.remove('is_active');
  AnimalToyPage.classList.remove('is_active');
});

sideBar_LaptopTableBtn.addEventListener('click', () => {
  LaptopTablePage.classList.add('is_active');

  oculusPage.classList.remove('is_active');
  shopCategoryPage.classList.remove('is_active');
  amazonBasicsPage.classList.remove('is_active');
  SidebarLeft2.style.left = '-150%';
  SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
  overlayTwo2.style.left = '-150%';
  home_page.classList.remove('is_active');
  fitAtPage.classList.remove('is_active');
  ComputPartPage.classList.remove('is_active');
  GamingAccPage.classList.remove('is_active');
  FindTvPage.classList.remove('is_active');
  TopBeautyPage.classList.remove('is_active');
  FavToysPage.classList.remove('is_active');
  ComfyPage.classList.remove('is_active');
  HomeExplPage.classList.remove('is_active');
  GamingMerchPage.classList.remove('is_active');
  AnimalToyPage.classList.remove('is_active');
});

sideBar_oculusBtn.addEventListener('click', () => {
  oculusPage.classList.add('is_active');

  shopCategoryPage.classList.remove('is_active');
  amazonBasicsPage.classList.remove('is_active');
  SidebarLeft2.style.left = '-150%';
  SidebarLeft2.style.transition = 'all 0.5s ease-in-out';
  overlayTwo2.style.left = '-150%';
  home_page.classList.remove('is_active');
  fitAtPage.classList.remove('is_active');
  ComputPartPage.classList.remove('is_active');
  GamingAccPage.classList.remove('is_active');
  FindTvPage.classList.remove('is_active');
  TopBeautyPage.classList.remove('is_active');
  FavToysPage.classList.remove('is_active');
  LaptopTablePage.classList.remove('is_active');
  ComfyPage.classList.remove('is_active');
  HomeExplPage.classList.remove('is_active');
  GamingMerchPage.classList.remove('is_active');
  AnimalToyPage.classList.remove('is_active');
});
