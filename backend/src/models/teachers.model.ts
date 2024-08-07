import {Model, Table, Column, DataType} from "sequelize-typescript";
import {SetOptions} from "sequelize";

@Table({
    tableName: "teachers",
})
export default class Teachers extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
    })
    id?: number;

    @Column({
        type: DataType.STRING(30),
        field: "name"
    })
    name?: string;

    @Column({
        type: DataType.STRING(30),
        field: "login"
    })
    login?: string;

    @Column({
        type: DataType.STRING(40),
        field: "password"
    })
    password?: string;
}