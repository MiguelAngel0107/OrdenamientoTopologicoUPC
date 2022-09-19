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

const caja1 = Box1.cloneNode(true);
const caja2 = Box2.cloneNode(true);
const caja3 = Box3.cloneNode(true);
const caja4 = Box4.cloneNode(true);
const caja5 = Box5.cloneNode(true);
const caja6 = Box6.cloneNode(true);
const caja7 = Box7.cloneNode(true);
const caja8 = Box8.cloneNode(true);
const caja9 = Box9.cloneNode(true);
const caja10 = Box10.cloneNode(true);
const caja11 = Box11.cloneNode(true);
const caja12 = Box12.cloneNode(true);

const Grafico = document.querySelector("#Grafico");

const matriz = 
[
    [0,0,0,0,0,0,0,0,0,0,0,0],//0
    [0,0,0,0,0,0,0,0,0,0,0,0],//1
    [0,0,0,0,0,0,0,0,0,0,0,0],//2
    [0,0,0,0,0,0,0,0,0,0,0,0],//3
    [0,0,0,0,0,0,0,0,0,0,0,0],//4
    [0,0,0,0,0,0,0,0,0,0,0,0],//5
    [0,0,0,0,0,0,0,0,0,0,0,0],//6
    [0,0,0,0,0,0,0,0,0,0,0,0],//7
    [0,0,0,0,0,0,0,0,0,0,0,0],//8
    [0,0,0,0,0,0,0,0,0,0,0,0],//9
    [0,0,0,0,0,0,0,0,0,0,0,0],//10
    [0,0,0,0,0,0,0,0,0,0,0,0],//11
];

// Determinar Grado Interno de los Nodos
function gradoInterno(x)
{
    let value;
    let cont=0;
    
    for(let i=0; i<12; i++) 
    {      
        value = matriz[i][x];
        cont += value;
    }

    return cont;
}

// Buscar el nodo con grado interno de Cero
function nodoCero(x)
{
    for (let i=0; i<x;i++)
    {
        if(gradoInterno(i)===0)
        {
            console.log(i+" Estos nodo tienen 0");
            

            switch(i)
            {
                case 0: Grafico.append(caja1); break;
                case 1: Grafico.append(caja2); break;
                case 2: Grafico.append(caja3); break;
                case 3: Grafico.append(caja4); break;
                case 4: Grafico.append(caja5); break;
                case 5: Grafico.append(caja6); break;
                case 6: Grafico.append(caja7); break;
                case 7: Grafico.append(caja8); break;
                case 8: Grafico.append(caja9); break;
                case 9: Grafico.append(caja10); break;
                case 10: Grafico.append(caja11); break;
                case 11: Grafico.append(caja12); break;
            }
        }
    }
}


//Espacio para entrada de valor
const insertar = () => {
    resultado = document.getElementById("empezar").value;
    
    return resultado;
}

const value = insertar();

procesar.addEventListener('click', ()=>{

    console.log(value);
      

});