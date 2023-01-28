const headerContent = document.querySelector('.nav__content'),
headerItem = document.querySelectorAll('.nav__list');
console.log(headerContent);
headerItem.addEventListener('mouseenter', function () {
    headerContent.style.gap = {}
})