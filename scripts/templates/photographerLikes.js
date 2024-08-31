function getPhotographerLikesDOM(likes, price) {
    const div = document.createElement('div');
    div.classList.add('photographer-likes');

    const divCounter = document.createElement('div');

    const likesCounter = document.createElement('span');
    likesCounter.innerText = likes;
    likesCounter.classList.add('total-likes');

    const priceSpan = document.createElement('span');
    priceSpan.innerHTML = `<i class="fa-solid fa-heart likes-counter"></i>`;

    divCounter.append(likesCounter, priceSpan);

    const photographerPrice = document.createElement('span');
    photographerPrice.classList.add('photographer-price');
    photographerPrice.innerHTML = `${price}€/jour`;

    div.append(divCounter, photographerPrice);
    return div;
}