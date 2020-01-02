const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('ddd');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(button){
    button.addEventListener('click', function(){
        agregarNumero(button.innerText);
    });
});

botonOpera.forEach(function(button){
    button.addEventListener('click', function(){
        selectOperacion(button.innerText);        
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
})

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function agregarNumero(e){
    opeActual = opeActual.toString() + e.toString();    
    actualizarDisplay();
}

function selectOperacion(e){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular();
    }
    operacion = e.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function actualizarDisplay(){
    result.value = opeActual;
}

clear();
