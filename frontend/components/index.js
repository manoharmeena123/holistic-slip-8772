function navbar(){
    return `
    <div>
        <div id="nav">
          <!-- Side panel -->
          <div id="mySidepanel" class="sidepanel">
            <a href="#"
              >Home
              <i
                href="javascript:void(0)"
                class="fa fa-close"
                style="background-color: rgb(255, 255, 255)"
                onclick="closeNav()"
                id="close"
              ></i
            ></a>
            <hr />
            <a href="#">SHOP BY CATEGORY</a>
            <hr />
            <a href="#">OFFERS</a>
            <hr />
            <a href="#">MORE SHOPs</a>
            <hr />
          </div>
          <!-- id burger and person for medium and small screen -->
          <!-- these two not visible on large screen -->
          <div id="burger">
            <i
              class="material-icons"
              style="font-size: 40px"
               onclick="openNav()"
              >menu</i
            >
          </div>
          <div id="person">
            <i
              class="material-icons personbtn"
              style="font-size: 40px"
              // onclick="openPerson()"
              >person</i
            >
            <div class="person-content" id="personDropdown">
              <button class="Btn">
                <a href="login.html">Login</a>
              </button>
              <button class="Btn">
                <a href="signup.html">Signup</a>
              </button>
            </div>
          </div>

          <div id="logo">
            <img src="images/bbLogo.png" alt="" />
          </div>

          <!-- top bar -->
          <div class="header">
            <ul>
              <li>
                <i class="material-icons" style="font-size: 16px">local_phone</i
                ><span> 1860 123 1000 </span>
              </li>
              <li>
                <i class="material-icons" style="font-size: 16px">my_location</i
                ><a href="https://goo.gl/maps/uMpBBq53jdrduzT56">
                  400000,Banglore
                </a>
              </li>
              <li>
                <i class="material-icons" style="font-size: 16px">person</i
                ><a href="signup.html"> Login/Signup </a>
              </li>
            </ul>
          </div>

          <!-- logo -->
          <div class="menu">
            <img src="images/bbLogo.png" alt="bblogo" />
          </div>

          <!-- search tab -->
          <div class="content">
            <div id="input">
              <input
                type="search"
                id="search"
                placeholder="Search for Products..."
              />
              <button class="find">
                <i class="fa fa-search" style="font-size: 16px"></i>
              </button>
            </div>
          </div>

          <!-- basket/cart tab -->
          <div class="card">
            <i
              class="fa fa-shopping-cart"
              style="font-size: 40px; color: red"
            ></i>
            <div>
              <p>My Basket</p>
              <p><span id="cartLen">0</span> items</p>
            </div>
          </div>

          <!-- this 2 only visible on  medium and small screen-->
          <div id="location">
            <i class="material-icons" style="font-size: 40px">my_location</i>
          </div>
          <div id="cart">
            <i
              class="fa fa-shopping-cart"
              style="font-size: 40px"
              onclick="cart()"
            >
            </i>
          </div>
        </div>
        <!-- shop by category on hover dropdown -->
        <div class="navbar">
          <div class="dropdown">
            <button class="dropbtn">
              Shop By Category
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="Fruits_and_Vegitables.html">Fruits and Vegetables</a>
              <a href="bakery.html">Bakery,cakes & Dairy</a>
              <a href="Beverages.html">Beverage</a>
              <a href="#">Beauty & Hygiene</a>
              <a href="#">Baby Care</a>
              <a href="#">snacks</a>
            </div>
          </div>
          <button class="offers">
            <i class="fa fas fa-tags"></i>
            Offers
          </button>
        </div>
      </div><br>
`
}

