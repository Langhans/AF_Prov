module.exports = function(sequelize , DataTypes){
	
	var Employee = sequelize.define("Employee", 
	{
		name: { type: DataTypes.STRING,
							allowNull: false
					}
	}, {
	classMethods: {
      associate: function(models) {
        Employee.hasOne(models.Company);
      }
    }
	});

	return Employee;

}