function photographerDetailsTemplate(data) {
	const { name, id, city, country, tagline, price, portrait } = data;

	const picture = `assets/photographers/${portrait}`;
	const address = `${city}, ${country}`;
	const pricing = `${price}€/jours`;

	function getPhotographerDetailsCardDOM() {
		const div = document.createElement( "div");
		div.setAttribute("aria-labelledby", "photographerInfo");
		div.id = "photographerTitle";

		const h1 = document.createElement( "h1");
		h1.textContent = name;
		h1.classList.add("photographer-name");
		h1.tabIndex = 0;

		const location = document.createElement("h2");
		location.textContent = address;
		location.classList.add("photographer-location");
		location.tabIndex = 0;

		const description = document.createElement("p");
		description.textContent = tagline;
		description.classList.add("photographer-description");
		description.tabIndex = 0;

		div.appendChild(h1);
		div.appendChild(location);
		div.appendChild(description);

		const img = document.createElement("img");
		img.classList.add("photographer-card-img");
		img.src = picture;
		img.alt = `Photographe ${name}`;
		img.tabIndex = 0;

		return {div, img};
	}

	return { name, picture, id, address, tagline, pricing, getPhotographerDetailsCardDOM };
}