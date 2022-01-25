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
    }
})

let formRdv = document.getElementById('formulaireDeRdv');
let selectService = document.querySelector('select');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let mail = document.getElementById('mail');
let tel = document.getElementById('number');
let address = document.getElementById('address');
let anniv = document.getElementById('anniv');

// console.log(selectService);

formRdv.addEventListener('submit', (e) =>{
    e.preventDefault();
    const patient = {
        nom: nom.value,
        prenom: prenom.value,
        mail: mail.value,
        telephone: tel.value,
        address: address.value,
        annivairsaire: anniv.value
    }
    if (selectService.value == 'generaliste') {
        let patientsGeneral = JSON.parse(localStorage.getItem("patientGeneral"));
        if (patientsGeneral) {
            patientsGeneral.push(patient);
            localStorage.setItem("patientGeneral",JSON.stringify(patientsGeneral));
        }else{
            patientsGeneral = [];
            patientsGeneral.push(patient);
            localStorage.setItem("patientGeneral",JSON.stringify(patientsGeneral));
        }
    }else {
        alert("Vous avez pas choisi le Medecin Generaliste");
    }
    
})