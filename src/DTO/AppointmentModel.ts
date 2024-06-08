import { DataTypes } from "sequelize";
import { Configuration } from "../Repository/configuration";


export abstract class AppointmentModel extends Configuration{
    public static appointment = Configuration.connection.define('consulta', {
        id:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.ABSTRACT,
            allowNull: false
        },
        data: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        update_at: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, 
    {
        timestamps: false,
        createdAt: "created_at",
        updatedAt: "update_at"
    })
}