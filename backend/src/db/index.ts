import {Sequelize} from "sequelize-typescript";
import {config, dialect} from "../config/db.config";
import Teachers from "../models/teachers.model"

class Database {
    public sequelize: Sequelize | undefined;

    constructor() {
        this.connectToDB();
    }

    private async connectToDB() {
        this.sequelize = new Sequelize({
            database: config.DB,
            username: config.USER,
            password: config.PASSWORD,
            host: config.HOST,
            dialect: dialect,
            pool: {
                max: config.pool.max,
                min: config.pool.min,
                acquire: config.pool.acquire,
                idle: config.pool.idle
            },
            define:{
                timestamps: false
            },
            models: [Teachers],
        })
        await this.sequelize.authenticate()
            .then(()=>{
                console.log("Connected");
            })
            .catch((err)=>{
                console.error("Connection error",err);
            })
    }
}

export default Database;
