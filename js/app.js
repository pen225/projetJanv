fetch("https://coronavirusapifr.herokuapp.com/data/live/france")
.then((response) => response.json())
.then((data) => console.log(data))
