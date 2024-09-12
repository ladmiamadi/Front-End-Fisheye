function sortedByDOM(media) {
	const div = document.createElement("div");
	div.classList.add("sorted-by");
	div.id = "sortedBy";

	const h3 = document.createElement("h3");
	h3.textContent = "Trier par";
	h3.id = "sorted-by";
	h3.tabIndex = 0;
	div.appendChild(h3);

	const span = document.createElement("span");
	span.id = "arrowDown";
	span.innerHTML = "<i class=\"fa-solid fa-angle-down arrow\" aria-hidden=\"true\"></i>";
	div.appendChild(span);

	const select = document.createElement("select");
	select.id = "sortSelect";
	select.classList.add("sort-select");

	let defaultOption = "Popularité";
	const options = ["Popularité", "Titre", "Date"];

	function updateSelectOptions() {
		select.innerHTML = "";

		options.forEach(optionText => {
			const option = document.createElement("option");
			option.value = optionText;
			option.textContent = optionText;

			if (optionText === defaultOption) {
				option.selected = true;
				option.hidden = true;
			}

			select.appendChild(option);
		});
	}

	updateSelectOptions();
	div.appendChild(select);

	sortMedia(defaultOption, media);

	select.addEventListener("change", (event) => {
		defaultOption = event.target.value;
		sortMedia(defaultOption, media);
		updateSelectOptions();
		span.querySelector(".arrow").classList.replace("fa-angle-up", "fa-angle-down");
	});

	select.addEventListener("click", function () {
		span.innerHTML = "<i class=\"fa-solid fa-angle-up arrow\" aria-hidden=\"true\"></i>";
	});

	select.addEventListener("change", function () {
		span.innerHTML = "<i class=\"fa-solid fa-angle-down arrow\" aria-hidden=\"true\"></i>";
	});

	select.addEventListener("blur", function () {
		span.innerHTML = "<i class=\"fa-solid fa-angle-down arrow\" aria-hidden=\"true\"></i>";
	});

	return div;
}