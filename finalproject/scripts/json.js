fetch('json/temples.json')
    .then(
        response => {
        response.json();
        })

    .then(
        response => {

response.forEach(
    response => {
    if (response.TempleName === 'Washington DC Temple') {
        document.querySelector('#templeName').textContent = response.TempleName;
        document.querySelector('#streetLine1').textContent = response.StreetName1;
        document.querySelector('#city').textContent = response.City;
        document.querySelector('#telephone').textContent = response.Telephone;
        document.querySelector('#email').textContent = response.Email;
        document.querySelector('#services').textContent = response.Services;
        document.querySelector('#history').textContent = response.History;
        document.querySelector('#ordinanceSchedule').textContent = response.OrdinanceSchedule;
        document.querySelector('#templeClosure').textContent = response.TempleClosure;
    }
    else if (response.TempleName === 'Gilbert AZ Temple'){
        document.querySelector('#templeName').textContent = response.TempleName;
        document.querySelector('#streetLine1').textContent = response.StreetName1;
        document.querySelector('#city').textContent = response.City;
        document.querySelector('#telephone').textContent = response.Telephone;
        document.querySelector('#email').textContent = response.Email;
        document.querySelector('#services').textContent = response.Services;
        document.querySelector('#history').textContent = response.History;
        document.querySelector('#ordinanceSchedule').textContent = response.OrdinanceSchedule;
        document.querySelector('#templeClosure').textContent = response.TempleClosure;
    }
    else if (response.TempleName === 'Provo City Center UT Temple'){
        document.querySelector('#templeName').textContent = response.TempleName;
        document.querySelector('#streetLine1').textContent = response.StreetName1;
        document.querySelector('#city').textContent = response.City;
        document.querySelector('#telephone').textContent = response.Telephone;
        document.querySelector('#email').textContent = response.Email;
        document.querySelector('#services').textContent = response.Services;
        document.querySelector('#history').textContent = response.History;
        document.querySelector('#ordinanceSchedule').textContent = response.OrdinanceSchedule;
        document.querySelector('#templeClosure').textContent = response.TempleClosure;
    }
    else if (response.TempleName === 'Mexico City MX Temple'){
        document.querySelector('#templeName').textContent = response.TempleName;
        document.querySelector('#streetLine1').textContent = response.StreetName1;
        document.querySelector('#streeLine2').textContent = response.StreetName2;
        document.querySelector('#city').textContent = response.City;
        document.querySelector('#telephone').textContent = response.Telephone;
        document.querySelector('#email').textContent = response.Email;
        document.querySelector('#services').textContent = response.Services;
        document.querySelector('#history').textContent = response.History;
        document.querySelector('#ordinanceSchedule').textContent = response.OrdinanceSchedule;
        document.querySelector('#templeClosure').textContent = response.TempleClosure;
    }

    });


        });