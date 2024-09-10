function openLightbox(id) {
	const mainSection = document.getElementById("photographerMainSection");
	mainSection.setAttribute("aria-hidden", "true");

	const lightbox = document.getElementById("lightbox-modal");
	lightbox.style.display = "block";
	lightbox.setAttribute("aria-hidden", "false");
	document.querySelector(".lightbox-content").setAttribute("data-currentId", id);

	document.body.classList.add("no-scroll");

	showSlide(0);
}

function closeLightbox() {
	const mainSection = document.getElementById("photographerMainSection");
	mainSection.setAttribute("aria-hidden", "false");

	const lightbox = document.getElementById("lightbox-modal");
	lightbox.style.display = "none";
	lightbox.setAttribute("aria-hidden", "true");

	document.body.classList.remove("no-scroll");
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

document.addEventListener("keydown", function(e) {
	const lightbox = document.getElementById("lightbox-modal");
	const video = lightbox.querySelector("video");

	switch (e.key) {
	case "ArrowRight":
		showSlide(1);
		break;

	case "ArrowLeft":
		showSlide(-1);
		break;

	case "Escape":
		closeLightbox();
		closeModal();
		break;

	case "ArrowDown":
		lightbox.scrollBy(0, 50);
		break;

	case "ArrowUp":
		lightbox.scrollBy(0, -50);
		break;

	case "Enter":
		if (video) {
			video.play().then();
			video.focus();
		}
		break;

	default:
		break;
	};
});