let operador = null;


const primeiroNumero = document.querySelector("#firstnumber");
const operadorSelecionado = document.querySelector("#selected-operator");
const segundoNumero = document.querySelector("#secondnumber");


const resultado = document.querySelector(".result");


const somar = document.querySelector("#plus");
const subtrair = document.querySelector("#minus");
const multiplicar = document.querySelector("#times");
const dividir = document.querySelector("#division");
const calcular = document.querySelector("#calcular");


somar.addEventListener("click", function () {
    operador = "+";
    operadorSelecionado.textContent = "+";
});

subtrair.addEventListener("click", function () {
    operador = "-";
    operadorSelecionado.textContent = "-";
});

multiplicar.addEventListener("click", function () {
    operador = "*";
    operadorSelecionado.textContent = "*";
});

dividir.addEventListener("click", function () {
    operador = "/";
    operadorSelecionado.textContent = "/";
});



calcular.addEventListener("click", function () {

    const numero1 = Number(primeiroNumero.value);
    const numero2 = Number(segundoNumero.value);

    let conta;

    if (operador === "+") {
        conta = numero1 + numero2;

    } else if (operador === "-") {
        conta = numero1 - numero2;

    } else if (operador === "*") {
        conta = numero1 * numero2;

    } else if (operador === "/") {

        if (numero2 === 0) {
            conta = "Não é possível dividir por 0";
        } else {
            conta = numero1 / numero2;
        }

    } else {
        conta = "Escolha um operador";
    }

    resultado.textContent = conta;
});

