module.exports = (sequelize, DataTypes) => {
  const person = sequelize.define('people',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING(30),
      lastname: DataTypes.STRING(30),
      age: DataTypes.INTEGER,
      email: DataTypes.STRING(50),
      phone: DataTypes.STRING(20),
      married: DataTypes.BOOLEAN,
      salary: DataTypes.BIGINT
    },
    { timestamps: false }
  )
  return person
}
