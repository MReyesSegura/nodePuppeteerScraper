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
exports.pullController = void 0;
const pull_service_1 = require("./services/pull.service");
const response_1 = require("../../application/handlers/response");
class PullController {
    pullFiveTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield pull_service_1.pullService.pullFiveTasks();
                const data = JSON.stringify(response);
                res.redirect(`/api/push/pushFiveTasks?data=${data}`);
            }
            catch (error) {
                console.log(error);
                const { statusCode } = (0, response_1.appErrorResponseHandler)(error);
                return res.status(statusCode).json(error);
            }
        });
    }
    pullAllTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield pull_service_1.pullService.pullAllTasks();
                const data = JSON.stringify(response);
                res.redirect(`/api/push/pushAllTasks?data=${data}`);
            }
            catch (error) {
                console.log(error);
                const { statusCode } = (0, response_1.appErrorResponseHandler)(error);
                return res.status(statusCode).json(error);
            }
        });
    }
    pullByNumber(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const number = parseInt((_b = (_a = req.query.number) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '');
            try {
                const response = yield pull_service_1.pullService.pullByNumber(number);
                const data = JSON.stringify(response);
                res.redirect(`/api/push/pushByNumber?data=${data}`);
            }
            catch (error) {
                console.log(error);
                const { statusCode } = (0, response_1.appErrorResponseHandler)(error);
                return res.status(statusCode).json(error);
            }
        });
    }
}
exports.pullController = new PullController();
