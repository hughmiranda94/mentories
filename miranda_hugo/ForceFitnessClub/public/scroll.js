let homeTitle = document.getElementById('home-title');
let classesTitle = document.getElementById('classes-title');
let scheduleTitle = document.getElementById('schedule-title');
let feedbackTitle = document.getElementById('feedback-title');
let toTop = document.getElementById('to-top');

//Scrolling functions from nav bar
function scrollHome() {  
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
function scrollClasses() {
  window.scroll({
    top: classesTitle.getBoundingClientRect().top,
    left: classesTitle.getBoundingClientRect().left,
    behavior: 'smooth'
  });
}
function scrollSchedule() {
  window.scroll({
    top: scheduleTitle.getBoundingClientRect().top,
    left: scheduleTitle.getBoundingClientRect().left,
    behavior: 'smooth'
  });
}
function scrollFeedback() {
  window.scroll({
    top: feedbackTitle.getBoundingClientRect().top,
    left: feedbackTitle.getBoundingClientRect().left,
    behavior: 'smooth'
  });
}

function checkBodyScroll() {
  if(window.pageYOffset>90){
    toTop.style.transform = 'translateX(95%)';
  }
  else{
    toTop.style.transform = 'translateX(120%)';
  }
}

toTop.addEventListener('click', ()=>{
  scrollHome();
});