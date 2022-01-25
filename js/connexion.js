let inputName = document.getElementById('nom');
let inputPassword = document.getElementById('pass');
const form = document.querySelector('form');


console.log(inputName, inputPassword);


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    inputName = inputName.value;
    inputPassword = +inputPassword.value;
    if (inputName == 'pen' && inputPassword == 1235) {
        console.log("Bonjour penuel Essoh");
    }else{
        console.log("Veuillez contactez le service informatique");
    }
});