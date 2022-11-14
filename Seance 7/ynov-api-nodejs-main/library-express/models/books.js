const { DataTypes }=require('sequelize');

//Méthode pour créer la base de donnees
module.exports=(instance)=>{
    return instance.define('book',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull: false,
            defaut:'Harry Potter'
        },
        date:{
            type:DataTypes.DATE,
            allowNull: true, //Par defaut a false
            defaut:new Date()
        }
    },{
            freezeTableName: true // Par defaut a faux
        }
    );
}