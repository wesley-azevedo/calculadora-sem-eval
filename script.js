let visor = "";
let parcela = 0;
let operacao = "";

//Função para números
function calcular(param) {
    if (typeof param === "number") {
        visor = visor + param;
    }

//Função para operações
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

        //Operação do resultado
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

    document.getElementById("display").textContent = display;
}