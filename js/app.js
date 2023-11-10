//minha solução
/*
function alterarStatus(idJogo) {
    let seletorBotao = `#game-${idJogo} .dashboard__item__button`;
    let seletorImagem = `#game-${idJogo} .dashboard__item__img img`;
    let botao = document.querySelector(seletorBotao);
    let imagem = document.querySelector(seletorImagem);
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
}*/

//solução Alura
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    //classList devolve todas as classes de um elemento
    //queremos saber se o elemento contém uma classe específica, então usamos o contains()
    //para mudar a imagem, vamos adicionar a classe dashboard__item__img--rented
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        //se o elemento é tem a classe com --rented, temos que tirar essa classe após o clique
        imagem.classList.remove('dashboard__item__img--rented');
        //alterando o texto do botão
        botao.textContent = 'Alugar';
        //removendo a classe do botão com --return no final
        botao.classList.remove('dashboard__item__button--return');
    } else {
        //adicionar a classe se 
        imagem.classList.add('dashboard__item__img--rented');
        //mexendo no botão
        botao.textContent = 'Devolver';
        //removendo a classe do botão com --return no final
        botao.classList.add('dashboard__item__button--return');
    }
}
