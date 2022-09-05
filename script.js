//Abaixo, estão as variáveis:
let display = "";
let parcela = 0; /*Essa variável inicia como "0", pois, caso contrário,
não conseguiria-se executar a função quando a segunda parcela não for declarada.
Ou seja, dessa forma, deve retornar o mesmo número da primeira parcela*/
let operacao = "";

/*Função para números: ela pega o parâmetro enviado e,
a partir daí, a variável "visor" recebe esse dado.*/
function calculadoraVisor(param) {
  if (typeof param === "number") {
    display = display + param;
  }

  /*Caso a condição acima não seja executada, ela é uma string
que contém uma operação matemática (únicas opções "setadas").
Daí, segue os passos abaixo:*/
//Passo 1 - A variável "parcela" recebe a variável "visor" em formato de número inteiro;
//Passo 2 - A variável "visor" recebe o valor vazio para que seja declarada a segunda parcela da operação;
//Passo 3 - A variável "operacao" recebe o sinal matemático para que possa ser utilizado na condição "=".
//Observação: caso seja uma ".", só acrescenta no display.
  if (typeof param === "string") {
    if (param === ".") {
      display = display + ".";
    }
    if (param === "-") {
      parcela = parseFloat(display);
      display = "";
      operacao = "-";
    }
    if (param === "+") {
      parcela = parseFloat(display);
      display = "";
      operacao = "+";
    }
    if (param === "/") {
      parcela = parseFloat(display);
      display = "";
      operacao = "/";
    }
    if (param === "*") {
      parcela = parseFloat(display);
      display = "";
      operacao = "*";
    }

    //Caso a função receba o valor "=" ela executa os seguintes passos:
    //Passo 1 - Verifica se a variável "operacao" é "+, -, * ou /";
    //Passo 2 - A variável "visor" recebe a 1ª parcela com a execução da operação junto a 2ª parcela;
    //Passo 3 - A variável "operacao" recebe o valor vazio.
    //Passo 4 - A variável "parcela" recebe o valor "0".
    if (param === "=") {
      if (operacao === "+") {
        display = parcela + parseFloat(display);
        operacao = "";
        parcela = 0;
      }
      if (operacao === "-") {
        display = parcela - parseFloat(display);
        operacao = "";
        parcela = 0;
      }
      if (operacao === "/") {
        display = parcela / parseFloat(display);
        operacao = "";
        parcela = 0;
      }
      if (operacao === "*") {
        display = parcela * parseFloat(display);
        operacao = "";
        parcela = 0;
      }
    }
  }

  //Manipulação do html para mostrar o resultado.
  document.getElementById("display").textContent = display;
}

//Na função limparDisplay, as variaveis recebem os valores ini
function limparDisplay(){
  display = "";
  parcela = 0;
  operacao = "";
  document.getElementById("display").textContent = display;
}

/*Estou com problemas quando a operação é realizada. Após isso, sempre quando se clica em número ele é somado.
Pensei na function abaixo para resolver, mas não estou conseguindo aplicar. Vou ver mais amanhã, pq preciso dormir. :)*/
function resetar(){
  parcela = 0;
  operacao = "";
}