const currentDate = new Date();
console.log(currentDate);

const currentYear = currentDate.getFullYear();
console.log(currentYear);

var lastModified = document.lastModified;

document.getElementById("lastModified").innerHTML = lastModified;

document.getElementById("currentYear").innerHTML = currentYear;