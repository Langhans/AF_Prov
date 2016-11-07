
var baseUrl = "http://localhost:3000/api";


function getEmployeeList(){
	$.ajax({
		type:'GET',
		url: baseUrl + "/employees",
		datatype: 'json',
		success: function(data){
			console.log("Employees received");
			$.each( data , function( index , employee){
				$('#emp_list').append('<li>' + employee.name + '</li>');
			});
		}
	});
}


function addEmployee(){
	var name_in = $("#emp_input").val();
	console.log($("#emp_input").val());
	var data = JSON.stringify({name: name_in});

	if (name && name.length > 1) {
			$.ajax({
				type: 'POST',
				url: baseUrl + "/employees",
				data: data,
				success: function(){
					alert("SUCCESS");
					getEmployeeList();
				},
				error: function(error){
					alert(error);
				}
		});
	} else {
		alert ("Name cannot be empty");
	}
}