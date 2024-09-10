class ImageMedia {
	constructor(data, name) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._title = data.title;
		this._media = data.image;
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
		return `<img src=assets/photographers/${this.name}/${this._media} alt="${this.name} ${this._title}" role="img">`;
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