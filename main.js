//tecla Pom
/*function tocaSomPom () {
  document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

//tecla clap
function tocaSomClap () {
  document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

//tecla Tim
function tocaSomTim () {
  document.querySelector('#som_tecla_tim').play();
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;

//tecla Puff
function tocaSomPuff () {
  document.querySelector('#som_tecla_puff').play();
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

//tecla Splash
function tocaSomSplash () {




  document.querySelector('#som_tecla_splash').play();
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

//tecla Toim
function tocaSomToim () {
  document.querySelector('#som_tecla_toim').play();
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;

//tecla Psh
function tocaSomPsh () {
  document.querySelector('#som_tecla_psh').play();
}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;

//tecla Tic
function tocaSomTic () {
  document.querySelector('#som_tecla_tic').play();
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;

//tecla Tom
function tocaSomTom () {
  document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_tom').onclick = tocaSomTom;



document.querySelectorAll('.tecla');


/*criando referencia - (reduzindo referencia da linha)deve utilizar a palavra reserva-da const. A palavra const vem de "constante", ou seja, algo que nunca muda.
Então criar um nome para essa lista(para guardar a lista de botoes)
Para armazenar um valor na referencia criada, utilize o comando de atribuição =.
Conclusão:a lista de elementos encontrada por meio do método de busca
querySelectorAll será armazenada na referência listaDeTeclas.*/


//Declarar e chamar a função, executar o som através do play
/*
querySelector para selecionar elementos
concede o acesso ao código, atribuir para tocar o som*/

function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {
      elemento.play();
  }
  else {
      //alert('Elemento não encontrado');
      console.log('Elemento não encontrado ou seletor inválido');
  }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //template string

  tecla.onclick = function () {
      tocaSom(idAudio);
  }

//eventos do teclado onkeydowne onkeyup.
//adicionar e remover classes em um elemento HTML através do JavaScript, com as funções add e remove do classList.   
  tecla.onkeydown = function (evento) {

      if (evento.code === 'Space' || evento.code === 'Enter') {
          tecla.classList.add('ativa');
      }

  }

  tecla.onkeyup = function () {
      tecla.classList.remove('ativa');
  }

}

/*Template string é uma forma de facilitar a exibição de texto no JavaScript, 
ele permite agrupar textos (strings) com outros tipos de informação, como number, boolean, array, entre outros.

Estrutura de repetição for(significa para). 
Estrutura condicional if(significa se).

Operador de igualdade ==, estritamente igual (===), e o operador or (||).

A estruturas condicionais if e else juntas. 
O operador not equals (!=), operador lógico and (&&) e o valor null.*/
