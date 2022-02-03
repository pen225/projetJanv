let infoGeneral = JSON.parse(localStorage.getItem("patientGeneral"));
console.log(infoGeneral);
for (let i = 0; i < infoGeneral.length; i++) {
    const element = infoGeneral[i];
    // console.log(element);


    document.querySelector('tbody').innerHTML += `
    <tr>
    <td><span><i class="far fa-trash-alt" onclick ="supprimer(${i})"></i></span><i class="far fa-edit" onclick ="modifier(${i})"></i></span>${i+1}</td>
    <td>${element.nom}</td>
    <td>${element.prenom}</td>
    <td>${element.telephone}</td>
    </tr>
    `;
}

const supprimer = (index) =>{
    let ind = infoGeneral.indexOf(infoGeneral[index])
    infoGeneral.splice(ind, 1)
    localStorage.setItem("patientGeneral",JSON.stringify(infoGeneral))
    location.reload('../html/general.html')
}



const modifier = (index) =>{
    console.log(infoGeneral[index]);

    document.querySelector(".contentGeneral").innerHTML=`
    <div class="card text-center bg-light" id="rendezVous">
    <div class="card-header">
      <h2 class="text-muted">Prendre un rendez-vous</h2>
    </div>
    <div class="card-body">
      <p class="card-text">Prenez rendez-vous avec nous via notre application en ligne.</p>

      <div class="container ">
        <form class="row g-3" id="formulaireDeRdv">
          <div class="col-md-6">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" aria-label="First name" required>
          </div>
          <div class="col-md-6">
            <label for="prenom" class="form-label">Prenom</label>
            <input type="text" class="form-control" aria-label="Last name" id="prenom" required>
          </div>
          <div class="col-md-6">
            <label for="mail" class="form-label">Email</label>
            <input type="email" class="form-control" id="mail" required>
          </div>
          <div class="col-md-6">
            <label for="number" class="form-label">Tel</label>
            <input type="tel" class="form-control" id="number" required>
          </div>
          <div class="col-12">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" id="address" placeholder="Cocody Abidjan" required>
          </div>
          <div class="col-md-6">
            <label for="anniv" class="form-label">Anniversaire</label>
            <input type="date" class="form-control" id="anniv" required>
          </div>
          <div class="col-md-6">
            <label for="service" class="form-label">Choisir un service</label>
            <select id="service" class="form-select">
              <option value="generaliste" selected>Généraliste</option>
              <option value="ophtamologie">Ophtamologie</option>
              <option value="dermatologie">Dermatologie</option>
              <option value="chirugie">Chirugie</option>
            </select>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary text-white">Enregistrer</button>
          </div>
        </form>
      </div>

    </div>
  </div>
    
    `;


    document.getElementById("nom").value=infoGeneral[index].nom;
    document.getElementById("prenom").value=infoGeneral[index].prenom;
    document.getElementById("mail").value=infoGeneral[index].mail;
    document.getElementById("number").value=infoGeneral[index].telephone;
    document.getElementById("address").value=infoGeneral[index].address;
    document.getElementById("anniv").value=infoGeneral[index].anniversaire;

    document.getElementById("formulaireDeRdv").addEventListener('submit',(e) =>{
      e.preventDefault();
      console.log(index);
      
      infoGeneral[index].nom=document.getElementById("nom").value;
      infoGeneral[index].prenom=document.getElementById("prenom").value;
      infoGeneral[index].mail=document.getElementById("mail").value;
      infoGeneral[index].telephone=document.getElementById("number").value;
      infoGeneral[index].address=document.getElementById("address").value;
      infoGeneral[index].anniversaire=document.getElementById("anniv").value;

      localStorage.setItem("patientGeneral",JSON.stringify(infoGeneral))
      location.reload('../html/general.html')
    })
}