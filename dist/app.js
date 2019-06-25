"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = '8080';
const app = express_1.default();
app.get('/', (res) => {
    res.send('hello world');
});
app.listen(port, () => {
    console.log(`sever running on port ${port}`);
});
