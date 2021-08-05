//capturar evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) { //evento
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); 
    const inputAltura = e.target.querySelector('#altura'); //exatamente qual elemento foi acionado na tela
    const peso = Number(inputPeso.value);
    const altura1 = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido');
        return; 

    }
    // continua o codigo    
});

function criaP () {
    const p = document.createElement('p');
    return p;
}


function setResultado (msg) { //colocar um html dentro da div resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();

}
fffff