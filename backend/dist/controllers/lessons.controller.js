"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lessons_1 = __importDefault(require("../db/lessons"));
const getAll = (req, res) => {
    lessons_1.default.selectAll().then(lessons => {
        res.status(200).send({
            message: 'OK',
            result: lessons
        });
    }).catch(err => {
        res.status(500).send({
            message: 'DATABASE ERROR',
            error: err.code
        });
    });
};
exports.default = { getAll };
