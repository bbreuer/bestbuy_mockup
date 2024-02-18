const toggleButton = document.getElementById('toggleButton');
const closeButton = document.getElementById('closeButton');
const drawer = document.getElementById('drawer');

toggleButton.addEventListener('click', () => {
    drawer.classList.add('h-auto');
    drawer.classList.remove('h-0');
});

closeButton.addEventListener('click', () => {
    drawer.classList.add('h-0');
    drawer.classList.remove('h-auto');
});
