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
    // turnosDeJugada(cant_jugadores);
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
        var PuntosDeJugador = Array.from(document.getElementsByClassName('puntos'));
        PuntosDeJugador.forEach(celda => {
            celda.addEventListener('click', function() {
                this.innerHTML = '';
            })
            celda.addEventListener('blur', function(){
                if(this.innerHTML == '') {
                    this.innerHTML = '--';
                }
            })
        })
    }
    
    
}


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
        }
        dado.classList.remove('rotar');
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

