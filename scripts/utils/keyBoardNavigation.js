document.addEventListener("keydown", function(e) {
	const lightbox = document.getElementById("lightbox-modal");
	const video = lightbox.querySelector("video");
	const contactModal = document.getElementById("contact_modal");

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
		if(lightbox) lightbox.scrollBy(0, 50);
		if (contactModal) contactModal.scrollBy(0, 50);
		break;

	case "ArrowUp":
		lightbox.scrollBy(0, -50);
		if (contactModal) contactModal.scrollBy(0, -50);
		break;

	case "Enter":
		if (video) {
			video.play().then();
			video.focus();
		}
		break;

	default:
		break;
	}
});

function likeMediaKeyboard(media, event) {
	if (event.key === "Enter") {
		incrementLike(media);
	}
}