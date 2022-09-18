let tematica = [];

/* Es una funcion tipo aleatorio, que se importa de la libreria*/


const procesar = document.querySelector("#btnP");

const Box1 = document.querySelector("#b1");
const Box2 = document.querySelector("#b2");
const Box3 = document.querySelector("#b3");
const Box4 = document.querySelector("#b4");
const Box5 = document.querySelector("#b5");
const Box6 = document.querySelector("#b6");
const Box7 = document.querySelector("#b7");
const Box8 = document.querySelector("#b8");
const Box9 = document.querySelector("#b9");
const Box10 = document.querySelector("#b10");
const Box11 = document.querySelector("#b11");
const Box12 = document.querySelector("#b12");

const Grafico = document.querySelector("#Grafico");

procesar.addEventListener('click', ()=>{

    const caja1 = Box1.cloneNode();
    console.log("Hola Funciono");

    Grafico.append(caja1);

});