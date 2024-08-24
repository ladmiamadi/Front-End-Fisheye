//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographerById(id) {
    let response = await fetch("./data/photographers.json");
    let result = await response.json();

    const { photographers } = result;

    return Array.from(photographers).find(photographer => photographer.id === id);
}

function displayPhotographerDetailsData(photographer) {
    const photographerDetailsSection = document.querySelector('.photograph-header');
    const photographerMainSection = document.querySelector('main');
    const photographerModel = photographerDetailsTemplate(photographer);
    const photographerCardDOM = photographerModel.getPhotographerDetailsCardDOM();
    const sortedBy = sortedByDOM();

    photographerDetailsSection.appendChild(photographerCardDOM.div);
    photographerDetailsSection.appendChild(photographerCardDOM.img);

    photographerMainSection.appendChild(sortedBy);
}

async function initPhotographer() {
    let params = new URL(document.location).searchParams;
    let id = parseInt(params.get("id"));

    const photographer = await getPhotographerById(id);

    console.log(photographer);
    displayPhotographerDetailsData(photographer);
}

initPhotographer().then();