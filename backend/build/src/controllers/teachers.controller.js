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
const teacher_repository_1 = __importDefault(require("../repositories/teacher.repository"));
class TeachersController {
    findOne(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(request.body);
            try {
                teacher_repository_1.default.retrieveByLogin({ login: "dmitry", password: "12345" })
                    .then((teachers) => {
                    response.status(200).json({ success: true, data: teachers[0] });
                });
            }
            catch (e) {
                let message = e.message;
                response.status(500).json({ success: false, error: message });
            }
        });
    }
}
exports.default = TeachersController;
