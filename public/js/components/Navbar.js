
window.addEventListener("load", navbar);

function open_menu (e) {
    var navbar = document.querySelector("#navbar");
    navbar.style.transform = "translateX(" + 0 + "vw)";
    navbar.style.transition = "0.45s ease-out";
}

function close_menu (e) {
    var navbar = document.querySelector("#navbar");
    navbar.style.transform = "translateX(-" + 100 + "vw)";
    navbar.style.transition = "0.3s ease-in";
}

function navbar () {
    document.getElementsByTagName("header")[0].innerHTML = `
        
        <!-- Menu Bar -->
        <div class="container d-flex flex-row align-items-center justify-content-center" style="gap: 4px; color: pink; font-weight: normal; max-width: 125px;">
        <span class="material-icons container d-flex flex-row align-items-center justify-content-center" style="font-size: 30px; width: 60px; height: 60px; background-color: #343a40; cursor: pointer;" onclick="open_menu(this)"> menu </span>
        <span style="font-size: 12px; color: #343a40;letter-spacing: 1px;"> MENU </span>
        </div>

        <!-- Search -->
        <form action="/search" method="POST" name="search_form">
        <span class="material-icons"> search </span>
        <input type="text" name="search" placeholder="search..." />
        </form>

        <!-- Logo -->
        <div id="Hala-Accessories-Nav-Logo" class="container d-flex flex-column align-items-center justify-content-center">
        <h1 style="font-size: 60px; font-weight: bolder;"> H </h1>
        <span style="font-size: 12px;"> Hala Accessories </span>
        <span style="font-size: 10px;"> Jewelry </span>
        </div>

        <!-- For Customers -->
        <nav>
            <span class="customer-navlink material-icons"> people </span>
            <span class="customer-navlink material-icons"> notifications </span>
            <span class="customer-navlink material-icons"> shopping_bag </span>
        </nav>


        <nav id="navbar">
        
        <div class="container d-flex flex-row align-items-center justify-content-center" style="gap: 4px; font-weight: normal; max-width: 125px;">
            <span class="material-icons container d-flex flex-row align-items-center justify-content-center" style="font-size: 30px; width: 60px; height: 60px; background-color: transparent; cursor: pointer;" onclick="close_menu(this)"> menu </span>
            <span style="font-size: 12px; letter-spacing: 1px;"> MENU </span>
        </div>

        <a href="/" class="navlink"> Home </a>

        <a href="/shopping-page" class="navlink"> Shop </a>

        <a href="" class="navlink"> New Arrivals </a>

        <a href="" class="navlink"> Best Sellers </a>

        <a href="" class="navlink"> Contact Us </a>

        </nav>

    `;
}