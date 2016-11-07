module.exports = function (sequelize, DataTypes) {

	var Company = sequelize.define("Company",
		{
			name: { type: DataTypes.STRING,
							allowNull: false
			}
		}, {
			classMethods: {
				associate: function (models) {
					//Company.hasMany(models.Employee);
				}
			}
		});

	return Company;
}