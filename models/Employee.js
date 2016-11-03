"use strict";

module.exports = function(sequelize , DataTypes){
	var Employee = sequelize.define("Employee", {
		name: DataTypes.STRING
	});
	
	return Employee;
};