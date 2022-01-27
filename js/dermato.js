let patientsDermatologie = JSON.parse(localStorage.getItem("patientDermatologie"));
for (let i = 0; i < patientsDermatologie.length; i++) {
    const element = patientsDermatologie[i];
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