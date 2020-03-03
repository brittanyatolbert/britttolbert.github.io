fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
    .then(
        result => {
            return result.json();
        }
    )
    .then(prophetList => {
        let prophets = prophetList.prophets;

        prophets.forEach(prophet => {
                let article = document.createElement('article');
                
                let h1 = document.createElement('h1');
                h1.textContent = '${prophet.name} ${prophet.lastname}';

                article.appendChild(h1);

                document.querySelector('#prophets')[0].appendChild('article');


            })


        });