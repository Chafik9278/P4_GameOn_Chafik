function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// Close modal 
const modalFermer = document.querySelector(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermer la modale *****************************
modalFermer.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}
// *******


const firstName = document.getElementById("prenom");
const lastName = document.getElementById("nom");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthday");
const quantity = document.getElementById("combien");






