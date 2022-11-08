const { DataTypes }=require('sequelize');

//Méthode pour créer la base de donnees
module.exports=(instance)=>{
    return instance.define('user',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull: false,
            defaut:'Doe'
        },
        firstname:{
            type:DataTypes.STRING,
            allowNull: true, //Par defaut a false
            defaut:'John'
        }
    },{
            freezeTableName: true // Par defaut a faux
        }
    );
}