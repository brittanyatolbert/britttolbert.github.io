function getWeatherSumW(){

  const apiURLWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=bd741f70ebb95aea8d862034a503c348&units=imperial';

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


           let imageURL = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';

            document.querySelector('#weatherImage').setAttribute('src', imageURL);

            document.querySelector('#weatherImage').setAttribute('alt', jsObject.weather[0].main);

            document.querySelector('#weatherDesc').textContent = jsObject.weather[0].main;

        
        }
    );
  }

  function getWeatherSumA(){

    const apiURLWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5295903&appid=bd741f70ebb95aea8d862034a503c348&units=imperial';
  
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
  
                document.querySelector('#currentTemp1').innerHTML = currentTemp.toFixed(0) + '&deg';
                document.querySelector('#windSpeed1').innerHTML = windSpeed.toFixed(0) + 'mph';
                document.querySelector('#humidity1').innerHTML = humidity.toFixed(0) + '%';
                
              if (windChill == 0) {
                  document.getElementById("windChill").innerHTML = 'N/A';
              }
                else {
                  document.querySelector('#windChill1').innerHTML = Math.round(windChill) + '&deg';
                }
  
  
              let imageURL = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
              
  
              document.querySelector('#weatherImage1').setAttribute('src', imageURL);
  
              document.querySelector('#weatherImage1').setAttribute('alt', jsObject.weather[0].main);
  
              document.querySelector('#weatherDesc1').textContent = jsObject.weather[0].main;
  
          
          }
      );
    }

    function getWeatherSumP(){

      const apiURLWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5780026&appid=bd741f70ebb95aea8d862034a503c348&units=imperial';
    
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
    
                  document.querySelector('#currentTemp2').innerHTML = currentTemp.toFixed(0) + '&deg';
                  document.querySelector('#windSpeed2').innerHTML = windSpeed.toFixed(0) + 'mph';
                  document.querySelector('#humidity2').innerHTML = humidity.toFixed(0) + '%';
                  
                if (windChill == 0) {
                    document.getElementById("windChill").innerHTML = 'N/A';
                }
                  else {
                    document.querySelector('#windChill2').innerHTML = Math.round(windChill) + '&deg';
                  }
    
    
                let imageURL = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    
                document.querySelector('#weatherImage2').setAttribute('src', imageURL);
    
                document.querySelector('#weatherImage2').setAttribute('alt', jsObject.weather[0].main);
    
                document.querySelector('#weatherDesc2').textContent = jsObject.weather[0].main;
    
            
            }
        );
      }

      function getWeatherSumM(){

        const apiURLWeather = 'https://api.openweathermap.org/data/2.5/weather?id=3530597&appid=bd741f70ebb95aea8d862034a503c348&units=imperial';
      
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
      
                    document.querySelector('#currentTemp3').innerHTML = currentTemp.toFixed(0) + '&deg';
                    document.querySelector('#windSpeed3').innerHTML = windSpeed.toFixed(0) + 'mph';
                    document.querySelector('#humidity3').innerHTML = humidity.toFixed(0) + '%';
                    
                  if (windChill == 0) {
                      document.getElementById("windChill").innerHTML = 'N/A';
                  }
                    else {
                      document.querySelector('#windChill3').innerHTML = Math.round(windChill) + '&deg';
                    }
      
      
                  let imageURL = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
      
                  document.querySelector('#weatherImage3').setAttribute('src', imageURL);
      
                  document.querySelector('#weatherImage3').setAttribute('alt', jsObject.weather[0].main);
      
                  document.querySelector('#weatherDesc3').textContent = jsObject.weather[0].main;
      
              
              }
          );
        }