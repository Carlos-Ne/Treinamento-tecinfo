/*
for (let numero=1; numero<=20; numero++){
    if(numero % 2 === 1){
        continue;
    }
console.log(numero)
}
*/

/*
let nome = prompt("Diga seu nome:");
for(i=0; i<= nome.length-1; i++){
    console.log(nome[i]);
}
*/
/*
let nome = prompt("Diga seu nome:");
for(i=nome.length-1; i>= 0; i--){
    console.log(nome[i]);
}
*/
/*
const nome = "Manuel Neto";
let cont =0; 
for(i=0; i<=nome.length-1; i++){
    if(nome[i] === "e"){
        cont += 1;
    }
}
console.log(cont);
*/
/*
let nome = prompt("Diga seu nome:");
let nomeInvetido ="";
for(i=nome.length-1; i>=0; i--){
    nomeInvetido+=nome[i]
    console.log(nome[i]);
}
console.log(nomeInvetido);
*/

//1
/*let numero = 1
while(numero <= 20){
    if(numero %2==0){
        console.log(numero)
    }
    numero++
}*/

//2
/*let numero = 10;
while(numero >= 1){
    console.log(numero);
    numero--
}
*/

//3
/*const numero = Number(prompt("Insira um numero"));
let contador = 1;
while(contador <= 10){
    console.log(`${numero} x ${contador} = ${contador*numero}`);
    contador++
}*/

//4
/*let contador = 0;
while(true){
    const numero = Number(prompt("Insira um numero"));
    if(numero >= 0){
        contador+=numero
    }else{
       break;
    }
}
console.log(`Soma dos numeros inteiros ${contador+contador}`)
*/

//5       //______Incompleto_______
/*let contador = 0;
while(true){
    const palavra = prompt("Insira uma palavra");
    if(palavra == [ ]){
        contador++;
    }
    break;
}
console.log(`Numeros de letras A na palavra: ${contador}`);*/

//6
/*while(true){
    const numero = Number(prompt("Tente adivinhar o numero secreto de (1 a 10)"));
    if(numero === 9){
        break;
    }
}
console.log("Você acertou um numero secreto");
*/

//7
/*let contador = 0;
let soma = 0;
while(true){
    const numero = Number(prompt("DIgite um numero"));
    if(numero < 0){
       break;        
    }else{
        contador+=numero;
        soma+=1;
    }
}
console.log(`A media é: ${soma/contador}`);*/

//8
/*while(true){
    const senha = prompt("Insira a sua senha");
    if(senha === "CarlosNeto1010"){
        break
    }
}
console.log("Senha correta")*/

//9
/*
let contador = 0;
while(true){
    const numero = Number(prompt("Insira um numero"));
    if(numero > 0){
        contador+=numero
    }else{
        break
    }
}
console.log(`O produto dos numeros: ${contador}`)
*/

/*__________________________________DESAFIOS_____________________________________*/
//1°
/*const nome = 'Manuel Neto';
let count = 0;
for(i=0;i<=nome.length-1;i++){
    if(nome[i==='e']){
        count++
    }
}
console.log(count);*/

//2°
/*const nome = 'Manuel Neto';

for(i>=0;i=nome.length-1;i--){
    console.log(nome[i]);
}*/

//3°

/*
const nome = 'Manuel Neto';
let nomeInvertido = "";
for(i>=0;i=nome.length-1;i--){
    nomeInvertido+=nome[i]
}
console.log(nomeInvertido);
*/

/*
let cons = 0;
while(true){
    const preço = Number(prompt("Digar o preço do produto: "));            
    if(preço === 0){
       break
    }else{
        const quantidade = Number(prompt("Digar a quantidade: "));
        let valorTotal = preço*quantidade;
        cons+=valorTotal;
    }
}
console.log(`O valor total da compra é ${cons}`);
*/
/*
let tmp;
let somaTmp = 0;
let numTmp = 0;
while(true){
    tmp = parseInt(prompt("Digar a temperatura:"));
    if(tmp === 0){
        break;
    }
    somaTmp += tmp;
    numTmp += 1;
}
console.log(somaTmp/numTmp);
*/