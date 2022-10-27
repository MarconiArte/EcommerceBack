const nav = document.querySelector('#nav')
const btnMenu = document.querySelector('#btnMenu')

btnMenu.addEventListener('click', () =>{
    nav.classList.toggle('hidden');
})