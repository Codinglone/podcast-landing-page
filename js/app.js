let menuRun = () => {
    /*********** Navigation Menu **********/
    //variables to hold css classes
    let hamburger = document.getElementsByClassName("navbar__menu-hamburger")[0],
    xMark = document.getElementsByClassName("navbar__menu-x")[0],
    navbar = document.getElementsByClassName("navbar__links")[0],
    logo = document.getElementsByClassName("logo")[0],
    feature = document.getElementsByClassName("feature-link")[0],
    platform = document.getElementsByClassName("platform-link")[0],
    price = document.getElementsByClassName("price-link")[0],
    category = document.getElementsByClassName("category-link")[0],
    about = document.getElementsByClassName("about-link")[0];

    // function to remove hamburger and display navigation bar with x-mark
    let hamburgerClose = () => {
        hamburger.classList.add("hamburger-inactive");
        xMark.classList.remove("x-inactive");
        navbar.classList.add("navbar__links-active");
    }

    // function to remove navigation bar and x-mark to display hamburger menu
    let hamburgerOpen = () => {
        hamburger.classList.remove("hamburger-inactive");
        xMark.classList.add("x-inactive");
        navbar.classList.remove("navbar__links-active");
    }

    hamburger.addEventListener("click", hamburgerClose);
    xMark.addEventListener("click", hamburgerOpen);
    feature.addEventListener("click", hamburgerOpen);
    platform.addEventListener("click", hamburgerOpen);
    price.addEventListener("click", hamburgerOpen);
    category.addEventListener("click", hamburgerOpen);
    about.addEventListener("click", hamburgerOpen);
    logo.addEventListener("click", hamburgerOpen);


    /*********** Add Shadow to Navigation Menu **********/
    let shadowNav = document.getElementsByClassName("header")[0];

    let shadow = () => {
        let yAxis = window.scrollY;

        if (yAxis >= 55) {
            shadowNav.classList.add("header-shadow");
        } else {
            shadowNav.classList.remove("header-shadow");
        }
    }

    window.addEventListener("scroll", shadow);
}

menuRun();