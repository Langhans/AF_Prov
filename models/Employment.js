"use strict";

module.exports = function(sequelize , DataTypes){
	
	var Employment = sequelize.define("Employment", {
		companyId: { type : DataTypes.INTEGER, allowNull: false, primaryKey: true},
		employeeId: {type : DataTypes.INTEGER, allowNull: false, primaryKey: true,}
	});
	
	return Employment;
};