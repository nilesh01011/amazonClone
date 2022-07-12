'use strict';

let carts = document.querySelectorAll('.addToCart');
let TextChange = document.querySelectorAll('.addToCart span');
let button = document.querySelectorAll('.addToCart button');
let Icons = document.querySelectorAll('.addToCart button i.fas');

// =========================Products Items============================

let products = [
  {
    id: 1,
    name: 'Sweat Waist Belt',
    images: 'fitAtHome1',
    price: 799,
    inCart: 0,
    description:
      'Sweat Waist Belt, Sportneer Adjustable Sweat Fitness Waist Belt Trainer for Back Support, Sweat Wrap, Sweat Enhancer...',
  },
  {
    id: 2,
    name: 'Sparnod Fitness',
    images: 'fitAtHome2',
    price: 1999,
    inCart: 0,
    description:
      'Sparnod Fitness SMB-200 Cycle Pedal Exerciser with Adjustable Resistance - Suitable for Light Exercise of Legs...',
  },
  {
    id: 3,
    name: 'Resistance Band',
    images: 'fitAtHome3',
    price: 599,
    inCart: 0,
    description:
      'ZIVIK Resistance Band for Exercise, Stretching and Workout Toning Tube Kit | Resistant Band...',
  },
  {
    id: 4,
    name: 'Dell Alienware',
    images: 'Alienware-Dell',
    price: 399990,
    inCart: 0,
    description:
      'Dell Alienware Area 51 (R2) 17.3 Inches FHD 300Hz Gaming Laptop (10th Gen i9-10900k / 32 GB / 1TB SSD / RTX 2080...',
  },
  {
    id: 5,
    name: 'Valhalla Games',
    images: 'Valhalla',
    price: 3399,
    inCart: 0,
    description:
      "Assassin's Creed Valhalla Drakkar Edition (PS4) Publisher: UBISOFT ENTERTAINMENT SA",
  },
  {
    id: 6,
    name: 'HP-Pavillion',
    images: 'hp_pavillion',
    price: 72400,
    inCart: 0,
    description:
      'HP Pavilion Gaming 10th Gen Intel Core i5 Processor 15.6-inch(39.6 cm) FHD Gaming Laptop (8GB/256GB SSD + 1TB HDD...',
  },
  {
    id: 7,
    name: 'ChinmayKids',
    images: 'chinmayKids',
    price: 499,
    inCart: 0,
    description:
      'Chinmay Kids 4-in-1 Adjustable Baby Carrier Cum Kangaroo Bag/Honeycomb Texture Baby Carry Sling/Back/Front Carrier for Baby...',
  },
  {
    id: 8,
    name: 'Toys-Games',
    images: 'toys_games',
    price: 517,
    inCart: 0,
    description:
      'WONDRBOX Dr. APJ Abdul Kalam Educational Toy for 8,9,10 Year Age: DIY Satellite, Activity Kit, Math Game...',
  },
  {
    id: 9,
    name: 'Amazon-Basis1',
    images: 'amazonBasis1',
    price: 51999,
    inCart: 0,
    description:
      'AmazonBasics 564 L Side-by-Side Door Refrigerator (Black Glass Door)',
  },
  {
    id: 10,
    name: 'Amazon-Basis2',
    images: 'amazonBasis2',
    price: 8499,
    inCart: 0,
    description: 'AmazonBasics 23 L Convection Microwave (Black)',
  },
  {
    id: 11,
    name: 'Amazon-Basis3',
    images: 'amazonBasis3',
    price: 9999,
    inCart: 0,
    description:
      'HUL Pureit Advanced Pro Mineral RO+UV 6 stage wall mounted counter top black 7L Water Purifier',
  },
  {
    id: 12,
    name: 'Oculas1',
    images: 'oculas1',
    price: 9999,
    inCart: 0,
    description: 'Oculus Go Standalone Virtual Reality Headset - 64GB',
  },
  {
    id: 13,
    name: 'ASUS-ROG-Strix-X570-F',
    images: 'computer&ass1',
    price: 28999,
    inCart: 0,
    description:
      'ASUS ROG Strix X570-F (AMD AM4 1st/2nd/3rd Gen AMD Ryzen) ATX Gaming Motherboard with PCIe 4.0 Intel Gigabit Ethernet...',
  },
  {
    id: 14,
    name: 'AMD Ryzen 5',
    images: 'computer&ass2',
    price: 26999,
    inCart: 0,
    description:
      'AMD 5000 Series Ryzen 5 5600X Desktop Processor 6 cores 12 Threads 35 MB Cache 3.7 GHz Upto 4.6 GHz AM4 Socket 500',
  },
  {
    id: 15,
    name: 'Crucial Ballistix',
    images: 'computer&ass3',
    price: 16099,
    inCart: 0,
    description:
      'Crucial Ballistix 2666 MHz DDR4 DRAM Laptop Gaming Memory Kit 16GB (8GBx2) CL16',
  },
  {
    id: 16,
    name: 'Dell Alienware Laptop',
    images: 'Alienware-Dell',
    price: 399990,
    inCart: 0,
    description:
      'Dell Alienware Area 51 (R2) 17.3 Inches FHD 300Hz Gaming Laptop (10th Gen i9-10900k / 32 GB / 1TB SSD / RTX 2080...',
  },
  {
    id: 17,
    name: 'HP-Pavillion-Laptop',
    images: 'hp_pavillion',
    price: 72400,
    inCart: 0,
    description:
      'HP Pavilion Gaming 10th Gen Intel Core i5 Processor 15.6-inch(39.6 cm) FHD Gaming Laptop (8GB/256GB SSD + 1TB HDD...',
  },
  {
    id: 18,
    name: 'Razer Headsets',
    images: 'headsets',
    price: 6943,
    inCart: 0,
    description:
      'Razer Kraken Multi-Platform Wired Gaming Headset with Cooling Gel-Infused Cushions (Green, RZ04-02830200-R3M1)',
  },
  {
    id: 19,
    name: 'HyperX KeyBords',
    images: 'keybords',
    price: 8990,
    inCart: 0,
    description:
      'HYPERX Alloy Origins Core - Tenkeyless Mechanical Gaming Keyboard - Software Controlled Light and Macro Customization...',
  },
  {
    id: 20,
    name: 'Logitech Mouse',
    images: 'wiredmouse',
    price: 4295,
    inCart: 0,
    description:
      'Logitech G502 Hero High Performance Wired Gaming Mouse, Hero 25K Sensor, 25,000 DPI, RGB, Adjustable Weights, 11...',
  },
  {
    id: 21,
    name: 'Gaming Chairs',
    images: 'gamingchairs',
    price: 14490,
    inCart: 0,
    description:
      'MRC EXECUTIVE CHAIRS ALWAYS INSPIRING MORE Predator Gaming Chair Racing Style Ergonomic Premium High Back...',
  },
  {
    id: 22,
    name: 'Philips LED 4K',
    images: 'idealTV1',
    price: 44999,
    inCart: 0,
    description:
      'Philips 126 cm (50 inches) 4K Ultra HD LED Android Smart TV 50PUT8215/94 (Black) (2021 Model) | With Voice Assistant',
  },
  {
    id: 23,
    name: 'OnePlus LED',
    images: 'idealTV2',
    price: 17999,
    inCart: 0,
    description:
      'OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)',
  },
  {
    id: 24,
    name: 'Makeup Remover',
    images: 'makeupremover',
    price: 2278,
    inCart: 0,
    description: 'Neutrogena Makeup Removing Wipes (25 Count, Twin Pack)',
  },
  {
    id: 25,
    name: 'CeraVe Cream',
    images: 'moisturizingCream',
    price: 3999,
    inCart: 0,
    description: 'CeraVe Moisturizing Cream (19oz)',
  },
  {
    id: 26,
    name: 'Hair Drive',
    images: 'hairDriver',
    price: 406,
    inCart: 0,
    description: 'Vega Premium Collection Wooden Paddle Hair Brush',
  },
  {
    id: 27,
    name: 'Crest 3D',
    images: 'bonusexpress',
    price: 6999,
    inCart: 0,
    description:
      'Crest 3D White Whitestrips Professional Effects Advanced Seal, 20 each',
  },
  {
    id: 28,
    name: 'TheraBreath',
    images: 'oral_rinse',
    price: 3700,
    inCart: 0,
    description:
      'TheraBreath Dentist Recommended Fresh Breath Oral Rinse - Mild Mint Flavor, 16 Ounce (Pack of 2)',
  },
  {
    id: 29,
    name: 'Dove Shampoo',
    images: 'dove',
    price: 288,
    inCart: 0,
    description:
      'Dove Deeply Nourishing Body Wash, With Exfoliating Beads For Softer, Smoother Skin, 800 ml',
  },
  {
    id: 30,
    name: 'Thoothpast',
    images: 'thoothpast',
    price: 6339,
    inCart: 0,
    description:
      'Philips Toothbrush Heads, Sonicare Replacement Toothbrush For Philips Sonicare HX9023/65,White(3 Pack)',
  },
  {
    id: 31,
    name: 'Refiles',
    images: 'refiles',
    price: 1215,
    inCart: 0,
    description: 'Gillette Fusion Signature Razor Set Gift Pack',
  },
  {
    id: 32,
    name: 'Carve',
    images: 'carve',
    price: 1231,
    inCart: 0,
    description: 'CeraVe Moisturizers, Moisturizing Cream, 1.89 Ounce',
  },
  {
    id: 33,
    name: 'Value Packs',
    images: 'valuepacks',
    price: 2482,
    inCart: 0,
    description:
      'Crest Pro-Health Smooth Formula Toothpaste, Clean Mint, 4.6 Oz, 3 Count',
  },
  {
    id: 34,
    name: 'PlayDoh',
    images: 'playDoh',
    price: 799,
    inCart: 0,
    description:
      'PLAY-DOH 10-Pack of Non-Toxic Modeling Compound, 2-Ounce Cans,Multicolor',
  },
  {
    id: 35,
    name: 'Smart watch',
    images: 'watch',
    price: 9280,
    inCart: 0,
    description: 'Vtech Kidizoom Smartwatch Dx2, Blue',
  },
  {
    id: 36,
    name: 'Gaming Classic Jenga',
    images: 'jenga',
    price: 799,
    inCart: 0,
    description:
      'Hasbro Gaming Classic Jenga, Hardwood Blocks, Stacking Tower Game for Kids Ages 6 and Up, 1 or More Players',
  },
  {
    id: 37,
    name: 'Giggles - Activity Ball,',
    images: 'toysball',
    price: 325,
    inCart: 0,
    description:
      'Giggles - Activity Ball, Learning activity toy, Multicolour, 12 months & above, Infant and Preschool Toys',
  },
  {
    id: 38,
    name: 'VEZOL Toys Connect 4',
    images: 'connect4',
    price: 340,
    inCart: 0,
    description: 'VEZOL Toys Connect 4 The Classic Board Game',
  },
  {
    id: 39,
    name: 'Hasbro Trivial',
    images: 'trival',
    price: 9852,
    inCart: 0,
    description: 'Hasbro Trivial Pursuit Family Edition Game',
  },
  {
    id: 40,
    name: 'Retro Machine',
    images: 'retroMachine',
    price: 5638,
    inCart: 0,
    description: 'Retro Machine',
  },
  {
    id: 41,
    name: 'WWe Band',
    images: 'wwe',
    price: 3351,
    inCart: 0,
    description: 'Mattel WWE Championship Belt',
  },
  {
    id: 42,
    name: 'Dragon Mask',
    images: 'dragon_mask',
    price: 6364,
    inCart: 0,
    description: 'Action Figures Jurassic World Dino Mask Sounds, Multi Color',
  },
  {
    id: 43,
    name: 'Mega Blocks',
    images: 'mega_blocks',
    price: 1499,
    inCart: 0,
    description:
      'Mega Bloks First Builders Big Building Bag 80 piece set creative open building & construction toy',
  },
  {
    id: 44,
    name: 'Colorup Bags',
    images: 'colorup_bag',
    price: 389,
    inCart: 0,
    description:
      'Cello ColourUP Hobby Bag for Kids | Drawing Kit | Stationery Kit | Best for Gifting | Oil Pastel (25 Units) | Jumbo Wax Crayon (12 Units)',
  },
  {
    id: 45,
    name: 'Multipurpose Laptop Table',
    images: 'laptop_table1',
    price: 799,
    inCart: 0,
    description:
      'Callas Multipurpose Foldable Laptop Table with Cup Holder | Drawer | Mac Holder | Table Holder Study Table, Breakfast Table, Foldable...',
  },
  {
    id: 46,
    name: 'Engineered Wood Laptop Table',
    images: 'laptop_table2',
    price: 3749,
    inCart: 0,
    description:
      'BLUEWUD Mallium Engineered Wood Study Desk(Wenge Finish,Wenge)',
  },
  {
    id: 47,
    name: 'Mens Cotton Full Sleeve',
    images: 'sweartshirt1',
    price: 895,
    inCart: 0,
    description:
      'STATUS MANTRA Mens Cotton Full Sleeve Sweatshirt in Red colour || M size',
  },
  {
    id: 48,
    name: 'Jogger FitPaints',
    images: 'jogger1',
    price: 549,
    inCart: 0,
    description:
      'ENDEAVOUR WEAR Mens Regular Fit Trackpants Jogger FitPaints Grey colour',
  },
  {
    id: 49,
    name: 'Full Sleeves',
    images: 'Full_Sleeves1',
    price: 449,
    inCart: 0,
    description:
      'Rigo Mens Cotton Round Neck Regular Full Sleeves Black Cardigan for Casual Wear, Fashion Wear',
  },
  {
    id: 50,
    name: 'Full Sleeves',
    images: 'easytase1',
    price: 449,
    inCart: 0,
    description:
      'Bewakoof Mens Cotton Printed Feel Most Alive Motivational Full Sleeves | Round Neck | Regular Fit T-Shirt/Tee',
  },
  {
    id: 51,
    name: 'Deco Window Door Seal',
    images: 'homebedding1',
    price: 989,
    inCart: 0,
    description:
      'Deco Window Door Seal (36.5"/94cm Long) Aluminium Plate with Nylon Brush Brown (Set of 2)',
  },
  {
    id: 52,
    name: 'King-Size-Double-Bed',
    images: 'homebedding2',
    price: 1598,
    inCart: 0,
    description:
      'Ab Home Decor 350TC Microfiber Glace Cotton AC Comforter Set King Size Double Bed with 1 Flat bedsheet-90x100 inch and Two Pillow Covers',
  },
  {
    id: 53,
    name: 'HIYANSHI HOME FURNISHING',
    images: 'homebedding3',
    price: 399,
    inCart: 0,
    description:
      'HIYANSHI HOME FURNISHING Glace Microfiber King Size Tringle Design Double Bedsheet 180 TC with 2 Pillow Covers Multicolour(Geometric)',
  },
  {
    id: 54,
    name: 'Home furniture Wooden Sofa',
    images: 'homebedding4',
    price: 32999,
    inCart: 0,
    description:
      'Home furniture Wooden Sofa Set for Living Room and Office (5 Seater (3+1+1), Natural Teak Finish (Feltro Design))...',
  },
  {
    id: 55,
    name: 'Ramwood Furniture Wooden Bar Dining Table',
    images: 'homebedding5',
    price: 15000,
    inCart: 0,
    description:
      'Ramwood Furniture Wooden Bar Dining Table 2 Seater | Two Seater Dinning Table with 2 Chairs for Home & Restaurant | Dining Room Set...',
  },
  {
    id: 56,
    name: 'Ramwood Furniture Wooden Bar Dining Table',
    images: 'apparel',
    price: 494,
    inCart: 0,
    description:
      'GeNext Apparel Mens Slim Fit T-Shirt Black colour with M size Printed image',
  },
  {
    id: 57,
    name: ' Black Hats',
    images: 'hats',
    price: 259,
    inCart: 0,
    description: 'Stylists DRUNKEN Men Cotton Cap (Pack of 1) Black Hats',
  },
  {
    id: 58,
    name: ' Spider Man Action Figure',
    images: 'action-figure1',
    price: 999,
    inCart: 0,
    description:
      'Maha Shakti Spider Man Action Figure Toys (Medium, Multicolor) for childrens',
  },
  {
    id: 59,
    name: ' Naruto Ninja Action Figure',
    images: 'action-figure2',
    price: 499,
    inCart: 0,
    description:
      'Trunkin Naruto Ninja Collection Toy Set Action Figure Anime Party Kakashi Naruto Toy Set',
  },
  {
    id: 60,
    name: ' Naruto Ninja Action Figure',
    images: 'mugs',
    price: 160,
    inCart: 0,
    description:
      'PASHUPATASTRA You are Amazing Just I The Way You are Printed with Unicorn with Glossy Finish with Vibrant Print...',
  },
  {
    id: 61,
    name: 'Bedtime Original Choo',
    images: 'toys1',
    price: 910,
    inCart: 0,
    description: 'Bedtime Original Choo Express Plush Elephant - Humphrey',
  },
  {
    id: 62,
    name: ' Bedtime Original Twinkle Toes',
    images: 'toys2',
    price: 900,
    inCart: 0,
    description:
      'Bedtime Original Twinkle Toes Pink Elephant Plush, Hazel in Plush Figure Toys By Bedtime',
  },
  {
    id: 63,
    name: 'Fortnite Toys',
    images: 'toys3',
    price: 1041,
    inCart: 0,
    description: 'Fortnite 7 Lama Loot Plush',
  },
  {
    id: 64,
    name: 'WowWee Pinkfong Baby Shark',
    images: 'toys4',
    price: 600,
    inCart: 0,
    description:
      'WowWee Pinkfong Baby Shark Official Song Cube - Baby Shar, 3 inches',
  },
  {
    id: 65,
    name: 'Pomsies Lulu Puppy',
    images: 'toys5',
    price: 1425,
    inCart: 0,
    description: 'Pomsies Lulu Puppy',
  },
  {
    id: 66,
    name: 'Hatchimals Toys',
    images: 'toys6',
    price: 1425,
    inCart: 0,
    description:
      'Hatchimals CollEGGtibles, 4 Pack + Bonus, Season 4 Hatchimals CollEGGtibles, for Ages 5 and UP...',
  },
  {
    id: 67,
    name: 'Surprise Toys',
    images: 'toys7',
    price: 1425,
    inCart: 0,
    description: 'L.O.L. Surprise! Fuzzy Pets with Washable Fuzz Series 2',
  },
  {
    id: 68,
    name: 'Aurora Toys',
    images: 'toys8',
    price: 750,
    inCart: 0,
    description:
      'Aurora - Precious Moments - 8.5" Sparkle Unicorn for "Unicornio"',
  },
  {
    id: 69,
    name: 'Pokemon Toys',
    images: 'toys9',
    price: 1800,
    inCart: 0,
    description:
      'Pokemon Pikachu 8" Plush - Officially Licensed and Stuffed Animal Material',
  },
  {
    id: 70,
    name: 'Animal Toys',
    images: 'toys10',
    price: 764,
    inCart: 0,
    description:
      'Animal Adventure | Scooby Doo | Collectible Seated Plush, Brown',
  },
  {
    id: 71,
    name: 'Bedtime Choo Toys',
    images: 'toys11',
    price: 910,
    inCart: 0,
    description: 'Bedtime Original Choo Express Plush Elephant - Humphrey',
  },
  {
    id: 72,
    name: 'Bedtime Choo Toys',
    images: 'toys12',
    price: 449,
    inCart: 0,
    description:
      'Ultra Yellow Jacket Rabbit Stuffed Animal: Cuddly and Soft Rabbit Plush Toy with Floppy Long Eared 12 Inch - Yellow',
  },
  {
    id: 73,
    name: 'Bedtime Choo Toys',
    images: 'toys13',
    price: 357,
    inCart: 0,
    description:
      'Sai Stuffed Original Unicorn Toy, Soft Animal Cute Huggable Plush Toy for Kids/Boys/Girls/Best...',
  },
];

