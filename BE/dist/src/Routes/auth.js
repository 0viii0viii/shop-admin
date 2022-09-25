"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
const Service_1 = require("../Service");
const router = express_1.default.Router();
exports.loginRouter = router;
// Register
router.post("/register", Service_1.register);
// Login
router.post("/login");
