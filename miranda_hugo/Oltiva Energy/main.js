//index.html

let nav = document.getElementById("nav");
let main = document.getElementById("main");
let mobileWidthMatch = window.matchMedia("(max-width: 900px)");
let navToggle;

mobileWidthMatch.matches ? navToggle = false : navToggle = true;

function adjustScreen() {
  mobileWidthMatch = window.matchMedia("(max-width: 900px)");
  if (mobileWidthMatch.matches) {
    navToggle = true;
    displayNav();
  } else {
    navToggle = false;
    displayNav();
  }

}

function displayNav() {
  mobileWidthMatch = window.matchMedia("(max-width: 900px)");
  if (navToggle == false) {
    if (mobileWidthMatch.matches) {

      openNavMobile();

    } else {

      openNavDesktop();

    }

  } else {
    if (mobileWidthMatch.matches) {

      closeNavMobile();

    } else {

      closeNavDesktop();

    }
  }
}

function openNavDesktop() {
  console.log('Opening Nav on Desktop');

  
  nav.style.height = window.getComputedStyle(main, null).getPropertyValue('height');

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

function openNavMobile() {
  console.log('Opening Nav on Mobile');

  nav.style.height = window.getComputedStyle(main, null).getPropertyValue('height');

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

//detail.html

let thermostat = document.getElementById("thermostat");
let efficiency = document.getElementById("efficiency");
let homeSystem = document.getElementById("home-system");
let co2alarm = document.getElementById("co2alarm");
let viewMoreButton = document.getElementById("view-more");
let detailHeader = document.getElementById("detail-header");
let helpCenterNav = document.getElementById("help-center-nav");
let navUL = document.getElementById("nav-ul");
let windowWidthMatch1200;
let windowWidthMatch900;
let windowWidthMatch750;
let windowWidthMatch600;
let headerToggle;
let navULToggle;

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

function viewMoreOfferCards() {
  thermostat.style.display = 'flex';
  efficiency.style.display = 'flex';
  homeSystem.style.display = 'flex';
  co2alarm.style.display = 'flex';
  viewMoreButton.innerText = 'View Less';
}

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

window.matchMedia("(max-width: 600px)").matches ? headerToggle = false : headerToggle = true;
window.matchMedia("(max-width: 750px)").matches ? navULToggle = false : navULToggle = true;

function detailMenuButton() {

  if (window.matchMedia("(max-width: 600px)").matches) {
    headerToggle ? hideHeader() : showHeader();
  }
  navULToggle ? hideNavUL() : showNavUL();

}

function showHeader() {

  detailHeader.style.display = 'flex';
  headerToggle = true;
}

function hideHeader() {

  detailHeader.style.display = 'none';
  headerToggle = false;
}

function showNavUL() {
  navUL.style.display = 'flex';
  if (window.matchMedia("(max-width: 750px)").matches) {
    helpCenterNav.style.display = 'block';
  } else {
    helpCenterNav.style.display = 'none';
  }
  navULToggle = true;
}

function hideNavUL() {
  navUL.style.display = 'none';
  helpCenterNav.style.display = 'none';
  navULToggle = false;
}