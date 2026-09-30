let slideAtual = 0;

const slides = document.querySelector(".slides");
const todosSlides = document.querySelectorAll(".slide");

const anterior = document.querySelector("#anterior");
const proximo = document.querySelector("#proximo");


function atualizarCarrossel() {

    slides.style.transform = `translateX(-${slideAtual * 100}%)`;

}


proximo.addEventListener("click", function () {

    slideAtual++;

    if (slideAtual >= todosSlides.length) {
        slideAtual = 0;
    }

    atualizarCarrossel();

});


anterior.addEventListener("click", function () {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = todosSlides.length - 1;
    }

    atualizarCarrossel();

});