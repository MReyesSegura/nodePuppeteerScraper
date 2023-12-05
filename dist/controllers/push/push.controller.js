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
exports.pushController = void 0;
const push_service_1 = require("./services/push.service");
const response_1 = require("../../application/handlers/response");
class PushController {
    pushFiveTasks(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const data = (_b = (_a = req.query.data) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
            try {
                const response = yield push_service_1.pushService.pushFiveTasks(data);
                const result = (0, response_1.appSuccessResponseHandler)('success', response);
                return res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                const { statusCode } = (0, response_1.appErrorResponseHandler)(error);
                return res.status(statusCode).json(error);
            }
        });
    }
    pushAllTasks(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const data = (_b = (_a = req.query.data) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
            try {
                const response = yield push_service_1.pushService.pushAllTasks(data);
                const result = (0, response_1.appSuccessResponseHandler)('success', response);
                return res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                const { statusCode } = (0, response_1.appErrorResponseHandler)(error);
                return res.status(statusCode).json(error);
            }
        });
    }
    pushByNumber(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const data = (_b = (_a = req.query.data) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
            try {
                const response = yield push_service_1.pushService.pushByNumber(data);
                const result = (0, response_1.appSuccessResponseHandler)('success', response);
                return res.status(200).json(result);
            }
            catch (error) {
                console.log(error);
                const { statusCode } = (0, response_1.appErrorResponseHandler)(error);
                return res.status(statusCode).json(error);
            }
        });
    }
}
exports.pushController = new PushController();
