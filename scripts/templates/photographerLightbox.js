function getPhotographerLightboxDOM(media) {
	if(!document.getElementById("lightbox-modal")) {
		const div = document.createElement("div");
		div.id = "lightbox-modal";
		div.ariaHidden = "true";
		div.role = "dialog";
		div.ariaLabel = "Carrousel des photographies";

		const close = document.createElement("span");
		close.ariaLabel = "Fermer";
		close.innerHTML = "<i class=\"fa-solid fa-x\" title='Fermer le carousel'></i>";
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

		next.ariaLabel = "Suivant";
		next.role = "button";
		prev.ariaLabel = "Précédent";
		prev.role = "button";

		const lightboxContent = document.createElement("div");
		lightboxContent.classList.add("lightbox-content");
		lightboxContent.setAttribute("aria-labelledby", "mediaSlidesSection");

		lightboxContent.setAttribute("data-currentId", media[0].id);

		div.append(lightboxContent);

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
			slide.setAttribute("aria-labelledby", "mediaTitle");

			const title = document.createElement("h2");
			title.textContent = item.title;
			title.id = "mediaTitle";

			slide.innerHTML = item.mediaWithControls ?? item.media;

			slide.appendChild(title);
			slides.appendChild(slide);
		});

		lightboxContent.appendChild(slides);
		lightboxContent.appendChild(next);

		return div;
	}
}