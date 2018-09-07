//index.html script

//Nav and Main HTML elements
let nav = document.getElementById("nav");
let main = document.getElementById("main");
// Screen Width Queries
let windowWidthMatch900 = window.matchMedia("(max-width: 900px)");
// Header and Navbar's UL toggle states
let navToggle;

// Default navToggle state depending on screen width
windowWidthMatch900.matches ? navToggle = false : navToggle = true;

// Called from index.html each time the Index Body changes width
// This function displays the navbar when the screen width is more than 900px
// and hides it when it 900px or less.
function adjustIndexBody() {
  windowWidthMatch900 = window.matchMedia("(max-width: 900px)");
  if (windowWidthMatch900.matches) {
    navToggle = true;
    indexMenuButton();
  } else {
    navToggle = false;
    indexMenuButton();
  }

}

// Called from index.html each time the menu icon is clicked
// This function toggles the navbar's display to none or shown at any screen width.
function indexMenuButton() {
  windowWidthMatch900 = window.matchMedia("(max-width: 900px)");

  if (navToggle === false) {
    if (windowWidthMatch900.matches) {

      openNavMobile();

    } else {

      openNavDesktop();

    }

  } else {
    if (windowWidthMatch900.matches) {

      closeNavMobile();

    } else {

      closeNavDesktop();

    }
  }

  setTimeout(()=>{
    nav.style.height = window.getComputedStyle(main, null).getPropertyValue('height');
  },300);
  
  
}

// Called from indexMenuButton() to change the nav and main classes from index.html
// This function changes the css classes for nav and main elements to open the
// navbar when the screen width is more than 900px.
function openNavDesktop() {
  console.log('Opening Nav on Desktop');

  main.classList.toggle('main-openNavMobile', false);
  main.classList.toggle('main-closeNavMobile', false);
  main.classList.toggle('main-openNavDesktop', true);
  main.classList.toggle('main-closeNavDesktop', false);

  nav.classList.toggle('nav-openNavMobile', false);
  nav.classList.toggle('nav-closeNavMobile', false);
  nav.classList.toggle('nav-openNavDesktop', true);
  nav.classList.toggle('nav-closeNavDesktop', false);

  navToggle = true;
}

// Called from indexMenuButton() to change the nav and main classes from index.html
// This function changes the css classes for nav and main elements to open the
// navbar when the screen width is 900px or less.
function openNavMobile() {
  console.log('Opening Nav on Mobile');

  main.classList.toggle('main-openNavMobile', true);
  main.classList.toggle('main-closeNavMobile', false);
  main.classList.toggle('main-openNavDesktop', false);
  main.classList.toggle('main-closeNavDesktop', false);

  nav.classList.toggle('nav-openNavMobile', true);
  nav.classList.toggle('nav-closeNavMobile', false);
  nav.classList.toggle('nav-openNavDesktop', false);
  nav.classList.toggle('nav-closeNavDesktop', false);

  navToggle = true;
}

// Called from indexMenuButton() to change the nav and main classes from index.html
// This function changes the css classes for nav and main elements to close the
// navbar when the screen width is more than 900px.
function closeNavDesktop() {
  console.log('Closing Nav on Desktop');

  main.classList.toggle('main-openNavMobile', false);
  main.classList.toggle('main-closeNavMobile', false);
  main.classList.toggle('main-openNavDesktop', false);
  main.classList.toggle('main-closeNavDesktop', true);

  nav.classList.toggle('nav-openNavMobile', false);
  nav.classList.toggle('nav-closeNavMobile', false);
  nav.classList.toggle('nav-openNavDesktop', false);
  nav.classList.toggle('nav-closeNavDesktop', true);

  navToggle = false;
}

// Called from indexMenuButton() to change the nav and main classes from index.html
// This function changes the css classes for nav and main elements to close the
// navbar when the screen width is 900px or less.
function closeNavMobile() {
  console.log('Closing Nav on Mobile');

  main.classList.toggle('main-closeNavMobile', true);
  main.classList.toggle('main-openNavMobile', false);
  main.classList.toggle('main-openNavDesktop', false);
  main.classList.toggle('main-closeNavDesktop', false);

  nav.classList.toggle('nav-closeNavMobile', true);
  nav.classList.toggle('nav-openNavMobile', false);
  nav.classList.toggle('nav-openNavDesktop', false);
  nav.classList.toggle('nav-closeNavDesktop', false);

  navToggle = false;
}

//detail.html script

