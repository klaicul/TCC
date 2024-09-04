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