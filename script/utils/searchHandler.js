import { recipes } from "../data/recipes.js";

// Fonction pour enlever les espaces inutiles et tout mettre en minuscules
function simplifierTexte(texte) {
  return texte.toLowerCase().trim();
}

// Fonction de recherche qui va chercher dans le titre et la description
function rechercherRecettes(termeRecherche) {
  // On simplifie le terme de recherche (on enlève les espaces inutiles, on met en minuscule)
  const termeSimplifie = simplifierTexte(termeRecherche);

  // On filtre les recettes qui correspondent
  const resultats = recipes.filter(function (recipe) {
    const titreSimplifie = simplifierTexte(recipe.name);
    const descriptionSimplifiee = simplifierTexte(recipe.description);

    // On vérifie si le terme est présent dans le titre ou la description
    return (
      titreSimplifie.includes(termeSimplifie) ||
      descriptionSimplifiee.includes(termeSimplifie)
    );
  });

  // On affiche les résultats dans la console (ou tu peux les afficher dans le HTML plus tard)
  console.log(resultats);
}

// Exemple d'utilisation avec un terme de recherche
rechercherRecettes("coco");
