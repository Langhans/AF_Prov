module.exports = function(sequelize , DataTypes){
	
	var Employee = sequelize.define("Employee", 
	{
		name: { type: DataTypes.STRING,
							allowNull: false
					}
	}, {
	classMethods: {
      associate: function(models) {
        Employee.belongsToMany(models.Company, {through: 'Employment'})
      }
    }
	});

	return Employee;

}