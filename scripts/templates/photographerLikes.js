function getPhotographerLikesDOM(likes, price) {
	const div = document.createElement("div");
	div.classList.add("photographer-likes");
	div.ariaLabel = "Encart pour les j'aime et le prix journalier";

	const divCounter = document.createElement("div");
	divCounter.ariaLabel = "Nombre total des j'aime";

	const likesCounter = document.createElement("span");
	likesCounter.innerText = likes;
	likesCounter.classList.add("total-likes");

	const priceSpan = document.createElement("span");
	priceSpan.innerHTML = "<i class=\"fa-solid fa-heart likes-counter\"></i>";
	priceSpan.ariaHidden = "true";

	divCounter.append(likesCounter, priceSpan);

	const photographerPrice = document.createElement("span");
	photographerPrice.ariaLabel = "Prix journalier";
	photographerPrice.classList.add("photographer-price");
	photographerPrice.innerHTML = `${price}€/jour`;

	div.append(divCounter, photographerPrice);

	return div;
}