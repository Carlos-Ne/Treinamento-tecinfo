/*
const nome = prompt("Digar a palavra:");
let nomeInvertido = "";
for(i=nome.length-1; i>=0; i--){
    if(nome[i]!==""){
        nomeInvertido+=nome[i]
    }
}
if(nomeInvertido === nome){
    alert("È palidomo");
}else{
    alert("Não é palidomo");
}
*/

// Atividade de nova materia
/*
var perguntas = [
    "Telefonou para a vítima?",
    "Esteve no local do crime?",
    "Mora perto da vítima?",
    "Devia para a vítima?",
    "Já trabalhou com a vítima?"
];
var contadorSim = 0;
for (var i = 0; i < perguntas.length; i++) {
    var resposta = prompt(perguntas[i]);
    
    // Verifica se a resposta é "sim" (tratando letras maiúsculas/minúsculas)
    if (resposta && resposta.toLowerCase().trim() === "sim") {
        contadorSim++;
    }
}
switch (contadorSim) {
    case 5:
        alert("Classificação: Assassino");
        break;
        
    case 4:
    case 3:
        
        alert("Classificação: Cúmplice");
        break;
        
    case 2:
        alert("Classificação: Suspeita");
        break;
        
    default:
        
        alert("Classificação: Inocente");
        break;
}
*/

//Funçao

/*Tipo de função;
Função VOID (vazia) / Não retorna nada
Função com parãmetros
Funçaõ Return
Arrow Function

Uma função no JavaScript é, fundamentalmente, 
um bloco de código reutilizável projetado para 
executar uma tarefa específica.

Imagine que uma função é como uma fábrica ou uma 
receita de bolo:

Você fornece os ingredientes (chamados de parâmetros).

A fábrica processa esses ingredientes (o corpo da função).

Ela devolve um produto final (o retorno).

Por que usar funções?
O principal objetivo é não se repetir. 
Se você precisa calcular a média de 
notas de alunos 10 vezes em seu código,
em vez de escrever a fórmula matemática 
10 vezes, você cria uma função calcularMedia 
e a utiliza quantas vezes quiser.

Isso torna o código:

Mais limpo: Menos linhas de código.

Mais fácil de manter: Se precisar mudar a 
fórmula, muda em um só lugar.

Modular: Divide problemas grandes em pedaços pequenos.

A Anatomia de uma Função
Para criar (declarar) uma função clássica no JavaScript, usamos a seguinte estrutura:

JavaScript
"function nomeDaFuncao(parametro1, parametro2) {
    // Código a ser executado
    return resultado;
}"
*/

/*
function digaQualquerNome(nome){
    alert(nome)
}

digaQualquerNome("Carlos")
*/

/*
function calculo(numeroUm, numeroDois){
    const resultado = numeroUm + numeroDois;
    alert(resultado)
}

calculo(5,9)
*/

/*
function calculo(numeroUm, numeroDois){
    const resultado = numeroUm - numeroDois;
    alert(resultado)
}

calculo(5,9)*/

/*
function calculo(numeroUm, numeroDois){
    const resultado = numeroUm * numeroDois;
    alert(resultado)
}

calculo(5,9)
*/

/*
function calculo(numeroUm, numeroDois){
    const resultado = numeroUm + numeroDois;
    return resultado
}
const resultadoDoCalculo = calculo(50, 20)
alert(resultadoDoCalculo)
*/

/*
function endividado(receita, gastos){
    if(receita > gastos){
        return "Está no Azul"
    }else{
        return "Está no Vermelho"
    }
}
*/

//ATIVIDADE FUNÇÂO

/*
function saudacao(){
    alert("Ola Mundo");
}
saudacao()
*/

/*
function calcularMedia(numeroUm, numeroDois, numeroTres){
    const somar = (numeroUm + numeroDois + numeroTres) / 4;
    alert(somar)
}
calcularMedia(2, 4, 7)
*/