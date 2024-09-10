function photographerTemplate(data) {
	const { name, id, city, country, tagline, price, portrait } = data;

	const picture = `assets/photographers/${portrait}`;
	const address = `${city}, ${country}`;
	const pricing = `${price}€/jours`;
	const href = `photographer.html?id=${id}`;

	function getUserCardDOM() {
		const article = document.createElement( "article" );
		article.role = "listitem";
		article.setAttribute("aria-labelledby", "photographerName");

		const img = document.createElement( "img");
		img.classList.add("photographer-card-img");
		img.src = picture;
		img.alt = `Photographe ${name}`;

		const h2 = document.createElement( "h2");
		h2.textContent = name;
		h2.id = "photographerName";

		const h3 = document.createElement("h3");
		h3.textContent = address;

		const description = document.createElement("p");
		description.textContent = tagline;
		description.classList.add("description");

		const p = document.createElement("p");
		p.textContent = pricing;
		p.classList.add("pricing");

		const a = document.createElement("a");
		a.href = href;
		a.append(img, h2, h3, description, p);

		article.appendChild(a);

		return (article);
	}

	return { name, picture, id, address, tagline, pricing, getUserCardDOM };
}