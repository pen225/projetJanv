let patientsChirugie = JSON.parse(localStorage.getItem("patientChirugie"));
for (let i = 0; i < patientsChirugie.length; i++) {
    const element = patientsChirugie[i];
    console.log(element);


    document.querySelector('tbody').innerHTML += `
    <tr>
    <td>${i+1}</td>
    <td>${element.nom}</td>
    <td>${element.prenom}</td>
    <td>${element.telephone}</td>
    </tr>
    `;
}