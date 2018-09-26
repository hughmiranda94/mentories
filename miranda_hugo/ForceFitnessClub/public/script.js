var config = {
  apiKey: "AIzaSyA61oMoOE3AxZcTSOc7rnCNmCExD8S0heA",
  authDomain: "forcefitnessclub-128df.firebaseapp.com",
  databaseURL: "https://forcefitnessclub-128df.firebaseio.com",
  projectId: "forcefitnessclub-128df",
  storageBucket: "forcefitnessclub-128df.appspot.com",
  messagingSenderId: "275800715940"
};
firebase.initializeApp(config);

//DOM Elements by ID
let feedbackForm = document.getElementById('feedback-form');
let testimonialImg = document.getElementById('testimonial-img');
let testimonialTxt = document.getElementById('testimonial-txt');
let testimonialName = document.getElementById('testimonial-name');
let testimonialImgContainer = document.getElementById('testimonials-img-container');
let testimonialInfoContainer = document.getElementById('testimonials-info-container');
let classCardsGrid = document.getElementById('class-cards-grid');
let trainerCardsGrid = document.getElementById('trainer-cards-grid');
let scheduleGrid = document.getElementById('schedule-grid');
let scheduleWeek = document.getElementById('schedule-week');
let classFilter = document.getElementById('class-filter');
let bar = document.getElementById("bar"); 

//Other variables
let imgSrcPath = 'assets/';
let viewClassCardsToggle = false;
let cycleCount = 0;
let testimonialsQty = 0;

//Arrays for default values
let testimonialImgPool = [
  'testimonial-0.jpg',
  'testimonial-1.jpg',
  'testimonial-2.jpg',
  'testimonial-3.jpg',
  'testimonial-4.jpg',
];
let hoursDefinition = [
  '6AM - 8AM',
  '8AM - 10AM',
  '10AM - 12PM',
  '12PM - 2PM',
  '2PM - 4PM',
  '4PM - 6PM',
  '8PM - 10PM'
]


let trainers = [];
let testimonials = [];
let classes = [];

//Firebase database references
let dbRefTestimonials = firebase.database().ref().child('testimonials');
let dbRefClasses = firebase.database().ref().child('classes');
let dbRefSchedule = firebase.database().ref().child('schedule-weeks');
let dbRefTrainers = firebase.database().ref().child('trainers');

//Firebase database synchronization

function syncSchedule() {
  dbRefSchedule.on('value', snap => {

    let week = scheduleWeek.value.charAt(5) + scheduleWeek.value.charAt(6) + scheduleWeek.value.charAt(7);
    let tableRows = ''
    for (let i = 0; i < 7; i++) {
      let daysPerRow = '';
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
            daysPerRow += '<td class="hour"><p>' + snap.val()[week][day]['H' + (i + 1)] + '</p><p><strong>' +
              hoursDefinition[i] + '</strong></p></td>';
          } else {
            daysPerRow += '<td class="hour"></td>'
          }
        } else {
          daysPerRow += '<td class="hour"></td>'
        }
      }
      tableRows += `<tr>${daysPerRow}</tr>`;

    }


    scheduleGrid.innerHTML = '';
    scheduleGrid.innerHTML += '<thead><tr><th class="day-name">MONDAY</th>' +
      '<th class="day-name">TUESDAY</th>' +
      '<th class="day-name">WEDNESDAY</th>' +
      '<th class="day-name">THURSDAY</th>' +
      '<th class="day-name">FRIDAY</th>' +
      '<th class="day-name">SATURDAY</th>' +
      '<th class="day-name">SUNDAY</th></tr></thead><tbody>' + tableRows + '</tbody>';

  });
}
syncSchedule();

function syncTestimonials() {
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
syncTestimonials();

function syncClasses() {
  dbRefClasses.on('value', snap => {
    classes = [];
    for (let i = 0; i < snap.numChildren(); i++) {
      classes.push({
        img: snap.val()[i].img,
        title: snap.val()[i].title,
        price: snap.val()[i].price,
        instructor: {
          img: snap.val()[i]['instructor'].img,
          name: snap.val()[i]['instructor'].name,
        },
        rating: {
          stars: snap.val()[i]['rating'].stars,
          reviews: snap.val()[i]['rating'].reviews,
        },
        day: snap.val()[i].day,
        frequency: snap.val()[i].frequency,
        sessions: snap.val()[i].sessions
      });
    }
    loadClassCards();
  });

}
syncClasses();

function syncTrainers() {
  dbRefTrainers.on('value', snap => {
    trainers = [];
    for (let i = 0; i < 4; i++) {
      trainers.push({
        icon: snap.val()[i].icon,
        title: snap.val()[i].title,
        desc: snap.val()[i].desc
      });
    }
    loadTrainerCards();
  });
}
syncTrainers();


//Schedule Week Input eventListener that synchronizes the Schedule when a change is made.
scheduleWeek.addEventListener('input', () => syncSchedule());
//Schedule Week Input eventListener that synchronizes the Schedule when a change is made.
classFilter.addEventListener('input', () => loadClassCards());
//Feedback Form eventListener that synchronizes the Testimonials when feedback is submitted with button.
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  feedbackForm.checkValidity() ? submitForm() : alert('Form is not valid.');
});
//Feedback Form eventListener that synchronizes the Testimonials when feedback is submitted with keyup.
feedbackForm.addEventListener('keyup', (e) => {
  if(e.value == 'Enter'){
    e.preventDefault();
    feedbackForm.checkValidity() ? submitForm() : alert('Form is not valid.');
  }
});

