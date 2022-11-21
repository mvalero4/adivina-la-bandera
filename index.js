//cargar en un array las imágenes a mostrar
let banderas = ['au.svg', 'br.svg', 'ca.svg', 'cn.svg', 'de.svg', 'dk.svg', 'es.svg', 'fr.svg', 'gb.svg', 'af.svg', 'al.svg', 'ad.svg', 'ao.svg', 'dz.svg', 've.svg', 'ua.svg', 'tr.svg', 'ru.svg', 'pt.svg', 'pr.svg', 'py.svg', 'pa.svg', 'no.svg', 'mx.svg', 'jp.svg', 'it.svg'];

//array que guarda la opción correcta
let correcta = [2,0,1,1,2,1,2,1,1,2,1,0,2,1,0,2,0,2,1,1,0,0,1,2,1,0];

//opciones a mostrar en cada pantalla
let opciones = [];
opciones.push(['Sudáfrica', 'Singapur', 'Australia']);
opciones.push(['Brasil', 'Colombia', 'Austria']);
opciones.push(['Estados Unidos', 'Canadá', 'Reino Unido']);
opciones.push(['Corea del sur', 'China', 'Irán']);
opciones.push(['Irlanda', 'Francia', 'Alemania']);
opciones.push(['Reino Unido', 'Dinamarca', 'Irlanda']);
opciones.push(['Italia', 'Portugal', 'España']);
opciones.push(['Holanda', 'Francia', 'Alemania']);
opciones.push(['Australia', 'Reino Unido', 'Alemania']);
opciones.push(['Irán', 'Albania', 'Afganistán']);
opciones.push(['Irán', 'Albania', 'Afganistán']);
opciones.push(['Andorra', 'Antártida', 'Angola']);
opciones.push(['Andorra', 'Antártida', 'Angola']);
opciones.push(['Arabia saudita', 'Argelia', 'Angola']);
opciones.push(['Venezuela', 'Ecuador', 'Colombia']);
opciones.push(['Rusia', 'Polonia', 'Ucrania']);
opciones.push(['Turquía', 'Rumania', 'Tunez']);
opciones.push(['Francia', 'Polonia', 'Rusia']);
opciones.push(['España', 'Portugal', 'Suecia']);
opciones.push(['Cuba', 'Puerto rico', 'Ecuador']);
opciones.push(['Paraguay', 'Uruguay', 'Argentina']);
opciones.push(['Panamá', 'México', 'Cuba']);
opciones.push(['Dinamarca', 'Noruega', 'Suiza']);
opciones.push(['Honduras', 'Antártida', 'México']);
opciones.push(['Corea del sur', 'Japón', 'Nepal']);
opciones.push(['Italia', 'Alemania', 'Francia']);



//guarda la posición acutal
let posActual = 0;
//cantidad de acertadas hasta el momento
let cantidadAcertadas = 0;

function comenzarJuego() {
    //resetear las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activar las pantallas necesarias
    document.getElementById('pantalla-inicial').style.display = 'none';
    document.getElementById('pantalla-juego').style.display = 'block';
    document.querySelector('.posicionAvance').innerHTML = `${posActual} / ${banderas.length -1}`;
    cargarBandera();
}

function cargarBandera() {
    //controlo si se acabaron las banderas
    if (banderas.length <= posActual) {
        terminarJuego();
    } else{
        //limpiar las clases que se asignaron
        limpiarOpciones();

        document.querySelector('.posicionAvance').innerHTML = `${posActual} / ${banderas.length - 1}`;

        document.getElementById('imgBandera').src = './assets/' + banderas[posActual];
        document.getElementById('n0').innerHTML = opciones[posActual][0];
        document.getElementById('n1').innerHTML = opciones[posActual][1];
        document.getElementById('n2').innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones() {
    document.getElementById('n0').className = 'nombre';
    document.getElementById('n1').className = 'nombre';
    document.getElementById('n2').className = 'nombre';

    document.getElementById('l0').className = 'letra';
    document.getElementById('l1').className = 'letra';
    document.getElementById('l2').className = 'letra';
}


function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) {
        document.getElementById('n' + opElegida).className = 'nombre nombreAcertada';
        document.getElementById('l' + opElegida).className = 'letra letraAcertada';
        cantidadAcertadas++;
    } else{
        document.getElementById('n' + opElegida).className = 'nombre nombreNoAcertada';
        document.getElementById('l' + opElegida).className = 'letra letraNoAcertada';

        document.getElementById('n' + correcta[posActual]).className = 'nombre nombreAcertada';
        document.getElementById('l' + correcta[posActual]).className = 'letra letraAcertada';
    }

    posActual++;

    setTimeout(cargarBandera, 800);
}

function terminarJuego() {
    document.getElementById('pantalla-juego').style.display = 'none';
    document.getElementById('pantalla-final').style.display = 'flex';

    document.getElementById('numCorrectas').innerHTML = cantidadAcertadas;
    document.getElementById('numIncorrectas').innerHTML = banderas.length - cantidadAcertadas;
    if (cantidadAcertadas > (banderas.length - cantidadAcertadas)) {
        let winAudio = new Audio('./assets/sounds/ganar.mp3');
        winAudio.play();
    } else {
        let loseAudio = new Audio('./assets/sounds/perder.mp3');
        loseAudio.play();
    }
}

function volverAlInicio() {
    document.getElementById('pantalla-final').style.display = 'none';
    document.getElementById('pantalla-inicial').style.display = 'flex';
    document.getElementById('pantalla-juego').style.display = 'none';
}