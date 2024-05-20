"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const students_1 = __importDefault(require("../db/students"));
const getAll = (req, res) => {
    students_1.default.selectAll().then(students => {
        res.status(200).send({
            message: 'OK',
            result: students
        });
    }).catch(err => {
        res.status(500).send({
            message: 'DATABASE ERROR',
            error: err.code
        });
    });
};
exports.default = { getAll };
