import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export abstract class Configuration{
    public static connection = new Sequelize({
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database:  process.env.DB_DATABASE,
        host: "localhost",
        dialect: "mysql"
    })
}