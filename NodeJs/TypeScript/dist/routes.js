"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    CreateCourseService_1.default.execute({
        educator: "Diego",
        name: "NodeJS"
    });
    CreateCourseService_1.default.execute({
        educator: "TEST",
        name: "NodeJS",
        duration: 10
    });
    return response.send();
}
exports.createCourse = createCourse;