function footer(){
    return `
       
    <div id="footer1">
    <h3>bigBasket</h3>
    <p>About Us</p>
    <p>In News</p>
    <p>Green bigBasket</p>
    <p>Privacy Policy</p>
    <p>Affiliate</p>
    <p>Terms and Conditions</p>
    <p>Careers At bigBasket</p>
    <p>bb Instant</p>
    <p>bb Daily</p>
    <p>bb Blog</p>
  </div>
  <div id="footer2">
    <h3>Help</h3>
    <p>FAQs</p>
    <p>Contact Us</p>
    <p>bb Wallet FAQs</p>
    <p>bb Wallet T&Cs</p>
    <p>Affiliate</p>
    <p>Vendor Connect</p>
    <p>E-Invoice Compliance for bigBasket Vendors</p>
  </div>
  <div id="footer3">
    <h3 style="margin-bottom: 30px">Download App</h3>
    <img
      src="https://www.bbassets.com/static/v2476/uiv2/images/Google-App-store-icon.png"
      alt="googleBigBasket"
      style="width: 60%; object-fit: contain"
    />
    <br />
    <br />
    <img
      src="https://www.bbassets.com/static/v2476/uiv2/images/Apple-App-store-icon.png"
      alt="AppleBigBasket"
      style="width: 60%; object-fit: contain"
    />
  </div>
  <div id="footer4">
    <h3>Get Social With Us</h3>
    <div>
      <img
        src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
        alt="fb-link"
        style="width: 45px"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/145/145808.png"
        alt="Pinterest"
        style="width: 45px"
      />
      <img
        src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
        alt="twitterIcon"
        style="width: 45px"
      />
      <img
        src="https://www.freepnglogos.com/uploads/instagram-icon-png/instagram-icon-suzem-limited-make-known-20.png"
        alt="InstaIcon"
        style="width: 45px"
      />
    </div>
  </div>
    
    `
}

