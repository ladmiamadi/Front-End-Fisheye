function getPhotographerLightboxDOM(media) {
	if(!document.getElementById("lightbox-modal")) {
		const div = document.createElement("div");
		div.id = "lightbox-modal";
		div.ariaHidden = "true";
		div.setAttribute("role", "dialog");
		div.setAttribute("aria-label", "Galerie d'images");

		const close = document.createElement("span");
		close.setAttribute('aria-label', 'Fermer le carrousel');
		close.setAttribute('role', 'button');
		close.setAttribute('tabindex', '0');


		close.innerHTML = "<i class=\"fa-solid fa-x\" title='Fermer le carrousel'></i>";
		close.classList.add("close-lightbox");
		close.onclick = closeLightbox;

		const next = document.createElement("span");
		const prev = document.createElement("span");

		next.innerHTML = "<i class=\"fa-solid fa-chevron-right\" title='Suivant'></i>";
		prev.innerHTML = "<i class=\"fa-solid fa-chevron-left\" title='Précédent'></i>";

		next.classList.add("next");
		prev.classList.add("prev");

		next.onclick = () => showSlide(1);
		prev.onclick = () => showSlide(-1);

		next.setAttribute("aria-label", "Suivant");
		next.setAttribute("role", "button");
		prev.setAttribute("aria-label", "Précédent");
		prev.setAttribute("role", "button");

		next.focus();
		next.tabIndex = 0;

		const lightboxContent = document.createElement("div");
		lightboxContent.classList.add("lightbox-content");
		lightboxContent.setAttribute("aria-labelledby", "mediaSlidesSection");

		lightboxContent.setAttribute("data-currentId", media[0].id);

		div.appendChild(lightboxContent);

		lightboxContent.appendChild(prev);
		lightboxContent.appendChild(close);

		let slides = document.createElement("div");
		slides.id = "mediaSlidesSection";
		div.classList.add("slides");
		div.role = "list";
		div.ariaLabel = "Les photographies";

		media.forEach(item => {
			const slide = document.createElement("div");
			slide.classList.add("slide");
			slide.id = item.id;
			slide.role = "listitem";
			slide.setAttribute("aria-label", media.title);

			const title = document.createElement("h2");
			title.textContent = item.title;
			title.id = "mediaTitle";

			slide.innerHTML = item.mediaWithControls ?? item.media;

			slide.appendChild(title);
			slides.appendChild(slide);
		});

		lightboxContent.appendChild(slides);
		lightboxContent.appendChild(next);

		close.focus();

		return div;
	}
}