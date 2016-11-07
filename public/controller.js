
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


