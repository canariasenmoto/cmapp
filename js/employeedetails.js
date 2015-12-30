$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	//$.getJSON(serviceURL, displayEmployee);
	//$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
	displayEmployee(id);
});


$('#detailsPageEvento').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	//$.getJSON(serviceURL, displayEmployee);
	//$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
	displayEvento(id);
});


$('#detailsPageOcasion').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	//$.getJSON(serviceURL, displayEmployee);
	//$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
	displayOcasion(id);
});

function displayEmployee(id) { 
	//var employee = data.item;
	//console.log(employee);
	var deviceWidth;
	var serviceURL2 = "http://tienda.canariasenmoto.com/servicecm/oferta.json?id="+id;
	deviceWidth = $('[data-role="page"]').first().width();
	$.getJSON(serviceURL2, function(data) {
		$.each(data, function(index, oferta) {
	
			$('#fullName').text(oferta.nombre);
			$('#employeePic').attr('src', oferta.ruta_imagen);
			$('#employeePic').attr('width', deviceWidth);
			$('#precioantes').text(oferta.precio);
			$('#preciodespues').text(oferta.precio_oferta);
			$('#descripcionoferta').text(oferta.descripcion_larga);
			$('#datosempresa').append('<p><strong>' + oferta.nombre_empresa + '</strong></p>');	
			
			if (oferta.telefono) {
				$('#actionList').append('<li><a href="tel:+34' + oferta.telefono + '"><h3>Tel&eacute;fono</h3>' +
						'<p>' + oferta.telefono + '</p></a></li>');
				$('#actionList').append('<li><a href="mailto:' + oferta.email + '"><h3>Correo electr&oacute;nico</h3>' +
						'<p>' + oferta.email + '</p></a></li>');
			}
			/*
			$('#fullName').text(employee.firstName + ' ' + employee.lastName);
			$('#employeeTitle').text(employee.title);
			$('#city').text(employee.city);
			console.log(employee.officePhone);
			if (employee.managerId>0) {
				$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.managerId + '"><h3>View Manager</h3>' +
						'<p>' + employee.managerFirstName + ' ' + employee.managerLastName + '</p></a></li>');
			}
			if (employee.reportCount>0) {
				$('#actionList').append('<li><a href="reportlist.html?id=' + employee.id + '"><h3>View Direct Reports</h3>' +
						'<p>' + employee.reportCount + '</p></a></li>');
			}
			if (employee.email) {
				$('#actionList').append('<li><a href="mailto:' + employee.email + '"><h3>Email</h3>' +
						'<p>' + employee.email + '</p></a></li>');
			}
			if (employee.officePhone) {
				$('#actionList').append('<li><a href="tel:' + employee.officePhone + '"><h3>Call Office</h3>' +
						'<p>' + employee.officePhone + '</p></a></li>');
			}
			if (employee.cellPhone) {
				$('#actionList').append('<li><a href="tel:' + employee.cellPhone + '"><h3>Call Cell</h3>' +
						'<p>' + employee.cellPhone + '</p></a></li>');
				$('#actionList').append('<li><a href="sms:' + employee.cellPhone + '"><h3>SMS</h3>' +
						'<p>' + employee.cellPhone + '</p></a></li>');
			}*/
		});
		$('#actionList').listview('refresh');
	
	});
	
	
}


