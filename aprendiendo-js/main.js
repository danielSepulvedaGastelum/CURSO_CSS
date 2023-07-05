var nombre = "Daniel Sepulveda"
var altura = 165;

var concatenacion = nombre + " " + altura;

/*
var contenido = document.getElementById("contenido");

contenido.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>mido: ${altura} cm</h3>
`;

if(altura > 190)
    contenido.innerHTML += `<h1>Eres una persona Alto</h1>`;
else
    contenido.innerHTML += `<h1>Eres una personal bajita</h1>`;

for(i=2015; i<=2023; i++){
    contenido.innerHTML+= `<h3>Estamos en el año: ${i}</h3>`;
}
*/
function muestraMiNombre(nombre, altura){
    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>mido: ${altura} cm</h3>
    `;

    return misDatos;
}

function imprimir(nombre, altura){
    var contenido = document.getElementById("contenido");
    contenido.innerHTML = muestraMiNombre(nombre, altura);
}

imprimir('Victor Robles',185);