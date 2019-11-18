module.exports = function(sequelize, DataTypes) {
	return sequelize.define('contactus', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		phonenumber: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		subject: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		message: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		}
	});
};
