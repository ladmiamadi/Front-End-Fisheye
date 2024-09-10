async function getPhotographerById(id) {
	let response = await fetch("./data/photographers.json");
	let result = await response.json();

	const { photographers } = result;

	return Array.from(photographers).find(photographer => photographer.id === id);
}

async function getPhotographerMedia(id, name) {
	let response = await fetch("./data/photographers.json");
	let result = await response.json();

	const { media } = result;

	return media.filter(element => element.photographerId === id)
		.map(media => new MediaFactory(media, name));
}

function getPhotographerLikes(media) {
	return media.reduce((acc, item) => {
		return acc + item.likes;
	}, 0);
}

async function displayPhotographerDetailsData(photographer) {
	const photographerDetailsSection = document.querySelector(".photograph-header");
	const photographerMainSection = document.querySelector("main");
	const mediaSection = document.querySelector(".media-section");
	const photographerModel = photographerDetailsTemplate(photographer);
	const photographerCardDOM = photographerModel.getPhotographerDetailsCardDOM();

	const media = await getPhotographerMedia(photographer.id, photographer.name);

	const sortedBy = sortedByDOM(media);

	const likesCounter = getPhotographerLikes(media);

	const div = document.createElement("div");
	div.classList.add("media.section");
	div.role = "list";

	console.log(media);

	photographerDetailsSection.appendChild(photographerCardDOM.div);
	photographerDetailsSection.appendChild(photographerCardDOM.img);
	photographerMainSection.appendChild(sortedBy);

	photographerMainSection.appendChild(getPhotographerLikesDOM(likesCounter, photographer.price));
}

async function initPhotographer() {
	let params = new URL(document.location).searchParams;
	let id = parseInt(params.get("id"));

	const photographer = await getPhotographerById(id);

	console.log(photographer);
	await displayPhotographerDetailsData(photographer);
}

initPhotographer().then();