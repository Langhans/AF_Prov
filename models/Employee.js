module.exports = function(sequelize , DataTypes){
	
	var Employee = sequelize.define("Employee", 
	{
		name: { type: DataTypes.STRING,
							allowNull: false
					}
	});

	return Employee;

}