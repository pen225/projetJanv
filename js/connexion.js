let service = document.getElementById('service');
let inputPassword = document.getElementById('pass');
const form = document.querySelector('form');


console.log(service, inputPassword);


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    service = service.value;
    inputPassword = +inputPassword.value;
    
    if (service == 'generaliste' && inputPassword == 1235) {
        location.assign('http://127.0.0.1:5500/html/general.html');

    }else if (service == 'ophtamologie' && inputPassword == 1235) {
        location.assign('http://127.0.0.1:5500/html/ophtamologie.html');
    }else if (service == 'dermatologie' && inputPassword == 1235) {
        location.assign('http://127.0.0.1:5500/html/dermato.html');
    }else if (service == 'chirugie' && inputPassword == 1235) {
        location.assign('http://127.0.0.1:5500/html/chirugie.html');
    }else{
        alert("Veuillez contacter le service informatique");
        location.reload('http://127.0.0.1:5500/html/connexion.html?#!');
    }
});