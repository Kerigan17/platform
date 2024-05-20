"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const students_controller_1 = __importDefault(require("../controllers/students.controller"));
const studentRouter = (0, express_1.Router)();
studentRouter.get('/', students_controller_1.default.getAll);
exports.default = studentRouter;
