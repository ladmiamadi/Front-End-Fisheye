function getPhotographerMediaDOM(media) {
	const article = document.createElement("article");
	article.classList.add("media-card");
	article.setAttribute("role", "listitem");

	const a = document.createElement("a");
	a.setAttribute("role", "button");
	a.href = "#";
	a.setAttribute("aria-label", "Vue rapprochée de l'image " + media.title);
	a.onclick = () => openLightbox(media.id);
	a.innerHTML = media.media;

	const div = document.createElement("div");
	div.classList.add("media-body");
	div.tabIndex = 0;

	const h2 = document.createElement("h2");
	h2.textContent = media.title;
	h2.id = "title" + media.id;
	div.setAttribute("aria-labelledby", h2.id);

	const heart = document.createElement("span");
	heart.classList.add("heart");
	heart.innerHTML = "<i class=\"fa-solid fa-heart\"></i>";
	heart.setAttribute("role", "button");
	heart.tabIndex = 0;
	heart.onkeydown = (event) => likeMediaKeyboard(media, event);
	heart.setAttribute("aria-pressed", "false");
	heart.setAttribute("aria-label", "Aimer cette photographie");
	heart.onclick = () => incrementLike(media);

	const likeCount = document.createElement("span");
	likeCount.classList.add("like-count");
	likeCount.id = "like" + media.id;
	likeCount.innerText = media.likes;

	const likes = document.createElement("div");
	likes.classList.add("likes");
	likes.setAttribute("role", "status");
	likes.setAttribute("aria-label", "Nombre des j'aime " + media.likes);
	likes.tabIndex = 0;

	likes.append(likeCount, heart);

	div.appendChild(h2);
	div.appendChild(likes);
	article.append(a, div);

	return article;
}