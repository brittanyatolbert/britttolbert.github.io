const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=bd741f70ebb95aea8d862034a503c348&units=imperial';

fetch(apiURL)
    .then(
        response => {
            response.json();
        })

    .then(
        jsObject => {
            console.log(jsObject);
        }
    )