let IDProducts = products.filter((findId) => {
  findId.id;
  return findId;
});

// =========================Products Items End============================

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
       button[i].style.background = '#70e000';
    TextChange[i].innerHTML = 'Added';
    Icons[i].classList.remove('fa-shopping-cart');
    Icons[i].classList.add('fa-check');
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function OnLoadCartNumbers() {
  let productNumber = localStorage.getItem('cartNumbers');
  if (productNumber) {
    document.querySelector('#cart .Count_logo span').textContent =
      productNumber;
  }
}

function cartNumbers(product, action) {
  let productNumber = localStorage.getItem('cartNumbers');
  productNumber = parseInt(productNumber);

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if (action == 'decrease') {
    localStorage.setItem('cartNumbers', productNumber - 1);
    document.querySelector('#cart .Count_logo span').textContent =
      productNumber - 1;
  } else if (productNumber) {
    localStorage.setItem('cartNumbers', productNumber + 1);
    document.querySelector('#cart .Count_logo span').textContent =
      productNumber + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('#cart .Count_logo span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.id] == undefined) {
      cartItems = {
        ...cartItems,
        [product.id]: product,
      };
    }
    cartItems[product.id].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.id]: product,
    };
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cartCost = localStorage.getItem('totalCost');

  if (action == 'decrease') {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost - product.price);
  } else if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }
}

