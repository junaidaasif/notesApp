burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
ul = document.querySelector('.nav-list')


burger.addEventListener('click', ()=>{
    ul.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})