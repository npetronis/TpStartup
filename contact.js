// Sélectionnez tous les champs d'entrée du formulaire
const inputFields = document.querySelectorAll('.input');

// Boucle sur chaque champ d'entrée pour ajouter des écouteurs d'événements
inputFields.forEach(inputField => {
    // Ajoute un écouteur d'événements pour l'événement "input" (lorsque l'utilisateur tape du texte)
    inputField.addEventListener('input', () => {
        // Efface le texte par défaut lorsqu'un utilisateur commence à taper dans un champ d'entrée
        inputField.nextElementSibling.classList.add('active');
    });

    // Ajoute un écouteur d'événements pour l'événement "blur" (lorsque le champ d'entrée perd le focus)
    inputField.addEventListener('blur', () => {
        // Vérifie si le champ d'entrée est vide, puis masque le texte par défaut si c'est le cas
        if (inputField.value === '') {
            inputField.nextElementSibling.classList.remove('active');
        }
    });
});