//Declarar variables
let nombre;
nombre="Pedro";

//imprimir un mensaje en consola
console.log(nombre);

let apellido="Picapiedra";
console.log(apellido);

//concatenar cadenas en js


console.log("Mi nombre es "+nombre+ " y mi apellido "+apellido);

//tempalte de cadenas, genera cadena completa con variables completas alt+96 para las comillas al reves
console.log(`Mi nombre es ${nombre} y mi apellido ${apellido}`);

//tipo de dato nan
let numero =9;
let letra ="a";

let suma=numero*letra;

console.log(suma);

//imprimir con document.write
//document.writeln(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);
//imprmir un alert
//window.alert(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);

//tipo de dato objeto

const persona={
    nombre:"Pablo",
    apellido: "Marmol",
    edad:30,
    contacto:{
        telefono:"0939132007",
        email:"pablo@gmail.com",
        instagram:"@pablito"
    },
    pasatiempos:["Leer","Correr","Cocinar"],
    saludar: function(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad}`);
    }
}
console.log(persona.nombre);
persona.saludar();
console.log(persona.contacto.email);

//imprimir las propiedades de un objeto
console.log(Object.keys(persona));
console.log(Object.values(persona));

//tipo de dato arreglo

const array=[2,"Taty",34,"Lola",true,[1,2,3,4,5]];
console.log(array);
console.log(array[3]);
console.log(array[5][2]);
array.push("Rosa");
//push para agregar
console.log(array);
//pop para quitar
array.pop();
console.log(array);

const array2=Array(50).fill(true);
console.log(array2);


//destructuracion de arreglos extraeer los elemntentos de una rreglo para agregarles a variables

const b=[1,2,3];
const[one,two,three]=b;
console.log(one);

console.log(three,two,one);

//destructuracion de objetos
const empleado={
    nombre1:"Carlos",
    apellido1:"Flores",
    estudios:{
        primaria:"Carderón",
        secundaria:"Mariano Suárez",
        superior:"ITSQMET",
    }
}
const{nombre1,apellido1,estudios:{primaria,secundaria,superior}}=empleado;
console.log(nombre1);
console.log(primaria);
console.log(superior);

