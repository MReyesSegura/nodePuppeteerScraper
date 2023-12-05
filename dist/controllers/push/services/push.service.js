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
exports.pushService = void 0;
const app_response_1 = require("../../../application/models/app.response");
const puppeteer_1 = __importDefault(require("puppeteer"));
class PushService {
    pushFiveTasks(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const arrayData = JSON.parse(data);
            const browser = yield puppeteer_1.default.launch();
            const page = yield browser.newPage();
            yield page.goto('https://app.todoist.com/');
            yield new Promise(r => setTimeout(r, 1000));
            const emailInput = 'element-0';
            const passwordInput = 'element-3';
            const loginButton = '.F9gvIPl.rWfXb_e._8313bd46._7a4dbd5f._95951888._2a3b75a1._8c75067a';
            const emailInputFound = yield page.$(`#${emailInput}`);
            const passInputFound = yield page.$(`#${passwordInput}`);
            if (emailInputFound === null || passInputFound === null) {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot find email or password input',
                    isOperational: true,
                    code: '001'
                });
            }
            yield page.type(`#${emailInput}`, 'marioreyesdeveloper@gmail.com');
            yield page.type(`#${passwordInput}`, 'Jajaja95@');
            const buttonExists = yield page.$(loginButton);
            if (buttonExists) {
                yield page.click(loginButton);
            }
            else {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot find login button',
                    isOperational: true,
                    code: '002'
                });
            }
            yield page.waitForSelector('.simple_content', { visible: true });
            const newTaskButton = '.plus_add_button';
            const newTaskBExists = yield page.waitForSelector(newTaskButton, { timeout: 1000 });
            if (newTaskBExists) {
                yield new Promise(r => setTimeout(r, 1000));
                yield page.click(newTaskButton);
                try {
                    for (let index = 0; index < arrayData.length; index++) {
                        yield new Promise(r => setTimeout(r, 1000));
                        const allPTags = yield page.$$('p');
                        // Ensure there are enough <p> tags
                        const secondPTag = allPTags[1];
                        const thirdTag = allPTags[2];
                        yield new Promise(r => setTimeout(r, 1000));
                        yield page.evaluate((p, text) => {
                            p.textContent = text;
                        }, secondPTag, 'PushFiveTasks');
                        yield page.evaluate((p, text) => {
                            p.textContent = text;
                        }, thirdTag, arrayData[index]);
                        yield page.click('._8313bd46._7a4dbd5f._5e45d59f._2a3b75a1._56a651f6');
                        yield new Promise(r => setTimeout(r, 500));
                    }
                }
                catch (error) {
                    console.error('Error during the task processing:', error);
                }
            }
            else {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot find new task button',
                    isOperational: true,
                    code: '003',
                });
            }
            yield browser.close();
            return 'Tasks added successfully.';
        });
    }
    pushAllTasks(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const arrayData = JSON.parse(data);
            const browser = yield puppeteer_1.default.launch();
            const page = yield browser.newPage();
            yield page.goto('https://app.todoist.com/');
            yield new Promise(r => setTimeout(r, 1000));
            const emailInput = 'element-0';
            const passwordInput = 'element-3';
            const loginButton = '.F9gvIPl.rWfXb_e._8313bd46._7a4dbd5f._95951888._2a3b75a1._8c75067a';
            const emailInputFound = yield page.$(`#${emailInput}`);
            const passInputFound = yield page.$(`#${passwordInput}`);
            if (emailInputFound === null || passInputFound === null) {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot find email or password input',
                    isOperational: true,
                    code: '001'
                });
            }
            yield page.type(`#${emailInput}`, 'marioreyesdeveloper@gmail.com');
            yield page.type(`#${passwordInput}`, 'Jajaja95@');
            const buttonExists = yield page.$(loginButton);
            if (buttonExists) {
                yield page.click(loginButton);
            }
            else {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot find login button',
                    isOperational: true,
                    code: '002'
                });
            }
            yield page.waitForSelector('.simple_content', { visible: true });
            const newTaskButton = '.plus_add_button';
            const newTaskBExists = yield page.waitForSelector(newTaskButton, { timeout: 1000 });
            if (newTaskBExists) {
                yield new Promise(r => setTimeout(r, 1000));
                yield page.click(newTaskButton);
                try {
                    for (let index = 0; index < arrayData.length; index++) {
                        yield new Promise(r => setTimeout(r, 1000));
                        const allPTags = yield page.$$('p');
                        // Ensure there are enough <p> tags
                        const secondPTag = allPTags[1];
                        const thirdTag = allPTags[2];
                        yield new Promise(r => setTimeout(r, 1000));
                        yield page.evaluate((p, text) => {
                            p.textContent = text;
                        }, secondPTag, 'PushAllTasks');
                        yield page.evaluate((p, text) => {
                            p.textContent = text;
                        }, thirdTag, arrayData[index]);
                        yield page.click('._8313bd46._7a4dbd5f._5e45d59f._2a3b75a1._56a651f6');
                        yield new Promise(r => setTimeout(r, 500));
                    }
                }
                catch (error) {
                    console.error('Error during the task processing:', error);
                }
            }
            else {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot find new task button',
                    isOperational: true,
                    code: '003',
                });
            }
            yield browser.close();
            return 'Tasks added successfully.';
        });
    }
    pushByNumber(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const arrayData = JSON.parse(data);
            const browser = yield puppeteer_1.default.launch();
            const page = yield browser.newPage();
            yield page.goto('https://app.todoist.com/');
            yield new Promise(r => setTimeout(r, 1000));
            const emailInput = 'element-0';
            const passwordInput = 'element-3';
            const loginButton = '.F9gvIPl.rWfXb_e._8313bd46._7a4dbd5f._95951888._2a3b75a1._8c75067a';
            const emailInputFound = yield page.$(`#${emailInput}`);
            const passInputFound = yield page.$(`#${passwordInput}`);
            if (emailInputFound === null || passInputFound === null) {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot find email or password input',
                    isOperational: true,
                    code: '001'
                });
            }
            yield page.type(`#${emailInput}`, 'marioreyesdeveloper@gmail.com');
            yield page.type(`#${passwordInput}`, 'Jajaja95@');
            const buttonExists = yield page.$(loginButton);
            if (buttonExists) {
                yield page.click(loginButton);
            }
            else {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot find login button',
                    isOperational: true,
                    code: '002'
                });
            }
            yield page.waitForSelector('.simple_content', { visible: true });
            const newTaskButton = '.plus_add_button';
            const newTaskBExists = yield page.waitForSelector(newTaskButton, { timeout: 1000 });
            if (newTaskBExists) {
                yield new Promise(r => setTimeout(r, 1000));
                yield page.click(newTaskButton);
                try {
                    for (let index = 0; index < arrayData.length; index++) {
                        yield new Promise(r => setTimeout(r, 1000));
                        const allPTags = yield page.$$('p');
                        // Ensure there are enough <p> tags
                        const secondPTag = allPTags[1];
                        const thirdTag = allPTags[2];
                        yield new Promise(r => setTimeout(r, 3000));
                        yield page.evaluate((p, text) => {
                            p.textContent = text;
                        }, secondPTag, 'PushByNumber');
                        yield page.evaluate((p, text) => {
                            p.textContent = text;
                        }, thirdTag, arrayData[index]);
                        yield page.click('._8313bd46._7a4dbd5f._5e45d59f._2a3b75a1._56a651f6');
                        yield new Promise(r => setTimeout(r, 500));
                    }
                }
                catch (error) {
                    console.error('Error during the task processing:', error);
                }
            }
            else {
                throw new app_response_1.AppErrorResponse({
                    statusCode: 404,
                    description: 'Not Found',
                    name: 'Cannot find new task button',
                    isOperational: true,
                    code: '003',
                });
            }
            yield browser.close();
            return 'Tasks added successfully.';
        });
    }
}
exports.pushService = new PushService();
