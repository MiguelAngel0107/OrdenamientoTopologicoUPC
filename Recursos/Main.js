const procesar = document.querySelector("#btnP");
//Mostrar por intervalo de tiempo


//Asignar Vlaores con el DOM
const Box=[];
for(let i=1; i<=12; i++) 
{
    Box[i]=document.querySelector(`#b${i}`);
};
const caja=[];
for(let i=1; i<=12; i++)
{
    caja[i]=Box[i].cloneNode(true);
};

const Grafico = document.querySelector("#Grafico");
//Dandole Nuevo Estilo a las Cajas Procesadas
const Style=(x)=>{
    caja[x].style.backgroundColor = "#1c5179";
    caja[x].style.height="80px";
    caja[x].style.width="8%";
    caja[x].style.color="white";
    caja[x].style.boxShadow="-8px 10px #216ba3";
    caja[x].style.fontSize="12px";
    switch(x)
    {
        case 1:
            caja[x].style.top="36%";
            caja[x].style.left="2%"; break;
        case 2:
            caja[x].style.top="32%"; //Par 1
            caja[x].style.left="14%"; break;
        case 3:
            caja[x].style.top="66%";
            caja[x].style.left="14%"; break;
        case 4:
            caja[x].style.top="2%";//Par 2
            caja[x].style.left="26%"; break;
        case 5:
            caja[x].style.top="36%";
            caja[x].style.left="26%"; break;
        case 6:
            caja[x].style.top="32%";//Par 3
            caja[x].style.left="38%"; break;
        case 7:
            caja[x].style.top="66%";
            caja[x].style.left="38%"; break;
        case 8: 
            caja[x].style.top="2%";//Par 4
            caja[x].style.left="50%"; break;
        case 9:
            caja[x].style.top="36%";
            caja[x].style.left="50%"; break;
        case 10:
            caja[x].style.top="36%";
            caja[x].style.left="62%"; break;
        case 11:
            caja[x].style.top="36%";
            caja[x].style.left="74%"; break;
        case 12:
            caja[x].style.top="36%";
            caja[x].style.left="86%"; break;
    };
};

const matriz = 
[
    [0,1,1,0,0,0,0,0,0,0,0,0],//0
    [0,0,0,1,1,0,0,0,0,0,0,0],//1
    [0,0,0,0,0,0,0,0,0,0,0,0],//2
    [0,0,0,0,0,1,0,0,0,0,0,0],//3
    [0,0,0,0,0,1,1,0,0,0,0,0],//4
    [0,0,0,0,0,0,0,1,1,0,0,0],//5
    [0,0,0,0,0,0,0,0,0,0,0,0],//6
    [0,0,0,0,0,0,0,0,0,1,0,0],//7
    [0,0,0,0,0,0,0,0,0,0,0,0],//8
    [0,0,0,0,0,0,0,0,0,0,1,0],//9
    [0,0,0,0,0,0,0,0,0,0,0,1],//10
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
function nodoCero(y)
{
    for (let i=0; i<y;i++)
    {
        if(gradoInterno(i)===0)
        {
            setTimeout(()=>{
                Grafico.append(caja[i+1]);
                Style(i+1); 
                for(let j=0;j<y;j++)
                { matriz[i][j] = 0;}
                ; matriz[0][0] = -1; 
                console.log("Soy nodo numero "+i)
            },500);             
        }
    }
};


//Espacio para entrada de valor
const insertar = () => {
    resultado = document.getElementById("empezar").value;
    
    return resultado;
}


procesar.addEventListener('click', ()=>{
    nodoCero(insertar());
});