function displayEvento(id) { 
	//var employee = data.item;
	//console.log(employee);
	var deviceWidth;
	var serviceURL3 = "http://tienda.canariasenmoto.com/servicecm/evento.json?id="+id;
	deviceWidth = $('[data-role="page"]').first().width();
	$.getJSON(serviceURL3, function(data) {
		$.each(data, function(index, evento) {
	
			$('#fullName').text(evento.titular_portada);
			$('#eventoName').append('<p>' + evento.titular + '</p>');
			$('#employeePic').attr('src', evento.ruta_imagen);
			$('#employeePic').attr('width', deviceWidth);
			$('#localizacion').append(evento.lugar);
			$('#fechaevento').append(evento.fechaevento);
			$('#eventoDescripcion').append('<p id="descripcionevento"><span class="tituloseccion">DETALLE DEL EVENTO</span><br>' + evento.texto + '</p>');			
			
			$('#eventoMotoclubs').append('<p>' + evento.motoclubs + '</p>');
		    
			$('#actionList').append('<li><a href="' + evento.enlace + '"><h3>Ver en la web</h3></a></li>');
			$('#actionList').append('<li><a href="' + evento.enlace + '"><h3>Compartir</h3></a></li>');
			
			/*
			$('#fullName').text(employee.firstName + ' ' + employee.lastName);
			$('#employeeTitle').text(employee.title);
			$('#city').text(employee.city);
			console.log(employee.officePhone);
			if (employee.managerId>0) {
				$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.managerId + '"><h3>View Manager</h3>' +
						'<p>' + employee.managerFirstName + ' ' + employee.managerLastName + '</p></a></li>');
			}
			if (employee.reportCount>0) {
				$('#actionList').append('<li><a href="reportlist.html?id=' + employee.id + '"><h3>View Direct Reports</h3>' +
						'<p>' + employee.reportCount + '</p></a></li>');
			}
			if (employee.email) {
				$('#actionList').append('<li><a href="mailto:' + employee.email + '"><h3>Email</h3>' +
						'<p>' + employee.email + '</p></a></li>');
			}
			if (employee.officePhone) {
				$('#actionList').append('<li><a href="tel:' + employee.officePhone + '"><h3>Call Office</h3>' +
						'<p>' + employee.officePhone + '</p></a></li>');
			}
			if (employee.cellPhone) {
				$('#actionList').append('<li><a href="tel:' + employee.cellPhone + '"><h3>Call Cell</h3>' +
						'<p>' + employee.cellPhone + '</p></a></li>');
				$('#actionList').append('<li><a href="sms:' + employee.cellPhone + '"><h3>SMS</h3>' +
						'<p>' + employee.cellPhone + '</p></a></li>');
			}*/
		});
		$('#actionList').listview('refresh');
	
	});
	
	
}


function displayOcasion(id) { 
	//var employee = data.item;
	//console.log(employee);
	var deviceWidth;
	var serviceURL2 = "http://tienda.canariasenmoto.com/servicecm/motoocasion.json?id="+id;
	deviceWidth = $('[data-role="page"]').first().width();
	$.getJSON(serviceURL2, function(data) {
		$.each(data, function(index, ocasion) {
	
			$('#fullName').text(ocasion.modelo);
			$('#modeloOcasion').append('<p>' + ocasion.modelo + '</p>');		
			$('#employeePic').attr('src', ocasion.ruta_imagen);
			$('#employeePic').attr('width', deviceWidth);
			$('#kilometros').text(ocasion.kilometros + ' km');
			$('#precioocasion').append(ocasion.precio);
			$('#descripcionoferta').append(ocasion.descripcion);
			$('#datosempresa').append('<p><strong>' + ocasion.nombre_empresa + '</strong></p>');	
			
			if (ocasion.telefono) {
				$('#actionList').append('<li><a href="tel:+34' + ocasion.telefono + '"><h3>Tel&eacute;fono</h3>' +
						'<p>' + ocasion.telefono + '</p></a></li>');
				$('#actionList').append('<li><a href="mailto:' + ocasion.email + '"><h3>Correo electr&oacute;nico</h3>' +
						'<p>' + ocasion.email + '</p></a></li>');
			}
			/*
			$('#fullName').text(employee.firstName + ' ' + employee.lastName);
			$('#employeeTitle').text(employee.title);
			$('#city').text(employee.city);
			console.log(employee.officePhone);
			if (employee.managerId>0) {
				$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.managerId + '"><h3>View Manager</h3>' +
						'<p>' + employee.managerFirstName + ' ' + employee.managerLastName + '</p></a></li>');
			}
			if (employee.reportCount>0) {
				$('#actionList').append('<li><a href="reportlist.html?id=' + employee.id + '"><h3>View Direct Reports</h3>' +
						'<p>' + employee.reportCount + '</p></a></li>');
			}
			if (employee.email) {
				$('#actionList').append('<li><a href="mailto:' + employee.email + '"><h3>Email</h3>' +
						'<p>' + employee.email + '</p></a></li>');
			}
			if (employee.officePhone) {
				$('#actionList').append('<li><a href="tel:' + employee.officePhone + '"><h3>Call Office</h3>' +
						'<p>' + employee.officePhone + '</p></a></li>');
			}
			if (employee.cellPhone) {
				$('#actionList').append('<li><a href="tel:' + employee.cellPhone + '"><h3>Call Cell</h3>' +
						'<p>' + employee.cellPhone + '</p></a></li>');
				$('#actionList').append('<li><a href="sms:' + employee.cellPhone + '"><h3>SMS</h3>' +
						'<p>' + employee.cellPhone + '</p></a></li>');
			}*/
		});
		$('#actionList').listview('refresh');
	
	});
	
	
}


function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
