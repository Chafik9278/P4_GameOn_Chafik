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

// (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
// (2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :
// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
// Les données doivent être saisies correctement :
// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
// (3) L'adresse électronique est valide.
// (4) Pour le nombre de concours, une valeur numérique est saisie.
// (5) Un bouton radio est sélectionné.
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
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
    errorCheckCondition.innerHTML = "Veuillez accepter les conditions d'utilisation";
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
 
  if (radioLocation.length > 0) {
    errorRadioLocation.style.display = "none";
    return true;
    
  } else {
    errorRadioLocation.innerHTML = "Veuillez selectionner une ville";
    errorRadioLocation.style.display = "block";
    return false;
  }
}

// ********************************************
// Ajouter validation ou messages d'erreur #3
// ********************************************

// Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :

// "Veuillez entrer 2 caractères ou plus pour le champ du nom."
// "Vous devez choisir une option."
// "Vous devez vérifier que vous acceptez les termes et conditions."
// "Vous devez entrer votre date de naissance."
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

  if (
    formFirstName() &&
    formLastName() &&
    formEmail() &&
    formBirthDate() &&
    formPartEvent() &&
    formCheckCondition() &&
    formRadioLocation()
  ) {
    // underscore permet de reinitialiser le doc 
  } else 
  
  {
    formValide.style.display = "none";
  }

});

// ********************************************
// Ajouter confirmation quand envoie réussi #4
// ********************************************
// Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")


// ********************************************
// Tests manuels #5
// ********************************************
// Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.
// Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)