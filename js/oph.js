let patientsOphtamologie = JSON.parse(localStorage.getItem("patientOphtamologie"));
for (let i = 0; i < patientsOphtamologie.length; i++) {
    const element = patientsOphtamologie[i];
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