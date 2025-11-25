/*
const numero = Number(prompt("Insirar um numero: "));
if(numero % 2 === 0){
    console.log(`O seu numero é par`);
}else{
    console.log(`O seu numero é impar`);
}
*/
/*
let nome = prompt("Diga o seu nome: ");
const idade = Number(prompt("Diga a sua idade: "));
if(idade >= 18){
    console.log(`${nome}, voce é maior de idade!`);
}else{
    console.log(`${nome}, voce é menor de idade`);
}
*/
/*
const nota1 = Number(prompt ("Media do primeira nota: "));
const nota2 = Number(prompt ("Media do segunda nota: "));
const nota3 = Number(prompt ("Media do terceira nota: "));
const mediaFinal = (nota1 + nota2 + nota3) / 3;
if(mediaFinal >= 7){
    console.log(`Aprovando`);
}else if(mediaFinal >= 5){
    console.log(`Recuperaçao`);
}else{
    console.log("Reprovador"); 
}
*/
/*
const valorReal = Number(prompt("Diga o valor em real"));
const moeda = prompt("Diga qual é a moeda: ");
const euro = valorReal / 6;
const dolar = valorReal / 5;
const peso = valorReal * 350;
if(moeda === "euro"){
    console.log(`Valor da conveçao ${euro}`);
}else if(moeda === "dolar"){
    console.log(`Valor da conveçao ${dolar}`);
}else if(moeda === "peso"){
    console.log(`Valor da conveçao ${peso}`);
}else{
    console.log("Escolhar o moeda,euro, peso, dolar");
}
*/
/*
const nome = prompt("Diga o seu nome: ");
const idade = Number(prompt("Digite a sua idade:"));
const valorEmprestimo = Number(prompt("Digite o valor desejado para o emprestimo aqui: "));
const anosPagamento = Number(prompt("Digite o numero de anos que voce planeja levar para pagar o empretismo: "));
if(idade <= 25){
    const anosVintecinco = valorEmprestimo * (1 + 0.05 * anosPagamento);
    console.log(`O tanto a ser pagor é de ${anosVintecinco}`);
}else if(idade >= 25 && idade <=35){
    const anosTrita = valorEmprestimo * (1 + 0.06 * anosPagamento);
    console.log(`O tanto a ser pagor é de ${anosTrita}`);
}else if(idade >= 36 && idade <= 50){
    const anosCinqueta = valorEmprestimo * (1 + 0.05 * anosPagamento);
    console.log(`O tanto a ser pagor é de ${anosCinqueta}`);
}else{
    const anosCinqueMais = valorEmprestimo * (1 + 0.07 * anosPagamento);
    console.log(`O tanto a ser pagor é de ${anosCinqueMais}`);
}
*/
/*
const valorUm = Number(prompt("Digar o valor do primeiro lador: "));
const valorDois = Number(prompt("Digar o valor do segundo lador: "));
const valorTres = Number(prompt("Digar o valor do terceiro lador: "));
if(valorUm === valorDois && valorUm === valorTres){
    console.log(`O seu triangulo é equilatero`);
}else if(valorUm === valorDois && valorUm != valorTres ){
    console.log(`O seu triangulo é isosceles`);
}else{
    console.log(`O seu triangulo é escaleno`);
}
*/
/*
const correndoUm = Number(prompt("Diga o primeior tempo do correndo um:"));
const correndoDois = Number(prompt("Diga o segundo tempo do correndo dois: "));
const correndoTres = Number(prompt("Diga o terceiro tempo do correndo tres: "));
if(correndoUm < correndoDois && correndoUm < correndoTres){
    console.log("O correndo um ganhou!");
}else if(correndoDois < correndoUm && correndoDois < correndoTres){
    console.log("O correndo dois ganhou!");
}else if(correndoTres < correndoUm && correndoTres < correndoDois){
    console.log("O correndo tres ganhou!");
}else{
    console.log("Deu empate!");
}
 */
/*
const nome = prompt("Qual é o nome do aluno:");
const notaUm = Number(prompt("Qual é a primeira nota:"));
const notaDois = Number(prompt("Qual é a segunda nota:"));
const media = (notaUm + notaDois) / 2;
if(media <= 5 ){
    console.log("Reprovado!");
}else if(media >= 5 && media <= 6.9 ){
    console.log("Recuperaçao!");
}else{
    console.log("Aprovando!");
}
*/
/*
const distanciaPercorida = Number(prompt("Qual foi a distancia Percirrida em km?"));
const combustivelGasto = Number(prompt("Quando combustivel foi gasto em listros?"));
const medio = distanciaPercorida / combustivelGasto;
if(medio <= 8){
    console.log("Consumo alto, veículo ineficiente");
}else if(medio >= 8 && medio <= 12 ){
    console.log("Consumo moderado");
}else{
    console.log("Veículo econômico");
}
*/
/*
const valor = Number(prompt("Qual é o valor do produto:"));
let desconto;
if (desconto <= 100){
    desconto = valor;
}else if(desconto >= 101 && desconto <= 500){
    desconto = valor*0.95;
}else{
    desconto = valor*0.90;
}
console.log(`Valor com desconto R$ ${desconto}`);
*/
/*
const idade = Number(prompt("Qual a sua idade?"));
if (idade <= 12){
    console.log("Entrada proibida");
}else if(idade >= 12 && idade <= 17){
    console.log("Acompanhado de responsavel");
}else if(idade >= 18 && idade <= 59){
    console.log("Entrada liberda");
}else{
    console.log("Entrada gratuita");
}
*/
/*
const peso = Number(prompt("Diga o seu peso"));
const altura = Number(prompt("Diga a sua altura"));
const imc = peso / (altura * altura);
if (imc <= 18.5){
    console.log("Abaixo do peso");
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("Peso normal");
}else if(imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso");
}else{
    console.log("Obesidade");
}
*/
/*
const numero = Number(prompt("Diga o seu numero:"));
if (numero % 2 === 0){
    console.log("Par");
}else{
    console.log("Imapr");
}
*/
/*
const velocidade = Number(prompt("Diga a velocidade do veiculo"));
if(velocidade === 80){
    console.log("Dentro do limite");
}else if(velocidade >= 81 && velocidade <= 100){
    console.log("Advertencia leve");
}else{
    console.log("Multa grave");
}
*/