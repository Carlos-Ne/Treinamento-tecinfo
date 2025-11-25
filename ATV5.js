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