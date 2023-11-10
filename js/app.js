function alterarStatus(jogo) {
    let seletor = `#game-${jogo} .dashboard__item__button`;
    let botao = document.querySelector(seletor);
    let texto = botao.text;
    //console.log(texto);
    if (texto == 'Alugar') {
        console.log(`O texto é Alugar`);
        botao.innerHTML = 'Devolver';
        botao.style.background = '#01080E';
    } else if (texto == 'Devolver') {
        console.log(`O texto é Devolver`);
        botao.innerHTML = 'Alugar';
        botao.style.background = '#1875E8';
    }
}
