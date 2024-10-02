"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
require("./config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const http_1 = require("http");
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
exports.server = server;
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN,
}), (0, helmet_1.default)(), (0, morgan_1.default)('dev'), express_1.default.json({ limit: '1000MB' }), express_1.default.urlencoded({ limit: '2000MB', extended: true }));
console.log('testing');
