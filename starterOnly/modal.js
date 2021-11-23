function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// ********************************************
// DOM Elements

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

// Fermer modal 
const modalFermer = document.querySelector(".close");

// Validation formulaire 
const formValide = document.getElementById("form_valide");

// Btn Fermer Modal Valide 
const btnFermerModalValide = document.querySelector(".btn__fermerModal");
// ********************************************


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// ********************************************
// TODO : fermer la modale #1
// ********************************************

// // Fermer modal 
// const modalFermer = document.querySelector(".close");

modalFermer.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";

  /* Modal formValide */
  formValide.style.display = "none";

}
// ********************************************

btnFermerModalValide.addEventListener("click", fermerModalValide);

function fermerModalValide() {

  modalbg.style.display = "none";

  /* Modal formValide */
  formValide.style.display = "none";

}


// ********************************************
// Implémenter entrées du formulaire #2

// ********************************************

// "Veuillez entrer 2 caractères ou plus pour le champ du nom."
// "Vous devez choisir une option."
// "Vous devez vérifier que vous acceptez les termes et conditions."
// "Vous devez entrer votre date de naissance."


const firstName = document.getElementById("first");


function formFirstName() {
  const errorFirstName = document.getElementById("error_first_name");
  const regexLetters = new RegExp(/^[A-Za-z-]+$/);


  if (firstName.value.length < 2) {
    errorFirstName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    errorFirstName.style.display = "block";
    return false;

  } else if (!regexLetters.test(firstName.value)) {
    errorFirstName.innerHTML = "Seul les caractéres alphanumériques sont acceptés, utilisé (-) pour les prénoms composés";
    errorFirstName.style.display = "block";
    return false

  } else {
    errorFirstName.style.display = "none";

    formValide.style.display = "block";
    return true;
  }
}

const lastName = document.getElementById("last");

function formLastName() {
  const errorLastName = document.getElementById("error_last_name");
  const regexLetters = new RegExp(/^[A-Za-z-]+$/);

  if (lastName.value.length < 2) {
    errorLastName.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    errorLastName.style.display = "block";
    return false;
  } else if (!regexLetters.test(lastName.value)) {
    errorLastName.innerHTML = "Seul les caractéres alphanumériques sont acceptés, utilisé (-) pour les noms composés";
    errorLastName.style.display = "block";
    return false
   } else {
    errorLastName.style.display = "none";

    formValide.style.display = "block";
    return true;
  }
}


const email = document.getElementById("email");

function formEmail() {
  const errorEmail = document.getElementById("error_email");
  const regexEmail = new RegExp(/\S+@\S+\.\S+/);
  if (!email.value) {
    errorEmail.innerHTML = "Veuillez renseigner votre email";
    errorEmail.style.display = "block";
    return false;
  } else if (!regexEmail.test(email.value)) {
    errorEmail.innerHTML = "Veuillez renseigner un email valide";
    errorEmail.style.display = "block";
    return false;
  } else {
    errorEmail.style.display = "none";

    formValide.style.display = "block";
    return true;
  }
}



/* LORSQUE JE VALIDE  */
const form_valide = document.getElementById("valide");

form_valide.addEventListener("submit", function (event) {
  event.preventDefault();


  formFirstName();
  formLastName();
  formEmail();


});




// ********************************************
// Ajouter confirmation quand envoie réussi #4 
// ********************************************


//Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")


// je sais pas encore comment faire 

// ********************************************
//Tests manuels #5 
// ********************************************
// Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.
// Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)