var baseUrl = "http://localhost:3000/api";


function refreshCompanySelector() {
	$.ajax({
		type: 'GET',
		url: baseUrl + "/companies",
		datatype: 'json',
		success: function (data) {
			console.log("Companies received");
			$.each(data, function (index, company) {
				var option_element = '<option value="' + company.id + '">' +
					company.name + '</option>';
				$('#comp_selector').append(option_element);
			});
			;
		}
	});
}


function addEmployee() {
	var name_in = $("#emp_input").val();
	var compId_in = $("#comp_selector").val();
	console.log(name_in);
	console.log(compId_in);

	// minimal validation
	if (name_in && String(name_in).length > 1 && compId_in) {
		var data_out = {};
		data_out.name = name_in;
		data_out.companyId = compId_in;
		console.log(JSON.stringify(data_out));

		$.ajax({
			type: 'POST',
			url: baseUrl + "/employees",
			data: data_out,
			success: function () {
				alert("Successfully added employee!");
				location.reload();
			},
			error: function (error) {
				alert(error);
			}
		});
	} else {
		alert("Name cannot be empty");
	}
}