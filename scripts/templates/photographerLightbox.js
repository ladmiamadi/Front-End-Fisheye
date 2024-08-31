function getPhotographerLightboxDOM(media) {
    const div = document.createElement('div');
    div.id = 'lightbox-modal';

    const span = document.createElement('span');
    span.innerHTML = '<i class="fa-solid fa-x"></i>';
    span.classList.add('close-lightbox');
    span.onclick = closeLightbox;

    const next = document.createElement('span');
    const prev = document.createElement('span');
    next.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    prev.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    next.classList.add('next');
    prev.classList.add('prev');
    next.onclick = () => showSlide(1);
    prev.onclick = () => showSlide(-1);

    const lightboxContent = document.createElement('div');
    lightboxContent.classList.add('lightbox-content');
    lightboxContent.dataset.currentId = media[0].id;

    div.append(span, next, prev, lightboxContent);

    media.forEach(item => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.id = item.id;

        const title = document.createElement('h3');
        title.textContent = item.title;

        slide.innerHTML = item.media;
        slide.appendChild(title);

        lightboxContent.appendChild(slide);
    });

    return div;
}