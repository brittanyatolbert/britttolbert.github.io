/* Wednesday, 10 May, 2020*/
/* declare date variable*/

let currentDate= new Date();
let fullDate;

/* day of week*/

let daysOfWeek = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY'
];

let dayOfWeek = currentDate.getDay();

fullDate = daysOfWeek[dayOfWeek];

/*day of month*/

let dayOfMonth = currentDate.getDate();
fullDate += ', ' + dayOfMonth;

/*month*/

let months = [
    'JANUARY',
    'FEBRAURY',
    "MARCH",
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUS',
    'SEPTEMBER',
    "OCTOBER",
    'NOVEMBER',
    'DECEMBER'
]

fullDate += ' ' + months[currentDate.getMonth()];


/* get year*/
let year = currentDate.getFullYear();
fullDate += ' ' + year;

/* full date*/
document.querySelector('#current-date').textContent = fullDate;

/*hamburger selector*/

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

/*weather summary*/
let f, t, s;
t = 50;
s = 10;

if ( t <= 50 && s >= 3) {
  f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
  document.querySelector('#wind-chill').innerHTML = f.toFixed(2) + '&deg';
}
else {
  f = 'N/A'
  document.querySelector('#wind-chill').innerHTML = f;
  
}

document.querySelector('#current-temp').innerHTML = t + '&deg;'; //'50&deg;';
document.querySelector('#wind-speed').innerHTML = s + 'mph';


/*Friday Banner*/

 const pancake = new Date();
 const aside = document.querySelector('aside');
 if (pancake.getDay() === 5) {
    aside.style.display = 'block';
 }
 else {
   aside.style.display = 'none';
 }
 