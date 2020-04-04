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



fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {

        document.querySelector('#temple-name').textContent = response[0].TempleName;

        /*document.querySelector('#street-line-1').textContent = response[0].StreetLine1;*/
    
        response[0].Services.forEach(service => {document.querySelector('#service').innerHTML +=`${ service }`;})
        response[0].OrdinanceSchedule.forEach(schedule => {document.querySelector('#schedule').textContent +=`${ schedule}`;})
        response[0].History.forEach(history => {document.querySelector('#history').textContent +=`${ history }`;})
        
        document.querySelector('#temple-name').textContent = response[1].TempleName;
        response[1].Services.forEach(service => {document.querySelector('#service').innerHTML +=`${ service }`;})
        response[1].OrdinanceSchedule.forEach(schedule => {document.querySelector('#schedule').textContent +=`${ schedule}`;})
        response[1].History.forEach(history => {document.querySelector('#history').textContent +=`${ history }`;})



        }
    );

