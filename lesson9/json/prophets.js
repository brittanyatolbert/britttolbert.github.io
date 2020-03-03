fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
    .then(
        result => {
            return result.json();
        }
    )
    .then(prophetList => {
        let prophets = prophetList.prophets;

        prophets.forEach(prophet => {
                console.log(prophet.name + ' ' + prophet.lastname);
            })

        });