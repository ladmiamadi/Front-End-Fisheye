function updatePhotographerLikesCounter() {
	const likes = document.querySelectorAll(".like-count");

	const totalLikes = Array.from(likes).map(like => parseInt(like.textContent)).reduce((acc, item) => {
		return acc + item;
	}, 0);

	const totalLikesElement = document.querySelector(".total-likes");

	if (totalLikesElement) {
		totalLikesElement.textContent = totalLikes.toString();
	}
}

function incrementLike(media) {
	const updatedLike = media.likes + 1;

	const currentLike = document.getElementById(`like${media.id}`);

	currentLike.textContent = updatedLike.toString();
	updatePhotographerLikesCounter();
}
