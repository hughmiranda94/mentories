let nav = document.getElementById("nav");
let main = document.getElementById("main");
let navPosition;
let mobileWidthMatch = window.matchMedia("(max-width: 900px)");
let navToggle;

mobileWidthMatch ? navToggle = false : navToggle = true;

function adjustScreen() {
  mobileWidthMatch = window.matchMedia("(max-width: 900px)");
  if (mobileWidthMatch.matches) {
    navToggle = true;
    displayNav();
  }
  else
  {
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
  main.style.width = '80%';
  main.style.transform = 'translateX(100%)';
  nav.style.height = 'auto';
  setTimeout(() => {
    nav.style.width = '20%';
    nav.style.transform = 'translateX(0%)';
    nav.style.position = 'static';
    main.style.transform = 'translateX(0%)';
  }, 300);
  navToggle = true;
}

function openNavMobile() {
  console.log('Opening Nav on Mobile');
  main.style.width = '100%';
  main.style.transform = 'translateX(80%)';
  nav.style.position = 'absolute';
  nav.style.width = '80%';
  nav.style.transform = 'translateX(0%)';
  nav.style.height = window.getComputedStyle(main, null).getPropertyValue('height');
  console.log(window.getComputedStyle(main, null).getPropertyValue('height'));
  
  navToggle = true;
}

function closeNavDesktop() {
  console.log('Closing Nav on Desktop');
  setTimeout(() => {
    nav.style.width = '0%';
    main.style.width = '100%';
    main.style.transform = 'translateX(0%)';
    nav.style.position = 'static';
  }, 300);
  nav.style.transform = 'translateX(-100%)';
  main.style.transform = 'translateX(-20%)';
  navToggle = false;
}

function closeNavMobile() {
  console.log('Closing Nav on Mobile');
  main.style.width = '100%';
  main.style.transform = 'translateX(0%)';
  nav.style.position = 'absolute';
  nav.style.width = '80%';
  nav.style.transform = 'translateX(-100%)';
  navToggle = false;

}