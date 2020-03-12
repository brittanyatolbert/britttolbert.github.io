const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=bd741f70ebb95aea8d862034a503c348&units=imperial';

fetch(apiURL)
    .then(response => response.json())
    .then(
        jsObject => {
            let currentTemp = jsObject.main.temp;
            let windSpeed = jsObject.wind.speed;
            let windChill = 0;

            if ( currentTemp <= 50 && windSpeed >= 3) {
                windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
              }

              document.querySelector('#currentTemp').innerHTML = currentTemp.toFixed(0) + '&deg';
              document.querySelector('#windSpeed').innerHTML = windSpeed.toFixed(0) + 'mph';
              
            if (windChill == 0) {
                document.getElementById("windChill").innerHTML = 'N/A';
            }
              else {
                document.querySelector('#windChill').innerHTML = Math.round(windChill) + '&deg';
              }

            document.querySelector('#weatherDesc').textContent = jsObject.weather[0].main;

            let imageURL = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
            document.querySelector('#weatherImage').setAttribute('src', imageURL);

            document.querySelector('#weatherImage').setAttribute('alt', jsObject.weather[0].main);
        }
    );


/*weather summary

let f, t, s;
t = 50;
s = 10;

if ( t <= 50 && s >= 3) {
  f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
  document.querySelector('#wind-chill').innerHTML = f.toFixed(2) + '&deg';
}
else {
  f = 'N/A'
  document.querySelector('#wind-chill').innerHTML = f;
  
}

document.querySelector('#current-temp').innerHTML = t + '&deg;'; //'50&deg;';
document.querySelector('#wind-speed').innerHTML = s + 'mph';
*/

