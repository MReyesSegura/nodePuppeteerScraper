"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const route_1 = require("./models/route");
const push_controller_1 = require("../controllers/push/push.controller");
class PullRoutes extends route_1.ServerRouter {
    constructor() {
        super();
        this.config();
    }
    config() {
        this.router.get('/pushFivetasks', push_controller_1.pushController.pushFiveTasks);
        this.router.get('/pushAllTasks', push_controller_1.pushController.pushAllTasks);
        this.router.get('/pushByNumber', push_controller_1.pushController.pushByNumber);
    }
}
const pullRoutes = new PullRoutes();
exports.default = pullRoutes.router;
