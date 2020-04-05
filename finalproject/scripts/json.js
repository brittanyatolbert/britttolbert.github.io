function getWashington(){

    fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {

        document.querySelector('#temple-name').textContent = response[0].TempleName;
        document.querySelector('#streetLine1').textContent = response[0].StreetLine1;
        document.querySelector('#city').textContent = response[0].City;
        document.querySelector('#state').textContent = response[0].State;
        document.querySelector('#country').textContent = response[0].Country;
        document.querySelector('#zip').textContent = response[0].Zip;
        
        response[0].Services.forEach(service => {document.querySelector('#service').innerHTML +=`${ service }`;})
        response[0].OrdinanceSchedule.forEach(schedule => {document.querySelector('#schedule').innerHTML +=`${ schedule }`;})
        response[0].TempleClosure.forEach(closure => {document.querySelector('#closure').innerHTML +=`${ closure }`;})
        //response[0].Histry.forEach(history => {document.querySelector('#history').innerHTML +=`${ history }`;})
        document.querySelector('#history').textContent = response[0].History;
        }
    );
};

function getGilbert(){

    fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {

        document.querySelector('#temple-name1').textContent = response[1].TempleName;
        document.querySelector('#streetLine11').textContent = response[1].StreetLine1;
        document.querySelector('#city1').textContent = response[1].City;
        document.querySelector('#state1').textContent = response[1].State;
        document.querySelector('#country1').textContent = response[1].Country;
        document.querySelector('#zip1').textContent = response[1].Zip;
        
        response[1].Services.forEach(service => {document.querySelector('#service1').innerHTML +=`${ service }`;})
        response[1].OrdinanceSchedule.forEach(schedule => {document.querySelector('#schedule1').innerHTML +=`${ schedule }`;})
        response[1].TempleClosure.forEach(closure => {document.querySelector('#closure1').innerHTML +=`${ closure }`;})
        //response[1].Histry.forEach(history => {document.querySelector('#history1').innerHTML +=`${ history }`;})
        document.querySelector('#history1').textContent = response[1].History;
        }
    );
};

function getProvo(){

    fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {

        document.querySelector('#temple-name2').textContent = response[2].TempleName;
        document.querySelector('#streetLine12').textContent = response[2].StreetLine1;
        document.querySelector('#city2').textContent = response[2].City;
        document.querySelector('#state2').textContent = response[2].State;
        document.querySelector('#country2').textContent = response[2].Country;
        document.querySelector('#zip2').textContent = response[2].Zip;
        
        response[2].Services.forEach(service => {document.querySelector('#service2').innerHTML +=`${ service }`;})
        response[2].OrdinanceSchedule.forEach(schedule => {document.querySelector('#schedule2').innerHTML +=`${ schedule }`;})
        response[2].TempleClosure.forEach(closure => {document.querySelector('#closure2').innerHTML +=`${ closure }`;})
        //response[2].Histry.forEach(history => {document.querySelector('#history2').innerHTML +=`${ history }`;})
        document.querySelector('#history2').textContent = response[2].History;
        }
    );
};

function getMexico(){

    fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {

        document.querySelector('#temple-name3').textContent = response[3].TempleName;
        document.querySelector('#streetLine13').textContent = response[3].StreetLine1;
        document.querySelector('#city3').textContent = response[3].City;
        document.querySelector('#state3').textContent = response[3].State;
        document.querySelector('#country3').textContent = response[3].Country;
        document.querySelector('#zip3').textContent = response[3].Zip;
        
        response[3].Services.forEach(service => {document.querySelector('#service3').innerHTML +=`${ service }`;})
        response[3].OrdinanceSchedule.forEach(schedule => {document.querySelector('#schedule3').innerHTML +=`${ schedule }`;})
        response[3].TempleClosure.forEach(closure => {document.querySelector('#closure3').innerHTML +=`${ closure }`;})
        //response[3].Histry.forEach(history => {document.querySelector('#history3').innerHTML +=`${ history }`;})
        document.querySelector('#history3').textContent = response[3].History;
        }
    );
};

