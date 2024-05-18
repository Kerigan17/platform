"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql2_1 = require("mysql2");
exports.connection = (0, mysql2_1.createPool)({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'Alex109728Mik',
    database: 'school'
});
