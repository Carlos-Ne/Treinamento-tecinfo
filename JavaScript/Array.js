//Lista de execircio UM:
 /*
const temperaturaMedia = [];
 temperaturaMedia[0] = 31.9;
 temperaturaMedia[1] = 35.4;
 temperaturaMedia[2] = 25.4;
 temperaturaMedia[3] = 22.9;

 for(i = 0; i < temperaturaMedia.length; i++){
     console.log(temperaturaMedia[i]);
 }
 */
/*
const fila = [".."]
const prioridade = prompt("...");
const nome = prompt("...");
if(prioridade === "sim"){
    fila.unshift(nome);
}else{
    fila.push(nome);
}
console.log(fila);
*/
/*
const senhas = [`A1`,`A2`,`A3`];
const quantasChamadas = parseInt(prompt("..."));
const chamadas = [];
const restantes = [];
for(i=0;i<senhas.length;i++){
    if(i+1<=quantasChamadas){
        chamadas.push(senhas);
    }else{
        restantes.push(senhas);
    }
}
console.log(chamadas);
console.log(restantes);
*/
/*
const livros = [`dom`,`1984`,`o homen`];
const livro = prompt("...");
const index = livros.indexOf(livro);
if(index === -1){
    console.log("livro não encotrado");
}else{
    console.log(`Livro encotrado na posição ${index}`);
}
*/

while(true){
    alert(
        `Bem-vindo ao Sistema de Controle de Fila da Clínica Médica
    Olá! Você acaba de entrar no Sistema de Controle de Fila da nossa clínica médica.
    Aqui, você poderá gerenciar a entrada e chamada dos pacientes de forma eficiente e
    organizada.
    Por favor, selecione uma das opções abaixo para prosseguir:`);
    alert(
          `1. Adicionar paciente sem prioridade na fila
           2. Adicionar paciente com prioridade na fila
           3. Chamar próximo paciente para atendimento
           4. Consultar sua posição na fila
           5. Sair do sistema`);
    const numeroFila = Number(prompt("Diga o numero que se voce se encaxar:"));
    break;
    if(numeroFila === 1){
const nome = prompt("Diga seu nome:");

}else if(numeroFila === 2){
const nomePrioridade = prompt("Diga seu nome:");


}else if(numeroFila === 3){
    console.log(`...`);
}else{
    //nome
}
}