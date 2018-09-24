let feedbackForm = document.getElementById('feedback-form');
let testimonialImg = document.getElementById('testimonial-img');
let testimonialTxt = document.getElementById('testimonial-txt');
let testimonialName = document.getElementById('testimonial-name');
let testimonialImgContainer = document.getElementById('testimonials-img-container');
let testimonialInfoContainer = document.getElementById('testimonials-info-container');
let classCardsGrid = document.getElementById('class-cards-grid');
let scheduleGrid = document.getElementById('schedule-grid');
let scheduleWeek = document.getElementById('schedule-week');

let homeTitle = document.getElementById('home-title');
let classesTitle = document.getElementById('classes-title');
let scheduleTitle = document.getElementById('schedule-title');
let feedbackTitle = document.getElementById('feedback-title');

let viewClassCardsToggle = false;

let classesElements = [{
    classImg: document.getElementById('class1-img'),
    classTitle: document.getElementById('class1-title'),
    classPrice: document.getElementById('class1-price'),
    classInstructor: {
      instrcutorImg: document.getElementById('class1-instructor-img'),
      instrcutorName: document.getElementById('class1-instructor-name'),
    },
    classRating: {
      ratingStars: document.getElementById('class1-rating-stars'),
      ratingReviews: document.getElementById('class1-rating-reviews'),
    },
    classDay: document.getElementById('class1-day'),
    classFrequency: document.getElementById('class1-frequency'),
    classSessions: document.getElementById('class1-sessions')
  },
  {
    classImg: document.getElementById('class2-img'),
    classTitle: document.getElementById('class2-title'),
    classPrice: document.getElementById('class2-price'),
    classInstructor: {
      instrcutorImg: document.getElementById('class2-instructor-img'),
      instrcutorName: document.getElementById('class2-instructor-name'),
    },
    classRating: {
      ratingStars: document.getElementById('class2-rating-stars'),
      ratingReviews: document.getElementById('class2-rating-reviews'),
    },
    classDay: document.getElementById('class2-day'),
    classFrequency: document.getElementById('class2-frequency'),
    classSessions: document.getElementById('class2-sessions')
  },
  {
    classImg: document.getElementById('class3-img'),
    classTitle: document.getElementById('class3-title'),
    classPrice: document.getElementById('class3-price'),
    classInstructor: {
      instrcutorImg: document.getElementById('class3-instructor-img'),
      instrcutorName: document.getElementById('class3-instructor-name'),
    },
    classRating: {
      ratingStars: document.getElementById('class3-rating-stars'),
      ratingReviews: document.getElementById('class3-rating-reviews'),
    },
    classDay: document.getElementById('class3-day'),
    classFrequency: document.getElementById('class3-frequency'),
    classSessions: document.getElementById('class3-sessions')
  }

]

let trainersElements = [{
    trainerIcon: document.getElementById('trainer1-icon'),
    trainerTitle: document.getElementById('trainer1-title'),
    trainerDesc: document.getElementById('trainer1-desc')
  },
  {
    trainerIcon: document.getElementById('trainer2-icon'),
    trainerTitle: document.getElementById('trainer2-title'),
    trainerDesc: document.getElementById('trainer2-desc')
  },
  {
    trainerIcon: document.getElementById('trainer3-icon'),
    trainerTitle: document.getElementById('trainer3-title'),
    trainerDesc: document.getElementById('trainer3-desc')
  },
  {
    trainerIcon: document.getElementById('trainer4-icon'),
    trainerTitle: document.getElementById('trainer4-title'),
    trainerDesc: document.getElementById('trainer4-desc')
  }
]


