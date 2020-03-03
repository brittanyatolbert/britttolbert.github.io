fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
    .then(
        result => {
            return result.json();
        }
    )
    .then(
        prophets => {
        console.log(prophets);
        }
    )