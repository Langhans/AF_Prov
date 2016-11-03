module.exports = function (sequelize, DataTypes) {

	var Company = sequelize.define("Company",
		{
			name: { type: DataTypes.STRING,
							allowNull: false
			}
		});

	return Company;
}