function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;
    const address = `${city}, ${country}`;
    const pricing = `${price}€/jours`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute('role', 'listitem');
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const h3 = document.createElement('h3');
        h3.textContent = address;

        const description = document.createElement('p');
        description.textContent = tagline;
        description.classList.add('description');

        const p = document.createElement('p');
        p.textContent = pricing;
        p.classList.add('pricing')

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(description);
        article.appendChild(p);

        return (article);
    }
    return { name, picture, id, address, tagline, pricing, getUserCardDOM }
}