let dbRefClasses = firebase.database().ref().child('classes');
dbRefClasses.on('value', snap => {
  console.log(snap.val());
  console.log(snap.numChildren());
  classCardsGrid.innerHTML = '';
  for (let i = 0; i < snap.numChildren(); i++) {

    htmlStars = '';
    numberOfStars = 0;
    (snap.val()[i]['rating'].stars > 5) ? numberOfStars = 5: numberOfStars = snap.val()[i]['rating'].stars;
    for (let j = 0; j < numberOfStars; j++) {
      htmlStars += '<img src="assets/star.png">';
    }
    (i > 2) ? hiddenCard = 'hidden-card': hiddenCard = '';
    classCardsGrid.innerHTML +=
      '<div class="class-card ' + hiddenCard + ' ">' +
      '<div class="card-img-container">' +
      '<img src="' + imgSrcPath + snap.val()[i].img + '" class="card-img"></div>' +
      '<div class="card-info-container">' +
      '<h3 id="class1-title">' + snap.val()[i].title + '</h3>' +
      '<div class="main-info">' +
      '<p class="class-price">$' + snap.val()[i].price + '</p>' +
      '<div class="class-instructor">' +
      '<div class="instructor-img"><img src="' + imgSrcPath + snap.val()[i]['instructor'].img + '"></div>' +
      '<p class="instructor-name">' + snap.val()[i]['instructor'].name + '</p></div>' +
      '<div class="class-rating"><div class="stars">' + htmlStars + '</div>' +
      '<p class="reviews-number" id="class1-rating-reviews">(' + snap.val()[i]['rating'].reviews + ' reviews)</p></div></div>' +
      '<button class="full-class-btn">FULL CLASS</button>' +
      '<div class="class-schedule">' +
      '<p class="class-date" id="class1-day"><img src="assets/calendar.png">JAN 01, 2018</p>' +
      '<p class="class-frequency" id="class1-frequency"><img src="assets/clock.png">MON-FRI: 6AM-8AM</p>' +
      '<p class="class-sessions" id="class1-sessions"><img src="assets/book.png">20 SESSIONS</p></div><hr></div><div>'
    // classCardsGrid.appendChild(classCardDivs[i]);
    // console.log(classCardsGrid);

  }


  // classesElements.forEach((classElement, index) => {
  //       classElement.classImg.src = imgSrcPath + snap.val()[index].img;
  //       classElement.classTitle.innerText = snap.val()[index].title;
  //       classElement.classPrice.innerText = '$' + snap.val()[index].price;
  //       classElement.classInstructor.instrcutorImg.src = imgSrcPath + snap.val()[index]['instructor'].img;
  //       classElement.classInstructor.instrcutorName.innerText = snap.val()[index]['instructor'].name;
  //       classElement.classRating.ratingStars.innerHTML = '';
  //       if (snap.val()[index]['rating'].stars > 5) snap.val()[index]['rating'].stars = 5;
  //       for (i = 0; i < snap.val()[index]['rating'].stars; i++) {
  //         classElement.classRating.ratingStars.innerHTML += '<img src="assets/star.png">';
  //       }
  //       classElement.classRating.ratingReviews.innerText = '(' + snap.val()[index]['rating'].reviews + ' reviews)';
  //       classElement.classDay.innerHTML = '<img src="assets/calendar.png"> ' + snap.val()[index].day;
  //       classElement.classFrequency.innerHTML = '<img src="assets/clock.png"> ' + snap.val()[index].frequency;
  //       classElement.classSessions.innerHTML = '<img src="assets/book.png"> ' + snap.val()[index].sessions + ' SESSIONS';
  //     });
});

hoursDefinition = [
  '6AM - 8AM',
  '8AM - 10AM',
  '10AM - 12PM',
  '12PM - 2PM',
  '2PM - 4PM',
  '4PM - 6PM',
  '8PM - 10PM'
]

scheduleWeek.addEventListener('input', function (evt) {
  console.log(this.value);
  refreshSchedule();
});

function refreshSchedule() {
  let dbRefSchedule = firebase.database().ref().child('schedule-weeks');
  dbRefSchedule.on('value', snap => {
    console.log(snap.val());
    scheduleGrid.innerHTML = '';
    scheduleGrid.innerHTML += '<div class="day-name">MONDAY</div>' +
      '<div class="day-name">TUESDAY</div>' +
      '<div class="day-name">WEDNESDAY</div>' +
      '<div class="day-name">THURSDAY</div>' +
      '<div class="day-name">FRIDAY</div>' +
      '<div class="day-name">SATURDAY</div>' +
      '<div class="day-name">SUNDAY</div>';
    let week = scheduleWeek.value.charAt(5) + scheduleWeek.value.charAt(6) + scheduleWeek.value.charAt(7);

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        switch (j) {
          case 0:
            day = 'monday';
            break;
          case 1:
            day = 'tuesday';
            break;
          case 2:
            day = 'wednesday';
            break;
          case 3:
            day = 'thursday';
            break;
          case 4:
            day = 'friday';
            break;
          case 5:
            day = 'saturday';
            break;
          case 6:
            day = 'sunday';
            break;
          default:
            break;
        }

        if (snap.val()[week] != undefined) {
          if (snap.val()[week][day]['H' + (i + 1)] != undefined) {
            scheduleGrid.innerHTML += '<div class="hour"><p>' + snap.val()[week][day]['H' + (i + 1)] + '</p><p><strong>' +
              hoursDefinition[i] + '</strong></p></div>';
          } else {
            scheduleGrid.innerHTML += '<div class="hour"> </div>'
          }
        } else {
          scheduleGrid.innerHTML += '<div class="hour"> </div>'
        }
      }
    }
  });
}
refreshSchedule();


