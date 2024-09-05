function openLightbox(id) {
	document.getElementById("lightbox-modal").style.display = "block";
	document.querySelector(".lightbox-content").setAttribute("data-currentId", id);

	showSlide(0);
}

function closeLightbox() {
	document.getElementById("lightbox-modal").style.display = "none";
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
	lightboxContent.setAttribute("data-currentId", targetSlide.id);
}

//setInterval(() => showSlide(1), 3000);

document.addEventListener("keydown", function(e) {
	if (e.key === "ArrowRight") {
		showSlide(1);
	} else if (e.key === "ArrowLeft") {
		showSlide(-1);
	} else if (e.key === "Escape") {
		closeLightbox();
	};
});