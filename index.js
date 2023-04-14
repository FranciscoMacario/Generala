var dados = document.querySelectorAll('.dado');

var modal = document.getElementById('myModal');

//seleccion de jugadores
const selectPlayer = () => {
    modal.style.display = 'block'
}

window.addEventListener('load', selectPlayer);

function enviar() {
    var cant_jugadores = document.getElementById('players').value;
    modal.style.display = 'none';
    
    crearTablas(cant_jugadores);
    turnosDeJugada(cant_jugadores);
}

//creacion de las tablas de puntajes
function crearTablas(cant_total){
    for(let i = 1; i <= cant_total; i++){
        var celdas = document.querySelectorAll('.puntaje');
        celdas.forEach(celda => {
            var nuevaCld = document.createElement("td");
            nuevaCld.className = 'puntos';
            nuevaCld.innerHTML = '--';
            nuevaCld.contentEditable = true;
            celda.appendChild(nuevaCld);
        })
    }
}

// function turnosDeJugada(cant_total_jugadores){
//     var turnos_en_total = 11 * cant_total_jugadores;
//     var contador_turnos = 0;
//     const boton_pasar = document.querySelector('#pasar');
//     const boto_lanzar = document.querySelector('#lanzar');
//     const boton_mezclar_todo = document.querySelector('#lanzarTodo');
//     while(contador_turnos < turnos_en_total) {
//         let turno_vigente = 3;
//         console.log('olis');
//         if(turno_vigente <= 3){
//             console.log('olis2');
//             boto_lanzar.addEventListener('click', function(){
//                 turno_vigente--;
//                 contador_turnos++;
//             })
//             boton_mezclar_todo.addEventListener('click', function(){
//                 console.log('olis3');
//                 turno_vigente--;
//                 contador_turnos++;
//             })
//         } else if(turno_vigente == 0){    
//             console.log('olis4');
//             boton_pasar.addEventListener('click', function(){
//                 turno_vigente = 0;
//                 contador_turnos++
//             })
//         }
//         contador_turnos++;
//     }
// }

//funciones para lanzar
function randomize() {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}

function seleccion1() {
    let dado1 = document.getElementById('dado1');
    
    if(!dado1.classList.contains('selected')) {
        dado1.classList.add('selected');
        dado1.classList.add('rotar');
    } else {
        dado1.classList.remove('selected');
        dado1.classList.remove('rotar');
    }
}
function seleccion2() {
    let dado2 = document.getElementById('dado2');
    
    if(!dado2.classList.contains('selected')) {
        dado2.classList.add('selected');
        dado2.classList.add('rotar');   
    } else {
        dado2.classList.remove('selected');
        dado2.classList.remove('rotar');
    }
}
function seleccion3() {
    let dado3 = document.getElementById('dado3');
    
    if(!dado3.classList.contains('selected')) {
        dado3.classList.add('selected');
        dado3.classList.add('rotar');
    } else {
        dado3.classList.remove('selected');
        dado3.classList.remove('rotar');
    }
}
function seleccion4() {
    let dado4 = document.getElementById('dado4');
    
    if(!dado4.classList.contains('selected')) {
        dado4.classList.add('selected');
        dado4.classList.add('rotar');
    } else {
        dado4.classList.remove('selected');
        dado4.classList.remove('rotar');
    }
}
function seleccion5() {
    let dado5 = document.getElementById('dado5');
    
    if(!dado5.classList.contains('selected')) {
        dado5.classList.add('selected');
        dado5.classList.add('rotar');
    } else {
        dado5.classList.remove('selected');
        dado5.classList.remove('rotar');
    }
}

dados.forEach(dado => {
    dado.innerHTML = randomize();
})

function lanzar() {
    dados.forEach(dado => {
        if(dado.classList.contains('selected')){
            dado.innerHTML = randomize();
            /* Aqui se activara la animacion */
        }
        dado.classList.remove('selected');
    })
}

function mezclarTodo() {
    dados.forEach(dado => {
        dado.innerHTML = randomize();
        if(dado.classList.contains('selected')){
            dado.classList.remove('selected');
            dado.classList.remove('rotar');
        }
    })
}