//Override for default submit, gives an img to the new testimonial and sends it to the DB
function submitForm() {
  testimonialImgPick = Math.floor(Math.random() * (testimonialImgPool.length - 1));
  dbRefTestimonials.child(testimonialsQty).set({
    img: testimonialImgPool[testimonialImgPick],
    name: feedbackForm.elements['form-name'].value,
    txt: feedbackForm.elements['form-feedback'].value
  });
  alert('Thank you for your feedback!');
  feedbackForm.elements['form-name'].value = '';
  feedbackForm.elements['form-feedback'].value = '';
  syncTestimonials();
}

//Called by body, changes Testimonial every 10 seconds.
function changeTestimonial() {
  cycleCount < testimonialsQty - 1 ? cycleCount++ : cycleCount = 0;
  console.log('CHANGING to ' + testimonials[cycleCount].name + "'s testimonial");
  testimonialImgContainer.style.opacity = 0;
  testimonialInfoContainer.style.opacity = 0;

  setTimeout(() => {
    testimonialImg.src = imgSrcPath + testimonials[cycleCount].img;
    testimonialTxt.innerText = testimonials[cycleCount].txt;
    testimonialName.innerText = testimonials[cycleCount].name;  
  }, 500);

  setTimeout(() => {   
    testimonialImgContainer.style.opacity = 100;
    testimonialInfoContainer.style.opacity = 100;
  }, 750);

  moveProgressBar();
}

function moveProgressBar() {  
  let width = 1;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width+=0.1; 
      bar.style.width = width + '%'; 
    }
  }
}

//Called by SyncClass just after updating the classes array
function loadClassCards() {

  classCardsGrid.innerHTML = '';

  //Checks the class filter value and sorts the list by it.
  switch (classFilter.value) {
    case 'by-price':
      sortedClasses = classes.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
      break;
    case 'by-rating':
      sortedClasses = classes.sort((a, b) => {
        if (a.rating.stars < b.rating.stars) {
          return 1;
        }
        if (a.rating.stars > b.rating.stars) {
          return -1;
        }
        return 0;
      });
      break;
    case 'by-date':

      sortedClasses = classes.sort((a, b) => {
        if (numericDate(a.day) > numericDate(b.day)) {
          return 1;
        }
        if (numericDate(a.day) < numericDate(b.day)) {
          return -1;
        }
        return 0;
      });
      break;
    default:
      sortedClasses = classes;
      break;
  }

  sortedClasses.forEach((card, index) => {
    htmlStars = '';
    numberOfStars = 0;
    (card.rating.stars > 5) ? numberOfStars = 5: numberOfStars = card.rating.stars;
    for (let j = 0; j < numberOfStars; j++) {
      htmlStars += '<img src="assets/star.png">';
    }
    (index > 2) ? hiddenCard = 'hidden-card': hiddenCard = '';
    classCardsGrid.innerHTML +=
      '<div class="class-card ' + hiddenCard + ' ">' +
      '<div class="card-img-container">' +
      '<img src="' + imgSrcPath + card.img + '" class="card-img"></div>' +
      '<div class="card-info-container">' +
      '<h3 id="class1-title">' + card.title + '</h3>' +
      '<div class="main-info">' +
      '<p class="class-price">$' + card.price + '</p>' +
      '<div class="class-instructor">' +
      '<div class="instructor-img"><img src="' + imgSrcPath + card.instructor.img + '"></div>' +
      '<p class="instructor-name">' + card.instructor.name + '</p></div>' +
      '<div class="class-rating"><div class="stars">' + htmlStars + '</div>' +
      '<p class="reviews-number" id="class1-rating-reviews">(' + card.rating.reviews + ' reviews)</p></div></div>' +
      '<button class="full-class-btn">FULL CLASS</button>' +
      '<div class="class-schedule">' +
      '<p class="class-date" id="class1-day"><img src="assets/calendar.png">' + card.day + '</p>' +
      '<p class="class-frequency" id="class1-frequency"><img src="assets/clock.png">' + card.frequency + '</p>' +
      '<p class="class-sessions" id="class1-sessions"><img src="assets/book.png">' + card.sessions + ' SESSIONS</p></div><hr></div><div>'
  });
}

//Function to convert a date string to number for easier comparison
function numericDate(date) {
  numDate = date.charAt(8) + date.charAt(9) + date.charAt(10) + date.charAt(11);
  month = date.charAt(0) + date.charAt(1) + date.charAt(2);
  switch (month) {
    case 'JAN':
      numDate += 01;
      break;
    case 'FEB':
      numDate += 02;
      break;
    case 'MAR':
      numDate += 03;
      break;
    case 'APR':
      numDate += 04;
      break;
    case 'MAY':
      numDate += 05;
      break;
    case 'JUN':
      numDate += 06;
      break;
    case 'JUL':
      numDate += 07;
      break;
    case 'AUG':
      numDate += 08;
      break;
    case 'SEP':
      numDate += 09;
      break;
    case 'OCT':
      numDate += 10;
      break;
    case 'NOV':
      numDate += 11;
      break;
    case 'DEC':
      numDate += 12;
      break;
    default:
      numDate += 00;
      break;
  }

  numDate += date.charAt(4) + date.charAt(5);

  return parseInt(numDate);
}

//Loads Traiener Card Information (to be replaced)
function loadTrainerCards() {
  trainerCardsGrid.innerHTML = '';

  trainers.forEach(trainer => {
    trainerCardsGrid.innerHTML +=
      '<div class="trainer-card">' +
      '<img src="' + imgSrcPath + trainer.icon + '" class="trainer-icon">' +
      '<h3>' + trainer.title + '</h3>' +
      '<p>' + trainer.desc + '</p></div>'
  });

}

//View More/Less Button function that shows or hides extra class cards
function viewClassCards() {
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