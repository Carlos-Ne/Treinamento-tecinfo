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