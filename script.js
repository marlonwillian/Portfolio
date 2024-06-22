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

let nome = document.getElementById("nome")
let subtitulo = document.getElementById("subtitulo")
let tecnologias = document.getElementById("tecnologias")

let lista_projetos = document.getElementById("lista_projetos")
let sobre_titulo = document.getElementById("sobre_titulo")
let projetos_titulo = document.getElementById("projetos_titulo")

// let jogo_da_velha = document.getElementById("jogo_da_velha")
// let gerador_de_cartas = document.getElementById("cartas")

// let jogo_da_cobrinha = document.getElementById("jogo_da_cobrinha")
// let pagina_netflix = document.getElementById("pagina_netflix")

let hr1 = document.getElementById("linha_1")
let hr2 = document.getElementById("linha_2")

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
    body.style.backgroundColor = "#D1D1D1";
    header.style.backgroundColor = "#D1D1D1";
    menu_mobile.style.backgroundColor = "#D1D1D1";

    sobre_titulo.style.backgroundColor = "#D1D1D1";
    projetos_titulo.style.backgroundColor = "#D1D1D1";

    inicio.style.color = '#112639';
    sobre.style.color = '#112639';
    projetos.style.color = '#112639';

    hamb.style.color = '#112639';

    m_inicio.style.color = '#112639';
    m_sobre.style.color = '#112639';
    m_projetos.style.color = '#112639';

    m_inicio.style.borderColor = '#112639';
    m_sobre.style.borderColor = '#112639';
    m_projetos.style.borderColor = '#112639';

    c_sociais.style.display = "none"
    e_sociais.style.display = "flex"

    e_sociais.style.position = "fixed"
    e_sociais.style.left = "100%"
    e_sociais.style.transform = "translate(-100%)"

    e_github.href = "https://www.github.com/marlonwillian"
    e_linkedin.href = "https://www.linkedin.com/in/marlon-willian-silva-barros-30b49122b/"
    e_insta.href = "https://www.instagram.com/mwbrrs/"

    nome.style.color = "#112639";
    subtitulo.style.color = "#112639";
    tecnologias.style.color = "#112639";

    sobre_titulo.style.color = "#112639";
    projetos_titulo.style.color = "#112639";

    hr1.style.background = "#112639";
    hr2.style.background = "#112639";

    hr1.style.borderColor = "white";
    hr2.style.borderColor = "white";

    i_eu.style.borderColor = "#112639";

    sobre_descricao.style.color = "#112639";

    claro.style.display = "none";
    escuro.style.display = "block";
    }

    function modoEscuro() {
    body.style.backgroundColor = '#112639';
    header.style.backgroundColor = '#112639';
    menu_mobile.style.backgroundColor = '#112639';

    sobre_titulo.style.backgroundColor = '#112639';
    projetos_titulo.style.backgroundColor = '#112639';
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

    projetos_titulo.style.color = "white"

    hr1.style.background = "white";
    hr2.style.background = "white";

    hr1.style.borderColor = "#112639";
    hr2.style.borderColor = "#112639";

    i_eu.style.borderColor = "#D1D1D1";

    sobre_descricao.style.color = "white"

    escuro.style.display = "none"
    claro.style.display = "block"
}

function esconde_menu () {
    menu_mobile.style.display = "none"
}

window.onscroll = function () {
    if (window.scrollY > 0) {
        header.style.boxShadow = "5px 3px 8px #00000080"
    } else {
        header.style.boxShadow = "none"
    }
};