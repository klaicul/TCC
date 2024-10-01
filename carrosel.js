document.addEventListener('DOMContentLoaded', () => {
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const menu = document.getElementById('menu');

    openMenu.addEventListener('click', () => {
        menu.classList.add('open');
        openMenu.style.display = 'none';
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('open');
        openMenu.style.display = 'block';
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('open');
            menu.removeAttribute('style');
            openMenu.style.display = 'none';
        } else {
            openMenu.style.display = 'block';
        }
    });
});

const searchInput = document.getElementById('search-bar');
const items = document.querySelectorAll('barinha');

// Adiciona um evento ao input que dispara toda vez que o usuário digita
searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase();

    // Loop por todos os itens da lista e exibe ou esconde com base no que foi digitado
    items.forEach(function(item) {
        if (item.textContent.toLowerCase().includes(searchText)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});