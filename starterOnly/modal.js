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
// ********************************************
const firstName = document.getElementById("first");

// ********************************************

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

// ********************************************
// ********************************************
const lastName = document.getElementById("last");

// ********************************************
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


// ********************************************
// ********************************************
const email = document.getElementById("email");

// ********************************************
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

// ********************************************
// ********************************************
const birthdate = document.getElementById("birthdate");

// ********************************************

function formBirthDate() {
  const errorBirthdate = document.getElementById("error_birthdate");
  if (!birthdate.value) {
    errorBirthdate.innerHTML = "Veuillez renseigner votre date d'anniversaire";
    errorBirthdate.style.display = "block";
    return false;
  } else if (birthdate.type !== "date") {
    errorBirthdate.innerHTML = "Veuillez renseigner une date";
    errorBirthdate.style.display = "block";
  } else {
    errorBirthdate.style.display = "none";
    return true;
  }
}

// ********************************************
// ********************************************

const partEvent = document.getElementById("quantity");

// ********************************************
function formPartEvent() {
  const errorPartEvent = document.getElementById("error_partevent");
  const regexPartEvent = new RegExp("^[0-9][0-9]?$|^99$");
  if (!partEvent.value) {
    errorPartEvent.innerHTML =
      "Veuillez renseigner votre nombre de participation";
    errorPartEvent.style.display = "block";
    return false;
  } else if (!regexPartEvent.test(partEvent.value)) {
    errorPartEvent.innerHTML = "Veuillez renseigner un nombre entre 0 et 99";
    errorPartEvent.style.display = "block";
    return false;
  } else {
    errorPartEvent.style.display = "none";
    return true;
  }
}

// ********************************************
const checkCondition = document.getElementById("checkbox1");

// ********************************************
function formCheckCondition() {
  const errorCheckCondition = document.getElementById("error_checkCondition");
  if (!checkCondition.checked) {
    errorCheckCondition.innerHTML =
      "Veuillez accepter les conditions d'utilisation";
    errorCheckCondition.style.display = "block";
    return false;
  } else {
    errorCheckCondition.style.display = "none";
    return true;
  }
}



// ********************************************
const radioLocation = document.getElementsByName("location");

// ********************************************
function formRadioLocation() {
  const errorRadioLocation = document.getElementById("error_radioLocation");
  const result = Array.from(radioLocation).filter(
    (radio) => radio.checked === true
  );
  if (result.length > 0) {
    errorRadioLocation.style.display = "none";
    return true;
  } else {
    errorRadioLocation.innerHTML = "Veuillez selectionner une ville";
    errorRadioLocation.style.display = "block";
    return false;
  }
}



// ********************************************

/* LORSQUE JE VALIDE  */
const form_valide = document.getElementById("valide");

form_valide.addEventListener("submit", function (event) {
  event.preventDefault();


  formFirstName();
  formLastName();
  formEmail();
  formBirthDate();
  formPartEvent();
  formRadioLocation();
  formCheckCondition();

});


// ********************************************
//Tests manuels #5 
// ********************************************
// Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.
// Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)