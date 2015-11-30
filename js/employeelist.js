var serviceURL = "http://tienda.canariasenmoto.com/servicecm/destacados.json";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL, function(data) {
		$('#employeeList li').remove();
		employees = data;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id_casco + '">' +
					'<img src="' + employee.ruta_imagen + '"/>' +
					'<h4>' + employee.nombre + '</h4>' +
					'<p>' + employee.nombre_empresa + '</p>' +
					'<span class="ui-li-count">' + employee.precio_oferta + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}