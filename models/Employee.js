module.exports = function(sequelize , DataTypes){
	
	var Employee = sequelize.define("Employee", 
	{
	name: DataTypes.STRING
	}, {
	classMethods: {
      associate: function(models) {
        Employee.belongsToMany(models.Company, {through: 'Employment'})
      }
    }
	});

	return Employee;

}