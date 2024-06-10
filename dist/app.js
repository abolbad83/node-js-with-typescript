"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const add = (a, b) => a + b;
const minus = (c, d) => c - d;
app.get('/', (req, res, next) => {
    console.log(minus(1, 1));
    console.log(add(0.5, 0.5));
    res.send('hello');
});
app.listen(5000, () => console.log('server runnig'));
