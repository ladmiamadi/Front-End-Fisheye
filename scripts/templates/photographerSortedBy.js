function sortedByDOM (media) {
	const div = document.createElement("div");
	div.classList.add("sorted-by");
	div.setAttribute("aria-labelledby", "sorted-by");
	div.id = "sortedByDiv";

	const h4 = document.createElement("h4");
	h4.textContent = "Trier par";
	h4.id = "sorted-by";

	const dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");

	const button = document.createElement("button");
	button.classList.add("drop-button");
	button.id = "myDropdown";
	button.role = "button";
	button.ariaHasPopup = "listbox";
	button.ariaExpanded = "false";
	button.setAttribute("aria-controls", "sortedByDiv");
	button.onclick = toggleDropdown;

	const dropdownContent = document.createElement("div");
	div.setAttribute("aria-labelledby", "myDropdown");
	div.role = "listbox";
	dropdownContent.classList.add("dropdown-content");

	let selectedOption= "Popularité";
	sortMedia("Popularité", media);

	const filter = ["Popularité", "Date", "Titre"];

	function updateDropdown(selectedText) {
		button.innerHTML = `${selectedText} <i class="fa-solid fa-angle-down arrow" aria-hidden="true"></i>`;
		button.role = "option";
		button.ariaSelected = "true";

		dropdownContent.innerHTML = "";

		filter.forEach(option => {
			if (option !== selectedText) {
				const link = document.createElement("a");
				link.textContent = option;
				link.href = "#";
				link.role = "option";
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