function displayCart() {
  let SubTotalItems = document.querySelector('.prices_part');

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector('.cart_section');
  let productsNumbers = localStorage.getItem('cartNumbers');
  let cartCost = localStorage.getItem('totalCost');

  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map((item) => {
      item.price = parseInt(item.price);
      productContainer.innerHTML += `
          <div class="product" data-target=${item.id}>
            <div class="products_main_content">
            <img src="./images/${item.images}.jpg" />
            <div class="product_content_bottom_content">
              <div class="product_content">
                <p>${item.description}</p>
              </div>
              <div class="bottom_content">
                <div class="Qty">
                <i id="minus" class="fas fa-minus"></i>
                <span>${item.inCart}</span>
                <i id="plus" class="fas fa-plus"></i>
               </div>
               <div class="hr"></div>
                <button id="DeleteFromCart">Delect</button>
              </div>
            </div>
            </div>
            <div class="product_prices">
              <span> &#8377;${new Intl.NumberFormat().format(item.inCart * item.price)}.00 </span>
             </div>
          </div>
          `;
    });

    productContainer.innerHTML += `
        <div class="Subtotal_price">
          <div class="Subtotal_title">
            <h4>Subtotal (${productsNumbers} item): <span class="font_400"> &#8377;${new Intl.NumberFormat().format(cartCost)}.00 </span></h4>
          </div>
        </div>
        `;
    SubTotalItems.innerHTML = `
        <div class="Subtotal_price">
          <div class="Subtotal_title">
            <h4>Subtotal (${productsNumbers} item):<span class="font_400"> &#8377;${new Intl.NumberFormat().format(cartCost)}.00 </span></h4>
          </div>
        </div>
        `;
  }
  deleteButtons();
  manageQuantity();
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll('#DeleteFromCart');
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem('totalCost');

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {
      let IDAttributes = document.querySelectorAll('.product');
      let FindIdProducts = IDAttributes[i].getAttribute('data-target');

      localStorage.setItem(
        'cartNumbers',
        productNumbers - cartItems[FindIdProducts].inCart
      );

      localStorage.setItem(
        'totalCost',
        cartCost -
          cartItems[FindIdProducts].price * cartItems[FindIdProducts].inCart
      );

      delete cartItems[FindIdProducts];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));

      displayCart();
      OnLoadCartNumbers();
    });
  }
}

