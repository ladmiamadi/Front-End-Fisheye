function openLightbox(id) {
	const mainSection = document.getElementById("photographerMainSection");
	mainSection.setAttribute("aria-hidden", "true");

	const lightbox = document.getElementById("lightbox-modal");
	lightbox.style.display = "block";
	lightbox.focus();

	lightbox.setAttribute("aria-hidden", "false");
	document.querySelector(".lightbox-content").setAttribute("data-currentId", id);

	document.body.classList.add("no-scroll");
	document.querySelector(".next").focus();

	showSlide(0);
}

function closeLightbox() {
	const mainSection = document.getElementById("photographerMainSection");
	mainSection.setAttribute("aria-hidden", "false");

	const lightbox = document.getElementById("lightbox-modal");
	lightbox.style.display = "none";
	lightbox.setAttribute("aria-hidden", "true");

	document.body.classList.remove("no-scroll");
	mainSection.focus();
}

function showSlide(n) {
	const slides = document.querySelectorAll(".slide");
	const lightboxContent = document.querySelector(".lightbox-content");
	const currentId = lightboxContent.getAttribute("data-currentId");
	const currentSlide = document.getElementById(currentId);

	// Masquer tous les slides
	slides.forEach(slide => slide.style.display = "none");

	// Définir le slide suivant ou précédent ou boucler
	let targetSlide;

	if (n === 1) {
		targetSlide = currentSlide.nextElementSibling || slides[0];
	} else if (n === -1) {
		targetSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
	} else {
		targetSlide = currentSlide;
	}

	targetSlide.style.display = "block";
	targetSlide.focus();
	lightboxContent.setAttribute("data-currentId", targetSlide.id);
}

