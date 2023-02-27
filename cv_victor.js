let verMas_1 = document.getElementById('verMas_1');

let empresa_1 = document.getElementById('empresa_1');
let dir_1 = document.getElementById('dir_1');
let periodo_1 = document.getElementById('periodo_1');

let verMas_2 = document.getElementById('verMas_2');

let empresa_2 = document.getElementById('empresa_2');
let dir_2 = document.getElementById('dir_2');
let periodo_2 = document.getElementById('periodo_2');

verMas_1.addEventListener('click', mostrarTexto1);
verMas_2.addEventListener('click', mostrarTexto2);

function mostrarTexto1(){
    empresa_1.classList.toggle('visible');
    dir_1.classList.toggle('visible');
    periodo_1.classList.toggle('visible');

    if(empresa_1.classList.contains('visible')){
        verMas_1.innerHTML = 'Ocultar';
    }
    else{
        verMas_1.innerHTML = 'Más Detalles';
    };
};

function mostrarTexto2(){
    empresa_2.classList.toggle('visible');
    dir_2.classList.toggle('visible');
    periodo_2.classList.toggle('visible');

    if(empresa_2.classList.contains('visible')){
        verMas_2.innerHTML = 'Ocultar';
    }
    else{
        verMas_2.innerHTML = 'Más Detalles';
    };
};