let trainers = [{
    icon: 'dumbbell.png',
    title: 'ENTHUSIASTIC TRAINER',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et' +
      'malesuada fames ac turpis egestas.'
  },
  {
    icon: 'flex.png',
    title: 'ENTHUSIASTIC TRAINER',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et' +
      'malesuada fames ac turpis egestas.'
  },
  {
    icon: 'heartrate.png',
    title: 'ENTHUSIASTIC TRAINER',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et' +
      'malesuada fames ac turpis egestas.'
  },
  {
    icon: 'lift.png',
    title: 'ENTHUSIASTIC TRAINER',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et' +
      'malesuada fames ac turpis egestas.'
  }
]

let dbRefTestimonials = firebase.database().ref().child('testimonials');

let testimonialsQty = 0;

let testimonials = [];

function refreshTestimonials() {
  dbRefTestimonials.on('value', snap => {
    testimonials = [];
    for (let i = 0; i < snap.numChildren(); i++) {
      try {
        testimonials.push({
          img: snap.val()[i].img,
          txt: snap.val()[i].txt,
          name: snap.val()[i].name
        });
      } catch {
        console.log('Can not push testimonial from firebase.');
      }
    }
    testimonialsQty = snap.numChildren();
  });
}
refreshTestimonials();

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  testimonialImgPick = Math.floor(Math.random() * (testimonialImages.length-1));
  dbRefTestimonials.child(testimonialsQty).set({
    img: testimonialImages[testimonialImgPick],
    name: feedbackForm.elements['form-name'].value,
    txt: feedbackForm.elements['form-feedback'].value
  });
  alert('Thank you for your feedback!');
  feedbackForm.elements['form-name'].value = '';
  feedbackForm.elements['form-feedback'].value = '';
  refreshTestimonials();

});
let testimonialImages = [
  'testimonial-0.jpg',
  'testimonial-1.jpg',
  'testimonial-2.jpg',
  'testimonial-3.jpg',
  'testimonial-4.jpg',
];
let cycleCount = 0;

let imgSrcPath = 'assets/';

function changeTestimonial() { 
  
  cycleCount < testimonialsQty-1 ? cycleCount++ : cycleCount = 0;  
  console.log('CHANGING to ' + testimonials[cycleCount].name + "'s testimonial");

  testimonialImgContainer.style.opacity = 0;
  testimonialInfoContainer.style.opacity = 0;

  setTimeout(() => {
    testimonialImgContainer.style.opacity = 100;
    testimonialInfoContainer.style.opacity = 100;
    testimonialImg.src = imgSrcPath + testimonials[cycleCount].img;
    testimonialTxt.innerText = testimonials[cycleCount].txt;
    testimonialName.innerText = testimonials[cycleCount].name;
  }, 500);
}

function loadTrainerCards() {
  console.log('LOADING TRAINER CARDS');
  trainersElements.forEach((trainerElement, index) => {
    trainerElement.trainerIcon.src = imgSrcPath + trainers[index].icon;
    trainerElement.trainerTitle.innerText = trainers[index].title;
    trainerElement.trainerDesc.innerText = trainers[index].desc;
  });

}

function viewClassCards() {
  console.log('VIEW MORE');
  let hiddenCards = document.getElementsByClassName('hidden-card');
  let viewBtn = document.getElementById('view-more-btn');
  for (let i = 0; i < hiddenCards.length; i++) {
    (!viewClassCardsToggle) ? hiddenCards[i].style.display = 'flex': hiddenCards[i].style.display = 'none';
  }
  viewClassCardsToggle = !viewClassCardsToggle;
  (!viewClassCardsToggle) ? viewBtn.innerText = 'VIEW MORE': viewBtn.innerText = 'VIEW LESS';  
  window.scrollBy({
    top: viewBtn.getBoundingClientRect().top - (screen.height * 0.75),
    behavior: 'smooth'
  });  
}

function scrollHome(){
  window.scroll({
    top: homeTitle.getBoundingClientRect().top, 
    left: homeTitle.getBoundingClientRect().left,
    behavior: 'smooth'
  });  
}
function scrollClasses(){
  window.scroll({
    top: classesTitle.getBoundingClientRect().top, 
    left: classesTitle.getBoundingClientRect().left,
    behavior: 'smooth'
  });  
}
function scrollSchedule(){
  window.scroll({
    top: scheduleTitle.getBoundingClientRect().top, 
    left: scheduleTitle.getBoundingClientRect().left,
    behavior: 'smooth'
  });  
}
function scrollFeedback(){
  window.scroll({
    top: feedbackTitle.getBoundingClientRect().top, 
    left: feedbackTitle.getBoundingClientRect().left,
    behavior: 'smooth'
  });  
}