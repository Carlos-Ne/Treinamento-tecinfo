/*
const contaEnergia = Number(prompt("Diga o valor da conta de energia em kWh:"));
let tarifa;
if(contaEnergia <= 100){
    tarifa = contaEnergia*0.50;
}else if(contaEnergia >= 101 && contaEnergia <= 200){
    tarifa = contaEnergia*0.70;
}else{
    tarifa = contaEnergia*0.90;
}
console.log(`O valor total da conta é ${tarifa}`);
*/
/*
const numeroSegreto = 5;
const numeroUsuario = Number(prompt("Diga o seu numero:"));
if(numeroUsuario <= 4){
    console.log("Tente novamente");
}else if(numeroUsuario === numeroSegreto){
    console.log("Parabens, voce acertou!");
}else{
    console.log("Tente novamente");
}
*/
/*
const nota = Number(prompt("Diga a sua nota:"));
if (nota <= 3){
    console.log("Ruim");    
}else if(nota >= 4 && nota <= 6){
    console.log("Regurla");
}else if(nota >= 7 && nota <= 8){
    console.log("Bom");
}else{
    console.log("Exelente");
}
*/
/*
const notaAtendimento = Number(prompt("Diga a sua nota do antedimento:"));
if(notaAtendimento === 1){
    console.log("Muito ruim");
}else if(notaAtendimento === 2){
    console.log("Ruim");
}else if(notaAtendimento === 3){
    console.log("Regular");
}else if(notaAtendimento === 4){
    console.log("Bom");
}else{
    console.log("Exelente");
}
*/
/*
const ladoUm = Number(prompt("Diga o primeiro lado do triangulo: "));
const ladoDois = Number(prompt("Diga o primeiro lado do triangulo: "));
const ladoTres = Number(prompt("Diga o primeiro lado do triangulo: "));
if(ladoUm + ladoDois > ladoTres && ladoTres + ladoDois > ladoUm && ladoUm + ladoTres > ladoDois){

    if(ladoUm === ladoDois && ladoUm === ladoTres){
        console.log("Equilatero");
    }else if(ladoUm === ladoTres && ladoUm !== ladoDois && ladoDois === ladoTres){
        console.log("Isosceles");
    }else{
        console.log("Escaleno");
    }

}else{
    console.log("Nao é um triangulo!");
}
*/
/*
const idade = Number(prompt("Diga a sua idade"));
const ingresso = String(prompt("Tem ingresso?"));
if(ingresso === "sim" || ingresso === "Sim"){
    if(idade < 18){
        console.log("Entrada apenas com responsavel");
    }else{
        console.log("Entrada liberada");
    }

}else{
    console.log("Entrada negada, sem ingresso");
}
*/
/*
const atual = Number(prompt("A quamtidade atual em estoque:"));
const minimo = Number(prompt("A quamtidade minimo permitido no estoque:"));
if(atual < minimo){
    console.log("Reposiçao urgente!");
}else if(atual === minimo){
    console.log("Atençao, estoque limite!");
}else{
    console.log("Estoque suficiente");
}
*/
/*
const temperatura = Number(prompt("Diga a termperatura do dia"));
if(temperatura <50){
    if(temperatura < 15){
        console.log("Frio");
    }else if(temperatura >= 15 && temperatura <= 25){
        console.log("Agradavel");
    }else{
        console.log("Calor");
    }
}else{
    console.log("Nao é uma temperatura valida, recoloque");
}
*/
/*
const consumo = Number(prompt("Digar o consumo mensaL em listros"));
if(consumo === 500){
    console.log("Consumo consciente");
}else if(consumo >= 501 && consumo < 1500){
    console.log("Consumo moderado");
}else{
    console.log("Consumo exessivo");
}
*/
/*
const idade = Number(prompt("Diag a sua idade"));
const deficiencia = prompt("Tem deficiencia?");
if(idade >= 60 || deficiencia === "sim"){
    console.log("Atendimento prioritario");
}else{
    console.log("Antedimento normal");
}
*/
/*
const clima = String(prompt("Diga a previsao do tempo (ensolarando, nublado ou chuvoso):"));
if(clima === "ensolarando"){
    console.log("Otimo dia para viajar!");
}else if(clima === "nublado"){
    console.log("Viagem possivel com precauçao");
}else{
    console.log("Melhor adiar a viagem");
}
*/
/*
const calorias = Number(prompt("O numero de calorias:"));
if(calorias < 100){
    console.log("Baixa caloria");
}else if(calorias >= 100 && calorias < 300){
    console.log("Caloria media");
}else{
    console.log("Alta caloria");
}
*/
/*
const lucro = Number(prompt("Diga o lucro mensal da empresa"));
if(lucro < 0){
    console.log("Prejuizo");
}else if(lucro === 0){
    console.log("Equilibrio");
}else{
    console.log("Lucro positivo");
}
*/
/*
const nota = Number(prompt("Diga a nota do atendimento"));
if(nota <= 5){
    if(nota === 1){
        console.log("Muito ruim");
    }else if(nota === 2){
        console.log("Ruim");
    }else if(nota === 3){
        console.log("Regular");
    }else if(nota === 4){
        console.log("Bom");
    }else{
        console.log("Excelente");
    }

}else{
    console.log("Diga a nota de 1 a 5");
}
*/
/*
const rendaMensal = Number(prompt("Diga a sua renda Mensal"));
const emprestimo = Number(prompt("Diga o valor do seu emprestimo"));
const rendaMetade = rendaMensal*0.50;
const rendaTrista = rendaMensal*0.30;
if(emprestimo > rendaMetade){
    console.log("Credito negado");
}else if(emprestimo >= rendaTrista && emprestimo <= rendaMensal){
    console.log("Credito em analise")
}else{
    console.log("Credito aprovado")
}
*/
/*
const tempo = Number(prompt("Diga o tempo em minutos"));
const distancia = Number(prompt("Diga a diatancia em km"));
const ritmo = tempo / distancia;
if(ritmo < 5){
    console.log("Excelente ritmo");
}else if(ritmo >= 5 && ritmo <= 7){
    console.log("Bom ritmo");
}else{
    console.log("Ritmo lendo")
}
*/
/*
const valor = Number(prompt("Diga o "));
if(valor > 100){
    if(valor >= 100 && valor <= 300){
        console.log("Cupom bronze");
    }else{
        console.log("Cupom ouro");
    }
}else{
    console.log("Sem cupom");
}
*/