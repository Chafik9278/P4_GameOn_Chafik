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

// Validation formulaire
const formValide = document.getElementById("form_valide");

// // Btn Fermer Modal Valide
// const btnFermerModalValide = document.querySelector(".btn__fermerModal");

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
    errorFirstName.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    errorFirstName.style.display = "block";
    return false;
  } else {
    errorFirstName.style.display = "none";

    formValide.style.display = "block";
    return true;
  }
}

/* LORSQUE JE VALIDE  */
const form_valide = document.getElementById("valide");

form_valide.addEventListener("submit", function (event) {
  event.preventDefault();

  formFirstName();
});
