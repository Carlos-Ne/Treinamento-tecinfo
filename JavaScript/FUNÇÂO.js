/*
function casa(){
    if(casa === "sim"){
        alert("Voce tem casa!");
    }else{
        alert("Voce nao tem casa!");
    }
}
*/
/*
function converterCelsiusParaFahrenheit(celsios){
    return (celsios * 1.8) + 32;
}
let soma = converterCelsiusParaFahrenheit(10);
alert(soma);
*/
/*Um programa em JavaScript que realize um 
interrogatório, fazendo cinco perguntas a
uma pessoa(usuário) sobre um 
crime. Com base nas respostas dadas, 
exiba a classificação
do interrogado no console do navegador.
Perguntas:
● "Telefonou para a vítima?"
● "Esteve no local do crime?"
● "Mora perto da vítima?"
● "Devia para a vítima?"
● "Já trabalhou com a vítima?"

Neste exemplo, o programa deve analisar as respostas dadas para cada pergunta e
determinar a classificação do interrogado com base nas seguintes regras:
● 5 respostas "Sim" - Classificação: Assassino
● 3 ou 4 respostas "Sim" - Classificação: Cúmplice
● 2 respostas "Sim" - Classificação: Suspeita
● 0 ou 1 resposta "Sim" - Classificação: Inocente
*/
/*
function cabocu(pala){
    alert(pala)
}
cabocu(prompt("Diga a palavra"))
cabocu(prompt("Diga o pala"))
cabocu(prompt("Diga a pa"))
cabocu(prompt("Diga a a"))
function cabo(palava){
    alert(palava)
}
cabo( prompt("Diga outra palavra"))
/*

const per1 = prompt("Telefonou para a vitima?");
const per2 = prompt("Esteve no local do crime?");
const per3 = prompt("Mora perto da vitima");
const per4 = prompt("Devia para a vitima?");
const per5 = prompt("Já trabalhou com a vítima?");
let ver = 0;

function Analise(x){
    if(x === "Sim" || x === "sim"){
    ver = ver + 1;
    return ver;
}
}

Analise(per1);
Analise(per2);
Analise(per3);
Analise(per4);
Analise(per5);

function acusacao(y){
    if(ver === 5){
        console.log("Classificação: Assassino. ");
    }else if(ver === 4 || ver === 3){
        console.log("Classificação: Cúmplice. ");
    }else if(ver === 2 ){
        console.log("Classificação: Suspeita. ");
    }else{
        console.log("Classificação: Inocente. ")
    }
}

console.log(`número de provas: ${ver}`);

acusacao(ver);
*/
/*
function soma(x,y){
    somatoria = x+y;
    return somatoria;
}

const i = 10;
const e = 5;

soma(i,e);

console.log(somatoria)
*/
/*
function calcularMedia(x,y,z){
    media = (x + y + z) /3;
    return media;
}

calcularMedia(10,7,7);

console.log(media);
*/
/*
function converterCelsiusParaFahrenheit(x){
    converte = (x*1.8) + 32;
    return converte;
}

converterCelsiusParaFahrenheit(10);

console.log(converte);
*/

/*function calcularIMC(x,y){
    imc = x / (y*y);
    return imc;
}
calcularIMC(80,1.80);
console.log(imc);
*/
/*
const word = prompt("Digite uma palavra: ");

let soma = 0;
let i = 0;

function Azão(j,k){
    while(j < k.length){
        if(k[j] === 'a' || k[j] === 'ã'  ){
            soma+=1;
        }
        j+=1

}
}

Azão(i,word);

console.log(soma)
*/
/*Crie um sistema de login em que o usuário insere nome de usuário e senha e
simule o login do usuário.
*/
/*
const Nomeog = "Souza";
const SenhaOG = 2511;
let tentativas = 0;
const tenMax = 4;
function inf(x,y){
    console.log(x,y);
}
while(tentativas<tenMax){
    const nome = prompt("Digite seu nome: ");
    const senha = Number(prompt("Digite sua senha: "));

    if(nome===Nomeog){
        if(senha===SenhaOG){
            inf(nome,senha);
            break;
        }
        else{
            tentativas = tentativas + 1;
        }
    }


}
*/
/*Crie um sistema de login em que o usuário insere nome de usuário e senha e
simule o login do usuário.
*/
/*
const Nomeog = "Souza";
const SenhaOG = 2511;
let tentativas = 0;
const tenMax = 4;
function inf(x,y){
    console.log(x,y);
}
while(tentativas<tenMax){
    const nome = prompt("Digite seu nome: ");
    const senha = Number(prompt("Digite sua senha: "));
    if(nome===Nomeog){
        if(senha===SenhaOG){
            inf(nome,senha);
            break;
        }
        else{
            tentativas = tentativas + 1;
        }
    }
}
*/
/*
function contaogal(texto){
    let contador = 0;
    for(i=0;i<texto.length; i++){
        if(texto [i] === "a" || texto[i] === "e" || texto[i] === "i" || texto[i] === "o" || texto[i] === "u"){
            contador += 1
        }
    }
    return contador
}
const resultado = contaogal("Carlos Alves do Nascimento Neto");
alert(resultado);
*/
/*
function conveterHora(Hora){
    if(Hora >= 1 && Hora <= 12){
        return Hora + "AM"
    }else if(Hora >= 13 && Hora <= 23){
        return Hora - 12 + "PM"
    }else{
        return "12 PM"
    }
}
const resultado = conveterHora(Number(prompt("Diga a hora:")));
alert(resultado);
*/