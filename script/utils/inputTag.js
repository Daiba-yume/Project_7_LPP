"use strict";
export function inputTag(inputId, dropdownListId, eraseIconClass) {
  // Récupère l'élément input par son ID
  const inputElement = document.getElementById(inputId);
  // Vérifie si l'élément input existe
  if (!inputElement) {
    console.error(`Input avec l'ID ${inputId} introuvable.`);
    return; // Arrête l'exécution si l'élément n'est pas trouvé
  }
  // Ajoute un écouteur d'événements pour détecter les saisies dans le champ input
  inputElement.addEventListener("input", function (e) {
    // Convertit la valeur saisie par l'utilisateur en minuscules et évite les caractères spéciaux
    const inputValue = e.target.value.trim().toLowerCase().replace(/[<>]/g, "");
    // Sélectionne tous les éléments de la liste déroulante correspondant à l'ID passé en paramètre
    const dropdownItems = document.querySelectorAll(`#${dropdownListId} li`);
    // Parcourt chaque élément de la liste déroulante
    dropdownItems.forEach((item) => {
      // Vérifie si le texte de l'élément inclut la valeur saisie
      if (item.textContent.toLowerCase().includes(inputValue)) {
        // Si oui, affiche l'élément
        item.style.display = "block";
      } else {
        // Sinon, masque l'élément
        item.style.display = "none";
      }
    });
  });
  // Ajoute un écouteur d'événements pour l'icône de réinitialisation (croix)
  const eraseIcon = document.querySelector(`.${eraseIconClass}`);
  // Vérifie si l'icône de réinitialisation a été trouvée
  if (eraseIcon) {
    // Ajoute un événement click à l'icône
    eraseIcon.addEventListener("click", () => {
      // Réinitialise la valeur du champ input à une chaîne vide
      inputElement.value = "";
      // Sélectionne tous les éléments de la liste déroulante
      const dropdownItems = document.querySelectorAll(`#${dropdownListId} li`);
      // Affiche tous les éléments de la liste déroulante
      dropdownItems.forEach((item) => {
        item.style.display = "block"; // Vous pouvez changer cela si nécessaire
      });
    });
  } else {
    // Si l'icône n'est pas trouvée, affiche un message d'erreur dans la console
    console.error(
      `Icône de la croix avec la classe ${eraseIconClass} introuvable.`
    );
  }
}
