"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const route_1 = require("./models/route");
const pull_controller_1 = require("../controllers/pull/pull.controller");
class PullRoutes extends route_1.ServerRouter {
    constructor() {
        super();
        this.config();
    }
    config() {
        this.router.get('/pullFivetasks', pull_controller_1.pullController.pullFiveTasks);
        this.router.get('/pullAllTasks', pull_controller_1.pullController.pullAllTasks);
        this.router.get('/pullByNumber', pull_controller_1.pullController.pullByNumber);
    }
}
const pullRoutes = new PullRoutes();
exports.default = pullRoutes.router;
