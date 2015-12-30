var serviceURL = "http://tienda.canariasenmoto.com/servicecm/destacados.json";
var serviceeventosURL = "http://tienda.canariasenmoto.com/servicecm/eventos.json";
var serviceocasionURL = "http://tienda.canariasenmoto.com/servicecm/ofertas.json";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getOfertasList();
});




function getOfertasList() {
	mostrarOfertas();
	$.getJSON(serviceURL, function(data) {
		$('#employeeList li').remove();
		employees = data;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id_casco + '">' +
					'<img src="' + employee.ruta_imagen + '"/>' +
					'<h4>' + employee.nombre + '</h4>' +
					'<p>' + employee.nombre_empresa + '</p>' +
					'<span class="precioantes">' + employee.precio + ' &euro;</span><span class="preciooferta">' + employee.precio_oferta + ' &euro;</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}


function getEventosList() {
	mostrarEventos();
	$.getJSON(serviceeventosURL, function(data) {
		$('#eventosList li').remove();
		eventos = data;
		$.each(eventos, function(index, evento) {
			$('#eventosList').append('<li><a href="eventodetails.html?id=' + evento.id_noticia + '">' +
					'<img src="' + evento.ruta_imagen + '"/>' +
					'<div class="nombrelist">' + evento.nombre + '</div>' +
					'<p>' + evento.fechaevento + '</p>');
		});
		$('#eventosList').listview('refresh');
	});
}


function getOcasionList() {
	mostrarOcasion();
	$.getJSON(serviceocasionURL, function(data) {
		$('#ocasionList li').remove();
		eventos = data;
		$.each(eventos, function(index, ocasion) {
			$('#ocasionList').append('<li><a href="ocasiondetails.html?id=' + ocasion.id_casco + '">' +
					'<img src="' + ocasion.ruta_imagen + '"/>' +
					'<h4>' + ocasion.modelo + '</h4>' +
					'<p>' + ocasion.kilometros + ' kil&oacute;metros - ' + ocasion.precio + '</p></li>');
		});
		$('#ocasionList').listview('refresh');
	});
}

function mostrarOfertas()
{
  $('#apptitle').text('Ofertas');
  $('#contenedoreventos').hide();
  $('#contenedorofertas').show();
  $('#contenedorocasion').hide();
}


function mostrarEventos()
{
  $('#apptitle').text('Eventos');
  $('#contenedoreventos').show();
  $('#contenedorofertas').hide();
  $('#contenedorocasion').hide();
}

function mostrarOcasion()
{
  $('#apptitle').text('');
  $('#apptitle').append('Ocasi&oacute;n');
  $('#contenedoreventos').hide();
  $('#contenedorofertas').hide();
  $('#contenedorocasion').show();
}