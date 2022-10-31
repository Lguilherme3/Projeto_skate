var menuH = document.querySelector(".cabecalho__menu")

var menuSome = document.querySelector(".menu-lateral")

menuH.addEventListener('click' , function(){
    if(menuSome.style.display == 'none') {
        menuSome.style.display = 'block'
    } else {
        menuSome.style.display = 'none'
    }
})