const Sequelize = require('sequelize');
const connection = require('./database');

//##### Model de um departamento ########
const Comments = connection.define('Comentario',{
    description:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

//#### CRIANDO A TABELO NO BANCO #####
Comments.sync({force: false}).then(()=>{
    console.log('Tabela de Comentario criada');
}).catch((error)=>{
    console.log(error);
});

module.exports = Comments;
