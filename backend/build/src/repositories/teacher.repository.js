"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const teachers_model_1 = __importDefault(require("../models/teachers.model"));
const sequelize_1 = require("sequelize");
class TeachersRepository {
    retrieveByLogin(searchParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let condition = {
                    where: {
                        [sequelize_1.Op.and]: [
                            { login: searchParams.login },
                            { password: searchParams.password }
                        ]
                    }
                };
                return yield teachers_model_1.default.findAll(condition);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.default = new TeachersRepository();
