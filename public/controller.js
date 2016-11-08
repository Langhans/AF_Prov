// Root URL of Rest-API
var baseUrl = "http://localhost:3000/api";


// fetches all Companies from server async and populates Company selector elem
function refreshCompanySelector() {
	$.ajax({
		type: 'GET',
		url: baseUrl + "/companies",
		datatype: 'json',
		success: function (data) {
			console.log("Companies received");
			$('#comp_selector').empty();

			$.each(data, function (index, company) {
				var option_element = '<option value="' + company.id + '">' +
					company.name + '</option>';
				$('#comp_selector').append(option_element);
			});
		}
	});
}

// adds a new employee via POST to REST-API
function addEmployee() {
	var name_in = $("#emp_input").val();
	var compId_in = $("#comp_selector").val();
	console.log(name_in);
	console.log(compId_in);

	// minimal validation of user input
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
				refreshCompanySelector();
				clearFields();
			},
			error: function (error) {
				alert(error);
			}
		});
	} else {
		alert("Invalid user-input. Please check again!");
	}
}

// reset text input fields
function clearFields() {
	$('#emp_input').val("");
	$('#comp_input').val("");
}


// Fetches all Employees of the selected Company (Company-selector element)
function getCompaniesEmployees() {
	var company_id = $("#comp_selector").val();

	$.ajax({
		type: 'GET',
		url: baseUrl + "/companies/getEmployees/" + company_id,
		success: function (data) {
			fillListOfEmployees(data);
		},
		error: function (error) {
			alert(error);
		}
	});
}


// adds a new Company via POST to REST-API
function addCompany() {
	var name_in = $("#comp_input").val();

	// minimal validation of user input
	if (name_in && String(name_in).length > 1) {
		var data_out = {};
		data_out.name = name_in;

		$.ajax({
			type: 'POST',
			url: baseUrl + "/companies",
			data: data_out,
			success: function () {
				refreshCompanySelector();
				clearFields();
			},
			error: function (error) {
				alert(error);
			}
		});
	} else {
		alert("Invalid user-input. Please check again!");
	}
}

/* Fills Employee list element with data from the employee-array passed to
 * this function.
 */
function fillListOfEmployees(data) {

	var emp_list = $('#employee_list');
	emp_list.empty();

	if (data && data.length > 0) {
		$.each(data, function (index, employee) {
			var list_item = '<li>' + employee.name + '</li>';
			emp_list.append(list_item);
		});
	} else {
		emp_list.append("<li>No registered employees</li>");
	}
}
