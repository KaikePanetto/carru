function crescer1() {
    document.getElementById('res1').classList.toggle('aberto');
}
function crescer2() {
    document.getElementById('res2').classList.toggle('aberto');
}
function crescer3() {
    document.getElementById('res3').classList.toggle('aberto');
}

let escuro = false;

function modoEscuro() {
    escuro = !escuro;
    document.querySelectorAll(".bg-aliceblue").forEach(secao => {
        secao.style.backgroundColor = escuro ? "#888888" : "aliceblue";
        secao.style.color = escuro ? "white" : "black";
    });

    document.querySelectorAll(".card").forEach(card => {
        card.style.backgroundColor = escuro ? "#6e6e6e" : "white";

        card.querySelectorAll("h5, h6, p").forEach(texto => {
            texto.style.color = escuro ? "white" : "black";
        });
    });
}