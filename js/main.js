
let resultado = 0;
let peso = 0;
let altura = 0;
let sexo = 0;
var contador = 0;
console.log(contador);

function sumar (){
    contador++;
    console.log(contador);
}
const sumarContador = contador => contador++;

var btn = document.getElementById('btn');

    btn.addEventListener('click',sumar,true);



console.log(contador);

while(contador <=5){
    console.log(contador);
}

if(contador>0){
    sexo =  prompt("BINVENID@ A LA CALCULADORA DEL IMC! antes debera indicar su sexo - elija una de las siguientes opciones:\n\n 1-HOMBRE\n\n 2-MUJER\n\n");

    while(sexo!=='1' && sexo!=='2'){
         sexo = prompt("VALOR INCORRECTO!, por favor - elija una de las siguientes opciones:\n\n 1-HOMBRE\n\n 2-MUJER\n\n");
        } 
}

function pedirPyA(){
   peso = parseInt(prompt("ingrese su peso en kg"));
   altura = parseInt(prompt("ingrese su altura en cm"));
}

function calcularImc(n1,n2){ // CALCULO MATEMATICO IMC
    n2 = n2 / 100; // pasamos a decimal
    return parseFloat(n1/((n2*2)).toFixed(2));
}

const calcularImc = (n1,n2)=> {
    n2 = n2 / 100; // pasamos a decimal
    return parseFloat(n1/((n2*2)).toFixed(2));
}



function evaluarRM(resultado){ //EVALUA SOBRE TABLAS MASCULINA
    switch(true){
        case resultado < 18.5:
            console.log("IMC INFERIOR AL NORMAL");
            breack;    
        
        case resultado >= 18.5 && resultado <= 24.9:
            console.log("IMC NORMAl");
            breack; 
        
        case resultado >24.9 && resultado <= 29.9:
            console.log ("IMC SUPERIOR AL NORMAL");
            breack;
        
        case resultado > 29.9:
            console.log ( "IMC OBESIDAD");
            breack;

        default:
            console.log("PESO NO VALIDO");
            breack;
    }

}

function evaluarRF(resultado){ //EVALUA SOBRE TABLAS FEMENINA
    switch(true){
        case resultado <= 15.5:
            console.log("IMC INFERIOR AL NORMAL");
            breack;    
        
        case resultado >= 15.6 && resultado <= 19.9:
            console.log(" IMC NORMAl");
            breack; 
        
        case resultado >=20 && resultado <= 24.9:
            console.log ("IMC SUPERIOR AL NORMAL");
            breack;
        
        case resultado > 25:
            console.log ( "IMC OBESIDAD");
            breack;

        default:
            console.log("PESO NO VALIDO");
            breack;
    }

}


switch(sexo){ //evalua dependiendo si es FEMENINO O MASCULINO
    case "1":
        console.log("Seleccionaste HOMBRE")
        pedirPyA();
        resultado = calcularImc(peso,altura);
        console.log("SU IMC masculino ES: "+ resultado)
        evaluarRM(resultado);
        breack;
    case "2":
        console.log("Seleccionaste MUJER")
        pedirPyA();
        resultado = calcularImc(peso,altura);
        console.log("SU IMC femenino ES: "+ resultado)
        evaluarRF(resultado);
        breack;
    default:
        console.log("OPCION NO VALIDA")
        breack;
}









