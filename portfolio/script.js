let body = document.getElementById("body")

let menu = document.getElementById("menu")
let inicio = document.getElementById("inicio")
let sobre = document.getElementById("sobre")
let projetos = document.getElementById("projetos")

let mobile_menu = document.getElementById("mobile_menu")

function clickMenu() {
    if (menu_mobile.style.display == 'grid') {
        menu_mobile.style.display = 'none'
    } else {
        menu_mobile.style.display = 'grid'
    }
}

function modoClaro() {
    body.style.backgroundColor = 'white'
    inicio.style.color = 'rgb(17, 38, 57)'
    sobre.style.color = 'rgb(17, 38, 57)'
    projetos.style.color = 'rgb(17, 38, 57)'
}