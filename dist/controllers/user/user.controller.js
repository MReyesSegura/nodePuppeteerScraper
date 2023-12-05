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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./services/user.service");
const response_1 = require("../../application/handlers/response");
class UserController {
    createUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body.user;
            try {
                const response = yield user_service_1.userService.createUsers(user);
                const result = (0, response_1.appSuccessResponseHandler)('success', response);
                return res.status(200).json(result);
            }
            catch (error) {
                const { statusCode } = (0, response_1.appErrorResponseHandler)(error);
                return res.status(statusCode).json(error);
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            try {
                const response = yield user_service_1.userService.login(body);
                const result = (0, response_1.appSuccessResponseHandler)('success', response);
                return res.status(200).json(result);
            }
            catch (error) {
                const { statusCode } = (0, response_1.appErrorResponseHandler)(error);
                return res.status(statusCode).json(error);
            }
        });
    }
}
exports.userController = new UserController();
