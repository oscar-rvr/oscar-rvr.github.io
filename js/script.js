document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');

}






//scroll-up
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
        buttonUp.style.transform = "scale(0)";
    }
}

//
buttonUp = document.getElementById("button-up");
window.onscroll = function() {
        var scroll = document.documentElement.scrollTop;
        if (scroll > 500) {
            buttonUp.style.transform = "scale(1)";
        } else if (scroll < 500) {
            buttonUp.style.transform = "scale(0)";
        }
    }
    //buscador de contenido



document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//ejectuar funciones
//declanrando variables
bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

//funcion para mostrar l buscador
function mostrar_buscador() {
    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === "") {
        box_search.style.display = "none";
    }
}



//funcio para ocultar
function ocultar_buscador() {
    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

}

//ejecutar codigo con tecla
function presionar_tecla() {

    tecla_esc = event.keyCode;
    if (tecla_esc == 27) {
        return ocultar_buscador();

    }

}
window.onkeydown = presionar_tecla;


/*creando filtrado de busqueda*/
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno)

function buscador_interno() {
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    /*recorriendo elmentos a filtrar mediante los li*/
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

        textValue = a.textContent || a.innerText;


        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === "") {
                box_search.style.display = "none";
            }
        } else {
            li[i].style.display = "none";
        }
    }

}