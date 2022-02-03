let infoGeneral = JSON.parse(localStorage.getItem("patientGeneral"));
console.log(infoGeneral);
for (let i = 0; i < infoGeneral.length; i++) {
    const element = infoGeneral[i];
    // console.log(element);


    document.querySelector('tbody').innerHTML += `
    <tr>
    <td><span><i class="far fa-trash-alt" onclick ="supprimer()"></i></span><i class="far fa-edit" onclick ="modifier(${i})"></i></span>${i+1}</td>
    <td>${element.nom}</td>
    <td>${element.prenom}</td>
    <td>${element.telephone}</td>
    </tr>
    `;
}

const supprimer = () =>{
    let deleteIndex = 1;
    delete infoGeneral['patientGeneral'][deleteIndex];
    
}



const modifier = () =>{
    console.log("Modifier");
}