function photographerDetailsTemplate(data) {
	const { name, id, city, country, tagline, price, portrait } = data;

	const picture = `assets/photographers/${portrait}`;
	const address = `${city}, ${country}`;
	const pricing = `${price}€/jours`;

	function getPhotographerDetailsCardDOM() {
		const div = document.createElement( "div");
		div.ariaLabel = "Informations sur le photographe";

		const h2 = document.createElement( "h2");
		h2.textContent = name;
		h2.classList.add("photographer-name");

		const h3 = document.createElement("h3");
		h3.textContent = address;
		h3.classList.add("photographer-location");

		const description = document.createElement("p");
		description.textContent = tagline;
		description.classList.add("photographer-description");

		div.appendChild(h2);
		div.appendChild(h3);
		div.appendChild(description);

		const img = document.createElement("img");
		img.classList.add("photographer-card-img");
		img.src = picture;
		img.alt = `Photographe ${name}`;

		return {div, img};
	}

	return { name, picture, id, address, tagline, pricing, getPhotographerDetailsCardDOM };
}