// Offer Cards
let thermostat = document.getElementById("thermostat");
let efficiency = document.getElementById("efficiency");
let homeSystem = document.getElementById("home-system");
let co2alarm = document.getElementById("co2alarm");
// Header and Navbar elements
let viewMoreButton = document.getElementById("view-more");
let detailHeader = document.getElementById("detail-header");
let helpCenterNav = document.getElementById("help-center-nav");
let navUL = document.getElementById("nav-ul");
// Screen Width Queries (windowWidthMatch900 reutlized)
let windowWidthMatch1200;
let windowWidthMatch750;
let windowWidthMatch600;
// Header and Navbar's UL toggle states
let headerToggle;
let navULToggle;
// Default headerToggle and navULToggle states depending on screen width
window.matchMedia("(max-width: 600px)").matches ? headerToggle = false : headerToggle = true;
window.matchMedia("(max-width: 750px)").matches ? navULToggle = false : navULToggle = true;

// Called from detail.html each time the Detail Body changes width
// This function displays the navbar's UL when the screen width is more than 
// 750px and hides it when it 750px or less. The header is hidden if the screen
// width is 600px or less. 
// It also adjusts the Offer Cards, depending the screen width:
// * 1 card is displayed if screen width is 600px or less
// * 2 cards are displayed if screen width is +600px
// * 3 cards are displayed if screen width is +900px
// * 4 cards are displayed if screen width is +1200px
function adjustDetailBody() {
  windowWidthMatch1200 = window.matchMedia("(max-width: 1200px)");
  windowWidthMatch900 = window.matchMedia("(max-width: 900px)");
  windowWidthMatch750 = window.matchMedia("(max-width: 750px)");
  windowWidthMatch600 = window.matchMedia("(max-width: 600px)");

  viewMoreOfferCards();
  viewLessOfferCards();

  windowWidthMatch600.matches ? hideHeader() : showHeader();
  windowWidthMatch750.matches ? hideNavUL() : showNavUL();
}

// Called from detail.html each time the View More / View Less button is clicked
// This function toggles between displaying the hidden offer cards or hiding 
// them again depending on the screen width.
function viewButton() {
  windowWidthMatch1200 = window.matchMedia("(max-width: 1200px)");
  windowWidthMatch900 = window.matchMedia("(max-width: 900px)");
  windowWidthMatch600 = window.matchMedia("(max-width: 600px)");

  if (windowWidthMatch1200.matches) {
    if (viewMoreButton.innerText == 'View More') {
      viewMoreOfferCards();
    } else {
      viewLessOfferCards();
    }
  }
}

// Called from viewButton() to display the hidden offer cards and change the
// button's text to View Less.
function viewMoreOfferCards() {
  thermostat.style.display = 'flex';
  efficiency.style.display = 'flex';
  homeSystem.style.display = 'flex';
  co2alarm.style.display = 'flex';
  viewMoreButton.innerText = 'View Less';
}

// Called from viewButton() to hide the offer cards that were displayed and 
// change the button's text to View More.
function viewLessOfferCards() {

  if (windowWidthMatch600.matches) {
    efficiency.style.display = 'none';
    homeSystem.style.display = 'none';
    co2alarm.style.display = 'none';
  } else if (windowWidthMatch900.matches) {
    homeSystem.style.display = 'none';
    co2alarm.style.display = 'none';

  } else if (windowWidthMatch1200.matches) {
    co2alarm.style.display = 'none';
  }

  viewMoreButton.innerText = 'View More';

}

// Called from detail.html each time the menu icon is clicked
// This function toggles the header and/or navbar's UL display to none or 
// shown at any screen width.
function detailMenuButton() {

  if (window.matchMedia("(max-width: 600px)").matches) {
    headerToggle ? hideHeader() : showHeader();
  }
  navULToggle ? hideNavUL() : showNavUL();

}

// Called from detailMenuButton() to show the detail Header.
function showHeader() {

  detailHeader.style.display = 'flex';
  headerToggle = true;
}

// Called from detailMenuButton() to hide the detail Header.
function hideHeader() {

  detailHeader.style.display = 'none';
  headerToggle = false;
}

// Called from detailMenuButton() to show the navbar's UL.
function showNavUL() {
  navUL.style.display = 'flex';
  if (window.matchMedia("(max-width: 750px)").matches) {
    helpCenterNav.style.display = 'block';
  } else {
    helpCenterNav.style.display = 'none';
  }
  navULToggle = true;
}

// Called from detailMenuButton() to hide the navbar's UL.
function hideNavUL() {
  navUL.style.display = 'none';
  helpCenterNav.style.display = 'none';
  navULToggle = false;
}