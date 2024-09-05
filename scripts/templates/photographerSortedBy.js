function sortedByDOM (media) {
	const div = document.createElement("div");
	div.classList.add("sorted-by");

	const h4 = document.createElement("h4");
	h4.textContent = "Trier par";

	const dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");

	const button = document.createElement("button");
	button.classList.add("drop-button");
	button.setAttribute("id", "myDropdown");
	button.onclick = toggleDropdown;

	const dropdownContent = document.createElement("div");
	dropdownContent.classList.add("dropdown-content");

	let selectedOption= "Popularité";
	sortMedia("Popularité", media);

	const filter = ["Popularité", "Date", "Titre"];

	function updateDropdown(selectedText) {
		button.innerHTML = `${selectedText} <i class="fa-solid fa-angle-down arrow"></i>`;
		dropdownContent.innerHTML = "";

		filter.forEach(option => {
			if (option !== selectedText) {
				const link = document.createElement("a");
				link.textContent = option;
				link.href = "#";
				link.onclick = () => {
					sortMedia(option, media);
					updateDropdown(option);
				};

				dropdownContent.appendChild(link);
			}
		});
	}

	updateDropdown(selectedOption);

	dropdown.append(button, dropdownContent);

	div.append(h4, dropdown);

	return div;
}