function getPhotographerLikesDOM(likes, price) {
	const div = document.createElement("div");
	div.classList.add("photographer-likes");
	div.ariaLabel = "Encart pour les j'aime et le prix journalier";

	const divCounter = document.createElement("div");
	divCounter.ariaLabel = "Nombre total de j'aime";
	div.id = "likeCounter";

	const likesCounter = document.createElement("span");
	likesCounter.innerText = likes;
	likesCounter.classList.add("total-likes");
	likesCounter.setAttribute("aria-label", "Nombre total de j'aime");
	likesCounter.setAttribute("aria-live", "polite");
	likesCounter.tabIndex = 0;

	const priceSpan = document.createElement("span");
	priceSpan.innerHTML = "<i class=\"fa-solid fa-heart likes-counter\"></i>";
	priceSpan.ariaHidden = "true";

	divCounter.append(likesCounter, priceSpan);

	const photographerPrice = document.createElement("p");
	photographerPrice.setAttribute("aria-label", "Prix journalier");
	photographerPrice.classList.add("photographer-price");
	photographerPrice.innerHTML = `${price}€/jour`;
	photographerPrice.tabIndex = 0;

	div.append(divCounter, photographerPrice);

	return div;
}