// Declarar un array para almacenar los nombres de los amigos
let listaNombres = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Obtener el campo de texto
    const nombre = inputAmigo.value.trim(); // Obtener el valor y eliminar espacios en blanco

    // Validar si el campo está vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.'); // Mostrar alerta si está vacío
        return; // Salir de la función
    }

    // Agregar el nombre al array
    listaNombres.push(nombre);

    // Actualizar la lista HTML
    actualizarListaAmigos();

    inputAmigo.value = ''; // Limpiar el campo de texto después de agregar
}

// Función para actualizar la lista HTML con los nombres del array
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtener el elemento de la lista

    // Limpiar la lista existente
    listaAmigos.innerHTML = '';

    // Iterar sobre el array y agregar cada nombre como un elemento <li>
    for (let i = 0; i < listaNombres.length; i++) {
        const nuevoAmigo = document.createElement('li'); // Crear un nuevo elemento <li>
        nuevoAmigo.textContent = listaNombres[i]; // Asignar el nombre al nuevo elemento
        listaAmigos.appendChild(nuevoAmigo); // Agregar el nuevo elemento a la lista
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar si hay nombres en el array
    if (listaNombres.length === 0) {
        alert('Por favor, agrega al menos un nombre antes de sortear.'); // Mostrar alerta si no hay nombres
        return; // Salir de la función
    }

    const resultado = document.getElementById('resultado'); // Obtener el contenedor del resultado
    resultado.innerHTML = ''; // Limpiar el resultado anterior

    // Seleccionar un nombre aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * listaNombres.length); // Generar un índice aleatorio
    const amigoSecreto = listaNombres[indiceAleatorio]; // Obtener el nombre del amigo seleccionado

    // Mostrar el resultado en pantalla
    const resultadoElemento = document.createElement('li'); // Crear un nuevo elemento <li>
    resultadoElemento.textContent = `¡El amigo secreto es: ${amigoSecreto}!`; // Asignar el resultado
    resultado.appendChild(resultadoElemento); // Agregar el resultado a la lista
}