function crescer1() {
    document.getElementById('res1').classList.toggle('aberto');
}
function crescer2() {
    document.getElementById('res2').classList.toggle('aberto');
}
function crescer3() {
    document.getElementById('res3').classList.toggle('aberto');
}

function modoEscuro() {
    const ativo = document.body.classList.toggle('dark');
    document.getElementById('modoEscuro').textContent = ativo ? 'Modo Claro' : 'Modo Escuro';
}

function enviarWhats(event) {
            event.preventDefault()

            const nome = document.getElementById('nome').value;
            const mensagem = document.getElementById('mensagem').value;
            const telefone = '5527999757756';

            const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
            const msgFormatada = encodeURIComponent(texto);

            const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

            window.open(url, '_blank');

            document.getElementById('formulario-contato').style.display = 'none';
            document.getElementById('mensagem-enviada').style.display = 'flex';
        }