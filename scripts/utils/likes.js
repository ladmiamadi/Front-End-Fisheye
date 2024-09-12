function getPhotographerLikes(media) {
	return media.reduce((acc, item) => {
		return acc + item.likes;
	}, 0);
}

function updatePhotographerLikesCounter() {
	const likes = document.querySelectorAll(".like-count");

	const totalLikes = Array.from(likes).map(like => parseInt(like.innerText)).reduce((acc, item) => {
		return acc + item;
	}, 0);

	const totalLikesElement = document.querySelector(".total-likes");

	if (totalLikesElement) {
		totalLikesElement.innerText = totalLikes.toString();
	}

	totalLikesElement.setAttribute('aria-label', `Nombre total de j'aime ${totalLikes}`);
}

function incrementLike(media) {
	const heart = document.querySelector(".heart");

	heart.ariaPressed = "true";

	const updatedLike = media.likes + 1;
	const currentLike = document.getElementById(`like${media.id}`);

	currentLike.textContent = updatedLike.toString();

	updatePhotographerLikesCounter();
}
