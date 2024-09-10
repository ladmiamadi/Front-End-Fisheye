class VideoMedia {
	constructor(data, name) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._title = data.title;
		this._media = data.video;
		this._likes = data.likes;
		this._date = data.date;
		this._price = data.price;
		this._name = name;
	}


	get id() {
		return this._id;
	}

	get name() {
		return this._name.split(" ")[0];
	}

	get photographerId() {
		return this._photographerId;
	}

	get title() {
		return this._title;
	}

	get media() {
		return `<video height="300" width="350"> 
					Votre navigateur ne permet pas de lire les vidéos.
					Mais vous pouvez toujours
					<a href=assets/photographers/${this.name}/${this._media} title="Télécharger la vidéo">la télécharger</a> !
					<source src=assets/photographers/${this.name}/${this._media} type=video/mp4>
   				</video>`;
	}

	get mediaWithControls() {
		return `<video height="300" width="350" controls>
					Votre navigateur ne permet pas de lire les vidéos.
					Mais vous pouvez toujours
					<a href=assets/photographers/${this.name}/${this._media} title="Télécharger la vidéo">la télécharger</a> !
					<source src=assets/photographers/${this.name}/${this._media} type=video/mp4>
				</video>`;
	}

	get likes() {
		return this._likes;
	}

	get date() {
		return this._date;
	}

	get price() {
		return this._price;
	}
}