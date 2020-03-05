fetch ('https://byui-cit230.github.io/weather/data/towndata.json')
.then(
    result => {
        return result.json();
    }
)