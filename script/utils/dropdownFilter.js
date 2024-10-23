// Fonction pour filtrer les élmts du dropdown selon l'entrée de l'user
export function filterDropdown(inputId, dropdownListId) {
  // Ajout un écouteur d'événements sur l'input spécifié par inputId
  document.getElementById(inputId).addEventListener("input", function (e) {
    // Récupère la valeur saisie dans l'input et la convertit en minuscules
    const inputValue = e.target.value.toLowerCase();

    // Sélectionne tous les éléments <li> à l'intérieur de la liste spécifiée par dropdownListId
    const dropdownItems = document.querySelectorAll(`#${dropdownListId} li`);

    // Parcourt chaque élément de la liste dropdown
    dropdownItems.forEach((item) => {
      // On Vérifie si le texte de l'élément inclut la valeur saisie par l'user
      if (item.textContent.toLowerCase().includes(inputValue)) {
        // Si oui, affiche l'élément
        item.style.display = "block";
      } else {
        // Sinon, cache l'élément
        item.style.display = "none";
      }
    });
  });
}
