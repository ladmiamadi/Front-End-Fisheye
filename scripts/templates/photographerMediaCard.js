function getPhotographerMediaDOM(media) {
    const article = document.createElement( 'article' );
    article.setAttribute('role', 'listitem');
    article.classList.add('media-card');
    article.id = media.id;

    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.onclick = () => openLightbox(media.id);

    a.innerHTML = media.media;

    const div = document.createElement('div');
    div.classList.add('media-body');

    const h3 = document.createElement('h3');
    h3.textContent = media.title;

    const likes = document.createElement('div');
    likes.classList.add('likes');

    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.innerHTML = '<i class="fa-solid fa-heart"></i>';
    heart.onclick = () => incrementLike(media);

    const likeCount = document.createElement('span');
    likeCount.classList.add('like-count');
    likeCount.innerText = media.likes;

    likes.append(likeCount, heart);

    div.appendChild(h3);
    div.appendChild(likes);
    article.append(a, div);

    return article;
}