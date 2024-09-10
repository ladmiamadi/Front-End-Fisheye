function getPhotographerMediaDOM(media) {
	const article = document.createElement( "article");
	article.classList.add("media-card");
	article.role = "listitem";

	const a = document.createElement("a");
	a.role = "button";
	a.setAttribute("href", "#");
	a.ariaLabel = "Vue rapprochée de l'image";
	a.onclick = () => openLightbox(media.id);

	a.innerHTML = media.media;

	const div = document.createElement("div");
	div.classList.add("media-body");

	const h2 = document.createElement("h2");
	h2.textContent = media.title;
	h2.id = media.title + media.id;
	div.setAttribute("aria-labelledby", h2.id);

	const likes = document.createElement("div");
	likes.classList.add("likes");

	const heart = document.createElement("span");
	heart.classList.add("heart");
	heart.innerHTML = "<i class=\"fa-solid fa-heart\"></i>";
	heart.role = "button";
	heart.tabIndex = 0;
	heart.onkeydown = (event) => likeMediaKeyboard(media, event);
	heart.ariaPressed = "false";
	heart.ariaLabel = "Aimer cette photographie";
	heart.onclick = () => incrementLike(media);

	const likeCount = document.createElement("span");
	likeCount.ariaLabel = "Nombre des j'aime";
	likeCount.classList.add("like-count");
	likeCount.id = "like" + media.id;
	likeCount.innerText = media.likes;

	likes.setAttribute("aria-labelledby", likeCount.id);

	likes.append(likeCount, heart);

	div.appendChild(h2);
	div.appendChild(likes);
	article.append(a, div);

	return article;
}