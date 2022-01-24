// fetch("https://coronavirusapifr.herokuapp.com/data/live/paris")
// .then((response) => response.json())
// .then((data) => console.log(data))


let apikey = 'dd864602b809434c9b1a9b3a3c20192d';


// fetch(`https://api.covidactnow.org/v2/states.timeseries.json?apiKey=${apikey}`)
// .then((response) => response.json())
// .then((data) => console.log(data))
fetch("https://api.covid19api.com/summary")
.then((response) => response.json())
.then((data) => {
    const pays = data.Countries;
    console.log(pays);
    const tPays= [];
    for (let i = 0; i < pays.length; i++) {
        const element = pays[i];
        console.log(element.TotalConfirmed);
        if (element.Country = ) {
            
        }
    }
})

