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

async function displayPhotographerDetailsData(photographer) {
	const photographerDetailsSection = document.querySelector(".photograph-header");
	const mediaSection = document.querySelector(".media-section");
	const photographerMainSection = document.querySelector("main");
	const photographerModel = photographerDetailsTemplate(photographer);
	const photographerCardDOM = photographerModel.getPhotographerDetailsCardDOM();

	const media = await getPhotographerMedia(photographer.id, photographer.name);
	const sortedBy = sortedByDOM(media);
	const likesCounter = getPhotographerLikes(media);

	console.log(media);

	photographerDetailsSection.prepend(photographerCardDOM.div);
	photographerDetailsSection.append(photographerCardDOM.img);

	photographerMainSection.insertBefore(sortedBy, mediaSection);

	photographerMainSection.insertBefore(getPhotographerLikesDOM(likesCounter, photographer.price), sortedBy);
}

async function initPhotographer() {
	let params = new URL(document.location).searchParams;
	let id = parseInt(params.get("id"));

	const photographer = await getPhotographerById(id);

	console.log(photographer);
	await displayPhotographerDetailsData(photographer);
}

initPhotographer().then();