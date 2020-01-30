/* Wednesday, 10 May, 2020*/
/* declare date variable*/

let currentDate= new Date();
let fullDate;

/* day of week*/

let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let dayOfWeek = currentDate.getDay();

fullDate = daysOfWeek[dayOfWeek];

console.log(dayOfWeek);
console.log(fullDate);


/*day of month*/

/*month*/

/* get year*/
let year = currentDate.getFullYear();

/* full date*/

console.log(year);
console.log(currentDate);
