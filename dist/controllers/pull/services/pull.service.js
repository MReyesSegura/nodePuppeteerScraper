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
exports.pullService = void 0;
const app_response_1 = require("../../../application/models/app.response");
const puppeteer_1 = __importDefault(require("puppeteer"));
class PullService {
    pullFiveTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = yield puppeteer_1.default.launch();
            const page = yield browser.newPage();
            yield page.goto('https://trello.com/b/QvHVksDa/personal-work-goals');
            const buttonClass = 'oVcaxVSv1L1Ynk.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc';
            const buttonSelector = `.${buttonClass}`;
            const buttonExists = yield page.$(buttonSelector);
            if (buttonExists != null) {
                yield page.click(buttonSelector);
            }
            const fiveTasks = yield page.$$eval('[data-testid="card-name"]', (anchors) => anchors.slice(0, 5).map((a) => {
                return a.textContent;
            }));
            if (fiveTasks.length < 1) {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot find tasks',
                    isOperational: true,
                    code: '005',
                });
            }
            yield browser.close();
            return fiveTasks;
        });
    }
    pullAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = yield puppeteer_1.default.launch();
            const page = yield browser.newPage();
            yield page.goto('https://trello.com/b/QvHVksDa/personal-work-goals');
            const buttonClass = 'oVcaxVSv1L1Ynk.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc';
            const buttonSelector = `.${buttonClass}`;
            const buttonExists = yield page.$(buttonSelector);
            if (buttonExists != null) {
                yield page.click(buttonSelector);
            }
            const allTasks = yield page.$$eval('[data-testid="card-name"]', (anchors) => anchors.map((a) => {
                return a.textContent;
            }));
            if (allTasks.length < 1) {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot find tasks',
                    isOperational: true,
                    code: '006',
                });
            }
            yield browser.close();
            return allTasks;
        });
    }
    pullByNumber(number) {
        return __awaiter(this, void 0, void 0, function* () {
            if (number > 25) {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot request over 25 tasks',
                    isOperational: true,
                    code: '004',
                });
            }
            const browser = yield puppeteer_1.default.launch();
            const page = yield browser.newPage();
            yield page.goto('https://trello.com/b/QvHVksDa/personal-work-goals');
            const buttonClass = 'oVcaxVSv1L1Ynk.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc';
            const buttonSelector = `.${buttonClass}`;
            const buttonExists = yield page.$(buttonSelector);
            if (buttonExists != null) {
                yield page.click(buttonSelector);
            }
            const tasksByNumber = yield page.$$eval('[data-testid="card-name"]', (anchors, value) => anchors.slice(0, value).map((a) => {
                return a.textContent;
            }), number);
            if (tasksByNumber.length < 1) {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot find tasks',
                    isOperational: true,
                    code: '007',
                });
            }
            yield browser.close();
            return tasksByNumber;
        });
    }
}
exports.pullService = new PullService();
