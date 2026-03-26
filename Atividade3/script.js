// CONTADOR
let contador = 0;

const spanContador = document.getElementById("contador");
const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");

btnMais.addEventListener("click", () => {
    contador++;
    spanContador.textContent = contador;
});

btnMenos.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        spanContador.textContent = contador;
    } else {
        alert("O contador já está em zero!");
    }
});

// TEXTO DINÂMICO
const inputTexto = document.getElementById("inputTexto");
const areaTexto = document.getElementById("areaTexto");
const charCount = document.getElementById("charCount");

inputTexto.addEventListener("input", () => {
    const texto = inputTexto.value.replace(/\s/g, "");
    charCount.textContent = texto.length;
});

inputTexto.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const texto = inputTexto.value.trim();
        if (texto !== "") {
            const p = document.createElement("p");
            p.textContent = texto;
            areaTexto.appendChild(p);

            inputTexto.value = "";
            charCount.textContent = 0;
        }
    }
});

// LISTAS
const tipoLista = document.getElementById("tipoLista");
const btnLista = document.getElementById("addLista");
const areaListas = document.getElementById("areaListas");

btnLista.addEventListener("click", () => {
    const tipo = tipoLista.value;
    const lista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        const item = document.createElement("li");
        item.textContent = "Item " + i;
        lista.appendChild(item);
    }

    areaListas.appendChild(lista);
});

// RESET
const btnReset = document.getElementById("resetar");

btnReset.addEventListener("click", () => {
    contador = 0;
    spanContador.textContent = 0;

    areaTexto.innerHTML = "";
    areaListas.innerHTML = "";

    inputTexto.value = "";
    charCount.textContent = 0;
});