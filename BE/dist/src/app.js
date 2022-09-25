"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("./Routes/auth");
const connection_1 = __importDefault(require("./connection"));
const app = (0, express_1.default)();
// DB Connection
(0, connection_1.default)();
app.listen(8080, () => {
    console.log("server on");
});
app.use("/auth", auth_1.loginRouter);
