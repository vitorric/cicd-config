"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const env = `.env.${process.env.NODE_ENV}`;
const pathEnv = path_1.default.resolve(__dirname, '../', env);
dotenv_1.default.config({
    path: pathEnv,
});
