function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    console.log(` Votre message a été envoyé avec succès => 
            Prénom: ${firstName}, 
            Nom: ${lastName}, 
            Email: ${email}, 
            Message: ${message}
            `);

    contactForm.reset();
    closeModal();
})