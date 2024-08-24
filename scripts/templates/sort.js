function toggleDropdown() {
    let dropdown = document.querySelector('.dropdown-content');
    dropdown.classList.toggle('show');
}


function sortedByDOM () {
    const div = document.createElement( 'div' );
    div.classList.add('sorted-by');

    const h4 = document.createElement( 'h4' );

    h4.textContent = 'Trier par';

    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');

    const button = document.createElement('button');
    button.innerHTML = 'Popularité <i class="fa-solid fa-angle-down arrow"></i>';
    button.classList.add('drop-button');
    button.setAttribute('id', 'myDropdown');
    button.onclick = toggleDropdown;

    const dropdownContent = document.createElement('div');
    dropdownContent.classList.add('dropdown-content');

    const link1 = document.createElement('a');
    link1.textContent = 'Date';

    const link2 = document.createElement('a');
    link2.textContent = 'Titre';

    dropdownContent.appendChild(link1);
    dropdownContent.appendChild(link2);

    dropdown.appendChild(button);
    dropdown.appendChild(dropdownContent);

    div.appendChild(h4);
    div.appendChild(dropdown);

    return div;
}