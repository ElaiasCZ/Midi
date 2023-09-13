//Declarar e chamar a função, executar o som através do play
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
  }
  //querySelector para selecionar elementos
  //concede o acesso ao código, atribuir para tocar o som
  document.querySelector('.tecla_pom').onclick = tocaSomPom;