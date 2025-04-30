const imagenes = document.querySelectorAll('.imagen-boton');
imagenes.forEach(imagen => {
    imagen.addEventListener('click', function() {
        console.log('Imagen ' + imagen.alt + ' presionada');
    });
});
