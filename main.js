// ejercicio 1 

let numero = 15;
let num = 16;

function parImpar (numero) {
    if (numero % 2 == 0) {
        return "par";
    } 
    else {return "impar";
    }
}
    let resultado = parImpar (numero);
    console.log ("El "+numero+" es "+resultado) ;

// ejercicio 2 

function mayor (numero) {
    if (num > numero) {
        return "mayor";
        }
        else if (numero < num)
        return "menor";
        else { num == 0
            return "igual";
}
    }

let result = mayor (numero)
    console.log ("El "+num+" es "+result+" que "+numero) ;


// ejercicio 3 (No me ejecuta :( )

let numer = 15;

function multiplo (resultad) {
    if (numer % 5) {
        console.log ("El"+resultad+"es multiplo de 5");
    } else {
        console.log ("El"+resultad+"no es multiplo de 5");
    }

}

// ejercicio 4 


for (let i= 0; i < 10; i++) {
    console.log(` ${i}`);
};

//ejercicio 5

let cadena = "Holu ";
let cadenaRepetir = cadena.repeat(10);
let palabra = cadenaRepetir + "Mundito!";
console.log(palabra)

//ejercicio 6 

let palabritas = ["Que", "dificil", "es", "JS"];

for (const palabrita of palabritas) {
    console.log(palabrita);
}

//ejercicio 7 

const saltear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

for (let i = 0; i < saltear.length; i++) {
    if (saltear[i] % 3 !== 0) {
        continue;
    }
    console.log(saltear[i]);
}

//ejercicio 8 

const multiplic = 12 ;

console.log(multiplic * 2)