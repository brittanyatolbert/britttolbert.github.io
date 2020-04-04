const apiURLWeather = 'https://api.openweathermap.org/data/2.5/weather?id=4140963&appid=bd741f70ebb95aea8d862034a503c348&units=imperial';

fetch(apiURLWeather)
    .then(response => response.json())
    .then(
        jsObject => {
            let currentTemp = jsObject.main.temp;
            let windSpeed = jsObject.wind.speed;
            let windChill = 0;
            let humidity =jsObject.main.humidity;

            if ( currentTemp <= 50 && windSpeed >= 3) {
                windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
              }

              document.querySelector('#currentTemp').innerHTML = currentTemp.toFixed(0) + '&deg';
              document.querySelector('#windSpeed').innerHTML = windSpeed.toFixed(0) + 'mph';
              document.querySelector('#humidity').innerHTML = humidity.toFixed(0) + '%';
              
            if (windChill == 0) {
                document.getElementById("windChill").innerHTML = 'N/A';
            }
              else {
                document.querySelector('#windChill').innerHTML = Math.round(windChill) + '&deg';
              }


            // let imageURL = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
            let imageURL = 'https://tiendzung96.github.io/cit230/super-accurate-weather/images/weather-icon/' + jsObject.weather[0].icon + '.png';

            document.querySelector('#weatherImage').setAttribute('src', imageURL);

            document.querySelector('#weatherImage').setAttribute('alt', jsObject.weather[0].main);

            document.querySelector('#weatherDesc').textContent = jsObject.weather[0].main;

        
        }
    );