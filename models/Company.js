module.exports = function (sequelize, DataTypes) {

	var Company = sequelize.define("Company",
		{
			name: DataTypes.STRING
		}, {
			classMethods: {
				associate: function (models) {
					Company.belongsToMany(models.Employee, { through: 'Employment' })
				}
			}
		});

	return Company;
}