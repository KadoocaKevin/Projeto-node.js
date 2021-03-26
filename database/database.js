
//######## Conexão com o banco ##########
const sequelize = require('sequelize');

const connection = new sequelize("bctx1miv6lr5i5skdbon", "unhosmcanvq6iykm", "U4uF2w3PbuXLDK5ZLp0j", {
    host:'bctx1miv6lr5i5skdbon-mysql.services.clever-cloud.com',
    dialect: 'mysql'
});

//########## Exportando conexão #######
module.exports = connection;