function manageQuantity() {
  let increaseButton = document.querySelectorAll('#plus');
  let decreaseButton = document.querySelectorAll('#minus');
  let cartItems = localStorage.getItem('productsInCart');
  let currentQuantity = 0;
  let IDAttributes = document.querySelectorAll('.product');

  cartItems = JSON.parse(cartItems);

  for (let d = 0; d < decreaseButton.length; d++) {
    decreaseButton[d].addEventListener('click', () => {
      currentQuantity =
        decreaseButton[d].parentElement.querySelector('span').textContent;
      let FindIdProducts = IDAttributes[d].getAttribute('data-target');

      if (cartItems[FindIdProducts].inCart > 1) {
        cartItems[FindIdProducts].inCart -= 1;
        cartNumbers(cartItems[FindIdProducts], 'decrease');
        totalCost(cartItems[FindIdProducts], 'decrease');
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        displayCart();
      }
    });
  }

  for (let i = 0; i < increaseButton.length; i++) {
    increaseButton[i].addEventListener('click', () => {
      currentQuantity =
        increaseButton[i].parentElement.querySelector('span').textContent;
      let FindIdProducts = IDAttributes[i].getAttribute('data-target');
      cartItems[FindIdProducts].inCart += 1;
      cartNumbers(cartItems[FindIdProducts]);
      totalCost(cartItems[FindIdProducts]);
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      displayCart();
    });
  }
}

OnLoadCartNumbers();
displayCart();

function GoToSingUp() {
  window.location = './CreateSignPage.html';
}
