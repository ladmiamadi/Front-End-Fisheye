function toggleDropdown() {
	const button = document.getElementById("myDropdown");
	const dropdownContent = document.querySelector(".dropdown-content");

	dropdownContent.classList.toggle("show");

	if (dropdownContent.classList.contains("show")) {
		button.innerHTML = button.innerHTML.replace("fa-angle-down", "fa-angle-up");
	} else {
		button.innerHTML = button.innerHTML.replace("fa-angle-up", "fa-angle-down");
	}
}

function sortByPopularity(media) {
	return media.sort((a, b) => b.likes - a.likes);
}

function sortByDate(media) {
	return media.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

function sortByTitle(media) {
	return media.sort((a, b) => {
		const titleA = a.title.toUpperCase();
		const titleB = b.title.toUpperCase();

		if (titleA < titleB) {
			return -1;
		}
		if (titleA > titleB) {
			return 1;
		}

		return 0;
	});
}

function sortMedia(option, media) {
	let articles;

	if (option === "Popularité") articles = sortByPopularity(media);
	if (option === "Date")  articles = sortByDate(media);
	if (option === "Titre") articles = sortByTitle(media);

	const mediaSection = document.querySelector(".media-section");
	mediaSection.innerHTML = "";

	articles.forEach(article => {
		mediaSection.appendChild(getPhotographerMediaDOM(article));
	});

	mediaSection.appendChild(getPhotographerLightboxDOM(media));
}

window.onclick = function(event) {
	if (!event.target.matches(".drop-button")) {
		const dropdownContent = document.querySelector(".dropdown-content");
		dropdownContent.classList.contains("show") ? dropdownContent.classList.remove("show") : "";
	}
};
