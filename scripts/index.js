const nav = document.querySelector('#nav')
const btnMenu = document.querySelector('#btnMenu')

btnMenu.addEventListener('click', () =>{
    nav.classList.toggle('hidden');
})

const carritoContenedor = document.querySelector('#carrito-contenedor')
const carritoIco = document.querySelector('#carritoIco')

carritoIco.addEventListener('click', () =>{
    carritoContenedor.classList.toggle('hidden')
})
