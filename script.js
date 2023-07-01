let body = document.getElementById("body")
let header = document.getElementById("header")

let escuro = document.getElementById("escuro")
let claro = document.getElementById("claro")

let menu = document.getElementById("menu")
let inicio = document.getElementById("inicio")
let sobre = document.getElementById("sobre")
let projetos = document.getElementById("projetos")

let hamb = document.getElementById("hamb")

let menu_mobile = document.getElementById("menu_mobile")
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


let gc_projeto = document.getElementById("gc_projeto")
let gc_github = document.getElementById("gc_github")

let nome = document.getElementById("nome")
let subtitulo = document.getElementById("subtitulo")
let tecnologias = document.getElementById("tecnologias")

let lista_projetos = document.getElementById("lista_projetos")
let sobre_titulo = document.getElementById("sobre_titulo")
let projetos_titulo = document.getElementById("projetos_titulo")

let jogo_da_velha = document.getElementById("jogo_da_velha")
let gerador_de_cartas = document.getElementById("gerador_de_cartas")

let hr1 = document.getElementById("linha_1")
let hr2 = document.getElementById("linha_2")

let hr3 = document.getElementById("linha_3")
let hr4 = document.getElementById("linha_4")
let hr5 = document.getElementById("linha_5")
let hr6 = document.getElementById("linha_6")

let i_eu = document.getElementById("i_eu")

let sobre_descricao = document.getElementById("sobre_descricao")

function clickMenu() {
    if (menu_mobile.style.display == 'grid') {
        menu_mobile.style.display = 'none'
    } else {
        menu_mobile.style.display = 'grid'
    }
}

function modoClaro() {
    body.style.backgroundColor = "rgb(209, 209, 209)"
    header.style.backgroundColor = "rgb(209, 209, 209)"
    menu_mobile.style.backgroundColor = "rgb(209, 209, 209)"

    sobre_titulo.style.backgroundColor = "rgb(209, 209, 209)"
    projetos_titulo.style.backgroundColor = "rgb(209, 209, 209)"

    inicio.style.color = 'rgb(17, 38, 57)'
    sobre.style.color = 'rgb(17, 38, 57)'
    projetos.style.color = 'rgb(17, 38, 57)'

    hamb.style.color = 'rgb(17, 38, 57)'

    m_inicio.style.color = 'rgb(17, 38, 57)'
    m_sobre.style.color = 'rgb(17, 38, 57)'
    m_projetos.style.color = 'rgb(17, 38, 57)'
    
    m_inicio.style.borderColor = 'rgb(17, 38, 57)'
    m_sobre.style.borderColor = 'rgb(17, 38, 57)'
    m_projetos.style.borderColor = 'rgb(17, 38, 57)'

    c_sociais.style.display = "none"
    e_sociais.style.display = "flex"

    e_sociais.style.position = "fixed"
    e_sociais.style.left = "100%"
    e_sociais.style.transform = "translate(-100%)"

    e_github.href = "https://www.github.com/marlonwillian"
    e_linkedin.href = "https://www.linkedin.com/in/marlon-willian-silva-barros-30b49122b/"
    e_insta.href = "https://www.instagram.com/mwbrrs/"

    nome.style.color = "rgb(17, 38, 57)"
    subtitulo.style.color = "rgb(17, 38, 57)"
    tecnologias.style.color = "rgb(17, 38, 57)"

    sobre_titulo.style.color = "rgb(17, 38, 57)"
    projetos_titulo.style.color = "rgb(17, 38, 57)"
    
    hr1.style.background = "rgb(17, 38, 57)"
    hr2.style.background = "rgb(17, 38, 57)"

    jogo_da_velha.style.color = "rgb(17, 38, 57)"
    gerador_de_cartas.style.color = "rgb(17, 38, 57)"

    jogo_da_velha.style.borderColor = "rgb(17, 38, 57)"
    gerador_de_cartas.style.borderColor = "rgb(17, 38, 57)"

    jogo_da_velha.style.backgroundColor = "rgb(209, 209, 209)"
    gerador_de_cartas.style.backgroundColor = "rgb(209, 209, 209)"
    
    hr3.style.background = "rgb(17, 38, 57)"
    hr4.style.background = "rgb(17, 38, 57)"
    hr5.style.background = "rgb(17, 38, 57)"
    hr6.style.background = "rgb(17, 38, 57)"

    hr3.style.borderColor = "rgb(17, 38, 57)"
    hr4.style.borderColor = "rgb(17, 38, 57)"
    hr5.style.borderColor = "rgb(17, 38, 57)"
    hr6.style.borderColor = "rgb(17, 38, 57)"

    i_eu.style.borderColor = "rgb(17, 38, 57)"

    sobre_descricao.style.color = "rgb(17, 38, 57)"
    
    claro.style.display = "none"
    escuro.style.display = "block"
}

function modoEscuro() {
    body.style.backgroundColor = 'rgb(17, 38, 57)'
    header.style.backgroundColor = 'rgb(17, 38, 57)'
    menu_mobile.style.backgroundColor = 'rgb(17, 38, 57)'

    sobre_titulo.style.backgroundColor = 'rgb(17, 38, 57)'

    inicio.style.color = 'white'
    sobre.style.color = 'white'
    projetos.style.color = 'white'

    hamb.style.color = 'white'

    m_inicio.style.color = 'white'
    m_sobre.style.color = 'white'
    m_projetos.style.color = 'white'

    m_inicio.style.borderColor = 'white'
    m_sobre.style.borderColor = 'white'
    m_projetos.style.borderColor = 'white'

    e_sociais.style.display = "none"
    c_sociais.style.display = "flex"

    c_sociais.style.position = "fixed"
    c_sociais.style.left = "100%"
    c_sociais.style.transform = "translate(-100%)"

    nome.style.color = "white"
    subtitulo.style.color = "white"
    tecnologias.style.color = "white"

    sobre_titulo.style.color = "white"
    hr1.style.background = "white"

    i_eu.style.borderColor = "rgb(209, 209, 209)"

    sobre_descricao.style.color = "white"

    escuro.style.display = "none"
    claro.style.display = "block"
}

function esconde_menu () {
    menu_mobile.style.display = "none"
}