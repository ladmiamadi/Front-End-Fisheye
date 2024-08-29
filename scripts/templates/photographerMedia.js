function getPhotographerMediaDOM(media) {
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.onclick = () => openLightbox(media.id);

    const article = document.createElement( 'article' );
    article.setAttribute('role', 'listitem');
    article.classList.add('media-card');

    article.innerHTML = media.media;

    const div = document.createElement('div');
    div.classList.add('media-body');

    const h3 = document.createElement('h3');
    h3.textContent = media.title;

    const likes = document.createElement('div');
    const span = document.createElement('span');

    span.innerHTML = '<i class="fa-solid fa-heart"></i>'

    likes.innerText = media.likes;
    likes.appendChild(span);

    div.appendChild(h3);
    div.appendChild(likes);
    article.appendChild(div);

    a.appendChild(article)

    return (a);
}