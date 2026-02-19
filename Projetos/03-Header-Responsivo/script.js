const btnMenu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const icon = document.querySelector('.menu i')

btnMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
    icon.classList.toggle('fa-x');
    icon.classList.toggle('fa-bars');
})


