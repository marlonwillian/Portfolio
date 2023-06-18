let menu = document.getElementById("menu")

if (window.innerWidth > '536') {
    menu.style.display = 'block'
}

function clickMenu() {
    if (menu.style.display == 'grid') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'grid'
    }
}