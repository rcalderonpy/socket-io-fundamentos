var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');

})

socket.on('disconnect', function() {
    console.log('perdimos conexión con el servidor');
})

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Rodrigo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor :', mensaje);
})