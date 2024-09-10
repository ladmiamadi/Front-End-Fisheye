function displayModal() {
	const mainSection = document.getElementById("photographerMainSection");
	mainSection.setAttribute("aria-hidden", "true");

	const modal = document.getElementById("contact_modal");
	modal.setAttribute("aria-hidden", "false");

	const photographerName = document.querySelector(".photographer-name").textContent;

	let header = modal.querySelector("header");

	let existingH2 = header.querySelector(".photographer-name-contact");
	if (existingH2) {
		existingH2.remove();
	}

	let h2 = document.createElement("h2");
	h2.textContent = photographerName;
	h2.classList.add("photographer-name-contact");

	header.appendChild(h2);

	modal.style.display = "block";
	document.body.classList.add("no-scroll");

	const firstInput = document.getElementById("first");
	firstInput.focus();
}

function closeModal() {
	const mainSection = document.getElementById("photographerMainSection");
	mainSection.setAttribute("aria-hidden", "false");

	//const openModal = document.getElementById("openModalContact");
	//openModal.focus();

	const modal = document.getElementById("contact_modal");
	modal.setAttribute("aria-hidden", "true");
	modal.style.display = "none";
	document.body.classList.remove("no-scroll");
}

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
	event.preventDefault();

	let firstName = document.getElementById("first").value;
	let lastName = document.getElementById("last").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;

	console.log(` Votre message a été envoyé avec succès => 
            Prénom: ${firstName}, 
            Nom: ${lastName}, 
            Email: ${email}, 
            Message: ${message}
            `);

	contactForm.reset();
	closeModal();
});