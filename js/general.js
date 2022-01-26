let infoGeneral = JSON.parse(localStorage.getItem("patientGeneral"));
console.log(infoGeneral);
for (let i = 0; i < infoGeneral.length; i++) {
    const element = infoGeneral[i];
    console.log(element);


    document.querySelector('tbody').innerHTML += `
    <tr>
    <td>${i+1}</td>
    <th></th>
    <td>${element.nom}</td>
    <td>${element.prenom}</td>
    <td>${element.telephone}</td>
    </tr>
    `;
}