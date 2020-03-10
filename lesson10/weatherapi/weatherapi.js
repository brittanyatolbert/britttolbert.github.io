const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=bd741f70ebb95aea8d862034a503c348&units=imperial';

fetch(apiURL)
    .then(
        response => {
            return response.json();
        })

    .then(
        jsObject => {
            document.querySelector('#current-temp')
                .textContent = jsObject.main.temp;

                let image = 'https://openweathermap.org/img/w/' + 
                    jsObject.weather[0].icon + '.png';

                    document.querySelector('#weather-icon')
                        .setAttribute('src', image);

                    let alt = jsObject.weather[0].description;

                    document.querySelector('#weather-icon')
                        .setAttribute('alt', alt);

                    /*let weatherIcon = document.querySelector('#weather-icon');
                    weatherIcon.setAttribute('src', image);
                    weatherIcon.setAttribute('alt', alt); */
        }
    )