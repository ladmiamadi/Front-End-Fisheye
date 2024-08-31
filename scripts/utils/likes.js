function updatePhotographerLikesCounter() {
    /*const likes = document.querySelectorAll('.total-likes');

    const totalLikes = Array.from(likes).map(like => parseInt(like.textContent)).reduce((acc, item) => {
        return acc + item;
    }, 0);

    console.log(totalLikes)

    likes.textContent = totalLikes.toString();*/
    const likes = document.querySelectorAll('.like-count');

    const totalLikes = Array.from(likes).map(like => parseInt(like.textContent)).reduce((acc, item) => {
        return acc + item;
    }, 0);

    const totalLikesElement = document.querySelector('.total-likes');
    if (totalLikesElement) {
        totalLikesElement.textContent = totalLikes.toString();
    }
}

function incrementLike(media) {
    const updatedLike = media.likes + 1;

    const currentLike = document.getElementById(media.id).querySelector('.like-count');

    currentLike.textContent = updatedLike.toString();
    updatePhotographerLikesCounter();
}
