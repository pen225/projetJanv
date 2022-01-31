// Partie covid
let sub = document.getElementById('searchCovid');
let input = document.getElementById('inputSearchCovid');
let nameCountry = document.getElementById('nameCountry');

// Afficher les infos d'un pays
fetch("https://api.covid19api.com/summary")
        .then((response) => response.json())
        .then((data) => {
        afficherCas(data)
        // console.log(data);
       
    })
// Fonction Afficher les cas

function afficherCas(pen){
    let country= pen.Countries;
    console.log(country[45]);
    document.querySelector('.afficheCas').innerHTML=`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Nombre de cas confirmé</h5>
      <h6 class="card-subtitle mb-2 text-muted">${NewConfirmed}</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Nombre de cas confirmé</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Nombre de cas confirmé</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
    
    `;
    
}


// Recherche
sub.addEventListener('submit', (e) =>{
    e.preventDefault();
    afficheInput = input.value;
    console.log(afficheInput);

    fetch("https://api.covid19api.com/countries")
        .then((response) => response.json())
        .then((data) => {
        // affichePays(data)
        // console.log(data);
        for (const pays of data) {
            console.log(pays.Country);
            if (pays.Country = "Mali") {
                console.log(pays.ISO2);
            }

            // break;
        }


    })



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
    }else if(selectService.value == 'ophtamologie') {
        let patientsOphtamologie = JSON.parse(localStorage.getItem("patientOphtamologie"));
        if (patientsOphtamologie) {
            patientsOphtamologie.push(patient);
            localStorage.setItem("patientOphtamologie",JSON.stringify(patientsOphtamologie));
        }else{
            patientsOphtamologie = [];
            patientsOphtamologie.push(patient);
            localStorage.setItem("patientOphtamologie",JSON.stringify(patientsOphtamologie));
        }
    }else if (selectService.value == 'dermatologie') {
        let patientsDermatologie = JSON.parse(localStorage.getItem("patientDermatologie"));
        if (patientsDermatologie) {
            patientsDermatologie.push(patient);
            localStorage.setItem("patientDermatologie",JSON.stringify(patientsDermatologie));
        }else{
            patientsDermatologie = [];
            patientsDermatologie.push(patient);
            localStorage.setItem("patientDermatologie",JSON.stringify(patientsDermatologie));
        }
    }else if (selectService.value == 'chirugie') {
        let patientsChirugie = JSON.parse(localStorage.getItem("patientChirugie"));
        if (patientsChirugie) {
            patientsChirugie.push(patient);
            localStorage.setItem("patientChirugie",JSON.stringify(patientsChirugie));
        }else{
            patientsChirugie = [];
            patientsChirugie.push(patient);
            localStorage.setItem("patientChirugie",JSON.stringify(patientsChirugie));
        }
    }
    
})

// Slicke carousel
  function chargeplay (){
    $('.galerie').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
      });
      stylePrevAndNext();
  }





function stylePrevAndNext(){
    let previousAll = document.querySelectorAll('.slick-prev');
    let nextAll = document.querySelectorAll('.slick-next');
    console.log(previousAll);

    for (let i = 0; i < previousAll.length; i++) {
        const element = previousAll[i];
        // console.log(element);
        element.innerHTML = `<i class="fas fa-arrow-circle-left"></i>`
    }
    for (let i = 0; i < nextAll.length; i++) {
        const element = nextAll[i];
        console.log(element);
        element.innerHTML = `<i class="fas fa-arrow-circle-right"></i>`
    }
}


fetch(`https://api.themoviedb.org/3/search/movie?api_key=7843f8d22a43911f15301ef8d76338ae&query=covid`)
.then((response) => response.json())
.then((data) => {
    // console.log(data.results);
    let dataElements = data.results;
    for (let i = 0; i < dataElements.length; i++) {
        const elements = dataElements[i];

        // console.log(elements);
        document.querySelector('.galerie').innerHTML += `
        <div class="card  style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500${elements.backdrop_path}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${elements.title}</h5>
                </div>
        </div>
        `;
    }

    chargeplay();
})



