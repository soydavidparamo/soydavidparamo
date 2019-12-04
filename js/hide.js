
$('#grafico').click(function (e) {

    $('#ProyectosGraficos').css('display', 'block');
    $('#ProyectoAV').css('display', 'none');
    $('#ProyectosUXUI').css('display', 'none');


});

$('#av').click(function (e) {

    // Resetear, por si acaso has estado jugando con la otra propiedad
    $('#ProyectoAV').css('display', 'block');
    $('#ProyectosUXUI').css('display', 'none');
    $('#ProyectosGraficos').css('display', 'none');


});

$('#uxui').click(function (e) {

    // Resetear, por si acaso has estado jugando con la otra propiedad
    $('#ProyectoAV').css('display', 'none');
    $('#ProyectosUXUI').css('display', 'block');
    $('#ProyectosGraficos').css('display', 'none');

});