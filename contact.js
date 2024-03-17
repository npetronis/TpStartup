document.addEventListener("DOMContentLoaded", function() {
    // Vérifiez si l'élément avec l'ID 'nameInput' existe avant de l'utiliser
    const nameInput = document.getElementById('nameInput');
    if (nameInput) {
        nameInput.addEventListener('focus', function() {
            const associatedLabel = nameInput.parentElement.querySelector('label');
            if (associatedLabel) {
                associatedLabel.style.display = 'none';
            }
        });

        nameInput.addEventListener('blur', function() {
            if (nameInput.value === '') {
                const associatedLabel = nameInput.parentElement.querySelector('label');
                if (associatedLabel) {
                    associatedLabel.style.display = 'block';
                }
            }
        });
    } else {
        console.error("L'élément avec l'ID 'nameInput' n'existe pas dans le document.");
    }

    // Répétez le même processus pour les autres éléments du formulaire
    const emailInput = document.getElementById('emailInput');
    if (emailInput) {
        emailInput.addEventListener('focus', function() {
            const associatedLabel = emailInput.parentElement.querySelector('label');
            if (associatedLabel) {
                associatedLabel.style.display = 'none';
            }
        });

        emailInput.addEventListener('blur', function() {
            if (emailInput.value === '') {
                const associatedLabel = emailInput.parentElement.querySelector('label');
                if (associatedLabel) {
                    associatedLabel.style.display = 'block';
                }
            }
        });
    } else {
        console.error("L'élément avec l'ID 'emailInput' n'existe pas dans le document.");
    }

    // Répétez ce processus pour les deux derniers éléments du formulaire (phoneInput et messageInput)
    const phoneInput = document.getElementById('phoneInput');
    if (phoneInput) {
        phoneInput.addEventListener('focus', function() {
            const associatedLabel = phoneInput.parentElement.querySelector('label');
            if (associatedLabel) {
                associatedLabel.style.display = 'none';
            }
        });

        phoneInput.addEventListener('blur', function() {
            if (phoneInput.value === '') {
                const associatedLabel = phoneInput.parentElement.querySelector('label');
                if (associatedLabel) {
                    associatedLabel.style.display = 'block';
                }
            }
        });
    } else {
        console.error("L'élément avec l'ID 'phoneInput' n'existe pas dans le document.");
    }

    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.addEventListener('focus', function() {
            const associatedLabel = messageInput.parentElement.querySelector('label');
            if (associatedLabel) {
                associatedLabel.style.display = 'none';
            }
        });

        messageInput.addEventListener('blur', function() {
            if (messageInput.value === '') {
                const associatedLabel = messageInput.parentElement.querySelector('label');
                if (associatedLabel) {
                    associatedLabel.style.display = 'block';
                }
            }
        });
    } else {
        console.error("L'élément avec l'ID 'messageInput' n'existe pas dans le document.");
    }
});
