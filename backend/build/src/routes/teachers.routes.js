"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teachers_controller_1 = __importDefault(require("../controllers/teachers.controller"));
class TutorialRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new teachers_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Retrieve all Tutorials
        this.router.post("/login", this.controller.findOne);
    }
}
exports.default = new TutorialRoutes().router;