function sidebar(){
  return `
  
  <div class="slider"></div>

  <!-- Middle Div Start -->
  <div class="middle">
    <div class="left">
      <p>Category</p>
      <hr />
      <p class="foodgrain">Foodgrains,Oil & Masala</p>
      <button>Atta, Flours & Sooji (300)</button>
      <button>Dals & Pulses (400)</button>
      <button>Dry Fruits (770)</button>
      <button>Edible Oils & Ghee (408)</button>
      <button>Masalas & Spices (1304)</button>
      <button>Organic Staples (1044)</button>
      <button>Rice & Rice Product (386)</button>
      <button>Salt, Sugar & Jaggery (232)</button>

      <p>Brand</p>
      <hr />
      <input type="checkbox" /> <label for="">18 Herbs</label> <br />
      <input type="checkbox" /> <label for="">Aashirvaad</label><br />
      <input type="checkbox" /> <label for="">Amul</label><br />
      <input type="checkbox" /> <label for="">Anandham</label><br />
      <input type="checkbox" /> <label for="">Annapoorna</label><br />
      <input type="checkbox" /> <label for="">Basso</label><br />
      <input type="checkbox" /> <label for="">BORGES</label><br />
      <input type="checkbox" /> <label for="">Brahmins</label><br />
      <input type="checkbox" /> <label for="">Dhatu Organics</label><br />

      <p>Food Preference</p>
      <hr />
      <input type="checkbox" /> <label for="">Vegetarian</label><br />
      <input type="checkbox" /> <label for="">Non Vegetarian</label><br />
      <input type="checkbox" /> <label for="">Vegan</label><br />

      <p>Millets</p>
      <hr />
      <input type="checkbox" /> <label for=""> Pearl Millet</label><br />
      <input type="checkbox" /> <label for=""> Barnyard Millet</label><br />
      <input type="checkbox" /> <label for="">Brown Top Millet</label><br />
      <input type="checkbox" /> <label for="">Jowar Millet</label><br />
      <input type="checkbox" /> <label for="">Kodo Millet</label><br />
      <input type="checkbox" /> <label for="">Little Millet</label><br />
      <input type="checkbox" /> <label for="">Foxtail Millet</label><br />
      <input type="checkbox" /> <label for="">Proso Millet</label><br />
      <input type="checkbox" /> <label for="">Finger Millet</label><br />

      <p>Country Of Origin</p>
      <hr />
      <input type="checkbox" /> <label for=""> Australia</label><br />
      <input type="checkbox" /> <label for=""> Canada</label><br />
      <input type="checkbox" /> <label for="">Afghanistan</label><br />
      <input type="checkbox" /> <label for="">China</label><br />
      <input type="checkbox" /> <label for="">India</label><br />
      <input type="checkbox" /> <label for="">Iraq</label><br />
      <p>Food Type</p>
      <hr />
      <input type="checkbox" /> <label for="">Dehydrated</label><br />
      <p>Allergen Info</p>
      <hr />
      <input type="checkbox" /> <label for="">Gluten Free</label> <br />
      <input type="checkbox" /> <label for="">Nut Free</label><br />
      <input type="checkbox" /> <label for="">Dairy Free</label><br />
      <input type="checkbox" /> <label for="">Trans Fat Free</label><br />
      <input type="checkbox" /> <label for="">Fish Free</label><br />
      <input type="checkbox" /> <label for="">Contains Milk</label><br />
      <input type="checkbox" /> <label for="">Lactose Free</label><br />
      <input type="checkbox" /> <label for="">No Added Sugar</label><br />
      <input type="checkbox" /> <label for="">Contains Nuts</label><br />
      <p>Price</p>
      <hr />
      <input type="checkbox" /> <label for="">Less than Rs 20 (83)</label>
      <br />
      <input type="checkbox" /> <label for="">Rs 21 to Rs 50 (475)</label
      ><br />
      <input type="checkbox" /> <label for="">Rs 51 to Rs 100 (743)</label
      ><br />
      <input type="checkbox" /> <label for="">Rs 101 to Rs 200 (625)</label
      ><br />
      <input type="checkbox" /> <label for="">Rs 201 to Rs 500 (534)</label
      ><br />
      <input type="checkbox" /> <label for="">More than Rs 501 (2088)</label
      ><br />
      <p>Discount</p>
      <hr />
      <input type="checkbox" /> <label for="">Upto 5% (406)</label> <br />
      <input type="checkbox" /> <label for="">5% - 10% (621)</label><br />
      <input type="checkbox" /> <label for="">10% - 15% (364)</label><br />
      <input type="checkbox" /> <label for="">15% - 25% (628)</label><br />
      <input type="checkbox" /> <label for="">More than 25% (771)</label
      ><br />
      <p>Pack Size</p>
      <hr />
      <input type="checkbox" /> <label for="">100 Pellets</label> <br />
      <input type="checkbox" /> <label for="">110 Pellets</label><br />
      <input type="checkbox" />
      <label for="">300 Tablets (300 Tablets free)</label><br />
      <input type="checkbox" /> <label for="">100 tablets</label><br />
      <input type="checkbox" /> <label for="">25 Sachet</label><br />
      <input type="checkbox" /> <label for="">1 g Carton</label><br />
      <input type="checkbox" />
      <label for="">2 x 500 ml Bottle Multipack</label><br />
      <input type="checkbox" />
      <label for="">2 x 500 ml Carton Multipack</label><br />
      <input type="checkbox" />
      <label for="">2 x 500 ml Jar Multipack</label><br />
      <input type="checkbox" /> <label for="">2 x 30 g Multipack</label>
      <br />
      <input type="checkbox" />
      <label for="">5 x 20 g Pouch Multipack</label><br />
      <input type="checkbox" /> <label for="">2 x 1 Kg Multipack</label
      ><br />
      <input type="checkbox" />
      <label for="">2 x 1 L Bottle Multipack</label><br />
      <input type="checkbox" />
      <label for="">2 x 1 L Carton Multipack</label><br />
      <input type="checkbox" />
      <label for="">2 x 1 L Spout Pack Multipack</label><br />
      <input type="checkbox" /> <label for="">2 x 1 L Tin Multipack</label
      ><br />
      <input type="checkbox" /> <label for="">2X100 g Multipack</label
      ><br />
      <input type="checkbox" /> <label for="">2X500 g Multipack</label
      ><br />
      <input type="checkbox" /> <label for=""> 3X1 L Multipack</label><br />
    </div>
    <div class="right">
      <div class="prohead">
        <div class="top">
          <div class="title">
            <h2 class="fg">Foodgrains, Oil & Masala (4553)</h2>
          </div>
          <div>
            <select name="" id="sortbycat" onchange="sort()">
              <option value="low">Price-Low to High</option>
              <option value="high">Price-High to Low</option>
            </select>
          </div>
        </div>
        <div class="bottum">ALL PRODUCTS</div>
      </div>
      <div id="products"></div>
    </div>
  </div>  
   
  `
}

export {navbar,footer}