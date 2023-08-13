const Sequelize = require('sequelize');
const sequelize = new Sequelize('shop-management','root','H3lloworld!',{
    dialect : 'mysql',
    host : 'localhost',
});
module.exports = sequelize;
