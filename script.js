let visor = "";
let parcela = 0; /*Essa variável inicia como "0", pois, caso contrário,
não conseguiria-se executar a função quando a segunda parcela não for declarada.
Ou seja, dessa forma, deve retornar o mesmo número da primeira parcela*/
let operacao = "";

/*Função para números: ela pega o parâmetro enviado e,
a partir daí, a variável "visor" recebe esse dado.*/
function calcular(param) {
    if (typeof param === "number") {
        visor = visor + param;
    }

/*Caso a condição acima não seja executada, ela é uma string
que contém uma operação matemática (únicas opções "setadas").
Daí, segue os passos abaixo:*/
//Passo 1 - A variável "parcela" recebe a variável "visor" em formato de número inteiro;
//Passo 2 - A variável "visor" recebe o valor vazio para que seja declarada a segunda parcela da operação;
//Passo 3 - A variável "operacao" recebe o sinal matemático para que possa ser utilizado na condição "=".
    if (typeof param === "string") {
        if (param === "-") {
            parcela = parseInt(visor);
            visor = "";
            operacao = "-";
        }
        if (param === "+") {
            parcela = parseInt(visor);
            visor = "";
            operacao = "+";
        }
        if (param === "*") {
            parcela = parseInt(visor);
            visor = "";
            operacao = "*";
        }
        if (param === "/") {
            parcela = parseInt(visor);
            visor = "";
            operacao = "/";
        }

        //Caso a função receba o valor "=" ela executa os seguintes passos:
        //Passo 1 - Verifica se a variável "operacao" é "+, -, * ou /";
        //Passo 2 - A variável "visor" recebe a 1ª parcela com a execução da operação junto a 2ª parcela;
        //Passo 3 - A vairável "operacao" recebe o valor vazio.
        if (param === "=") {
            if (operacao === "+") {
                visor = parcela + parseInt(visor);
                operacao = "";
            }
            if (operacao === "-") {
                visor = parcela - parseInt(visor);
                operacao = "";
            }
            if (operacao === "*") {
                visor = parcela * parseInt(visor);
                operacao = "";
            }
            if (operacao === "/") {
                visor = parcela / parseInt(visor);
                operacao = "";
            }
        }
    }

    //Mostra o resultado na visor
    document.getElementById("visor").textContent = display;
}