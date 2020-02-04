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

document.querySelector('#current-temp').innerHTML = '50&deg;';
document.querySelector('#wind-speed').innerHTML = '10mph';
document.querySelector('#humidity').innerHTML = '10&percnt;';