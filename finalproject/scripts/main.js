fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {

        document.querySelector('#temple-name').textContent = 
            response[0].TempleName;


        response[0].Services.forEach(
            service => {
                document.querySelector('#service').innerHTML +=
                    `${ service }`;
            }
        )


        }
    );