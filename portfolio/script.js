let body = document.getElementById("body")
let nome = document.getElementById("nome")
let subtitulo = document.getElementById("subtitulo")
let tecnologias = document.getElementById("tecnologias")

let escuro = document.getElementById("escuro")
let claro = document.getElementById("claro")

let menu = document.getElementById("menu")
let inicio = document.getElementById("inicio")
let sobre = document.getElementById("sobre")
let projetos = document.getElementById("projetos")

let hamb = document.getElementById("hamb")

let mobile_menu = document.getElementById("mobile_menu")
let m_inicio = document.getElementById("m_inicio")
let m_sobre = document.getElementById("m_sobre")
let m_projetos = document.getElementById("m_projetos")

let c_sociais = document.getElementById("c_redes_sociais")
let c_github = document.getElementById("c_github")
let c_linkedin = document.getElementById("c_linkedin")
let c_insta = document.getElementById("c_insta")

let e_sociais = document.getElementById("e_redes_sociais")
let e_github = document.getElementById("e_github")
let e_linkedin = document.getElementById("e_linkedin")
let e_insta = document.getElementById("e_insta")

function clickMenu() {
    if (menu_mobile.style.display == 'grid') {
        menu_mobile.style.display = 'none'
    } else {
        menu_mobile.style.display = 'grid'
    }
}

function modoClaro() {
    // position: fixed;
    // display: flex;
    
    // left: 100%;
    // transform: translateX(-100%);

    body.style.backgroundColor = 'rgb(209, 209, 209)'
    nome.style.color = "rgb(17, 38, 57)"
    subtitulo.style.color = "rgb(17, 38, 57)"
    tecnologias.style.color = "rgb(17, 38, 57)"

    inicio.style.color = 'rgb(17, 38, 57)'
    sobre.style.color = 'rgb(17, 38, 57)'
    projetos.style.color = 'rgb(17, 38, 57)'

    hamb.style.color = 'rgb(17, 38, 57)'

    m_inicio.style.color = 'rgb(17, 38, 57)'
    m_sobre.style.color = 'rgb(17, 38, 57)'
    m_projetos.style.color = 'rgb(17, 38, 57)'

    c_sociais.style.display = "none"
    e_sociais.style.display = "flex"

    e_sociais.style.position = "fixed"
    e_sociais.style.left = "100%"
    e_sociais.style.transform = "translate(-100%)"

    e_github.href = "https://www.github.com/marlonwillian"
    e_linkedin.href = "https://www.linkedin.com/in/marlon-willian-silva-barros-30b49122b/"
    e_insta.href = "https://www.instagram.com/mwbrrs/"
    
    claro.style.display = "none"
    escuro.style.display = "block"
}

function modoEscuro() {
    body.style.backgroundColor = 'rgb(17, 38, 57)'
    nome.style.color = "white"
    subtitulo.style.color = "white"
    tecnologias.style.color = "white"

    inicio.style.color = 'white'
    sobre.style.color = 'white'
    projetos.style.color = 'white'

    hamb.style.color = 'white'

    m_inicio.style.color = 'white'
    m_sobre.style.color = 'white'
    m_projetos.style.color = 'white'

    e_sociais.style.display = "none"
    c_sociais.style.display = "flex"

    c_sociais.style.position = "fixed"
    c_sociais.style.left = "100%"
    c_sociais.style.transform = "translate(-100%)"

    escuro.style.display = "none"
    claro.style.display = "block"
}