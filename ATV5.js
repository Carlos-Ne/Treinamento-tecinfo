/*
for(i=1; i<=10; i++){
    if(i % 2 === 0)
    console.log(i);
}
*/
/*
for(i=10; i>=1; i--){
    //if(i % 2 === 0)
    console.log(i);
}
*/
/*
let par = 0;
let impar = 0;
for(i=0; i<10; i++){
   const numero = Number(prompt("Diga um numero:"));
   //console.log(numero); 
   if(numero % 2 === 0){
        par = par +1
        //console.log("Par");
    }else{
        impar = impar +1
       // console.log("Impar");
    }
}
console.log(`Os numeros par sao:${par}`);
console.log(`Os numeros impar sao:${impar}`);
*/
/*
const numeroEscolhido = 7;
for(i=0; i<=7; i++){
    const numero = Number(prompt("Digar um numero"));
    if(numero < numeroEscolhido){
        console.log("È um numero maior");
    }else if(numero > numeroEscolhido){
        console.log("È um numero menor");
    }else{
        console.log("Parabens, voce acertou");
        break;
    }
}
*/
/*Atividade For*/
/*1
const numero = Number(prompt("Diga um numero:"));
for(i=numero; i>=1; i--){
    console.log(i);
}
*/
/*2
let par = 0;
const numero = Number(prompt("Diga o numero escolhido"));
for(i=2; i <= numero; i++){
    if(i % 2 === 0){
        par = par + i;
    }
}
console.log(`O seu numero ${numero} é ${par}`);
*/
/*3*/
/*
const numero = (prompt("Digar o seu numero"));
console.log(`Tabuada de ${numero}:`);
for(let i = 1; i <= 10; i++){
console.log(`${numero} x ${i} = ${numero * i}`);
}
*/
/*4*/
/*
let quadrado = 0;
const numero = Number(prompt("Diga o numero escolhido"));
for(i=1; i <= numero; i++){
        quadrado = quadrado + (i ** 2);
}
console.log(`O seu numero ${numero} é ${quadrado}`);
*/

/*Lista 2*/
/*
const numero = Number(prompt("Insirar um numero:"));
let soma = 0;
for(let i=1; i<=numero; i++){
    soma = soma + (i + i);
    console.log(`${soma}`);
}
*/

//1°
/*const numero = Number(prompt("insira um numero"))
let acumulado = 0;
for(i=1; i <= numero ; i++){
    acumulado +=  i;
}
console.log(acumulado);
*/


//2°
/*const numero = Number(prompt("Insira um numero"));
let divisiveis = 0;
for(i=1;i<=numero;i++){
    if(i%3===0){
        divisiveis+=1;
    }
}
console.log(divisiveis);*/


//3°
/*const numero = Number(prompt("Insira um numero"));
let aux = 0;
for(i=1; i<=numero;i++){
    if(i%2===0 && i%5===0){
          aux+=1
    }
}
console.log(aux);*/


//4°
/*const numero = Number(prompt("Insira um numero"));
let aux = 0;
for(i=1; i<=numero; i++){
    if(i % 10 === 0){
        aux +=1;
    }
}
console.log(aux);*/


//5°
/*let aux = 0;
for(i=1; i<=3; i++){
    const valor = Number(prompt("Insira o valor"));
    const quantidade = (prompt("Insira a quantidade"));
    aux+= valor*quantidade;


}
console.log(`Total= ${aux}}`);
*/
//____________________________________________________________________________


//1°
/*let aux = 0;
for(i=1;i<=5;i++){
    const valor = Number(prompt("Insira valor"));
    if(valor > aux){
        aux = valor
    }
}
console.log(`O maior valor é ${aux}`);*/


/*let aux = 100000;
for(i=1;i<=5;i++){
    const valor = Number(prompt("Insira valor"));
    if(aux > valor){
        aux = valor
    }
}
console.log(`O maior valor é ${aux}`);*/

