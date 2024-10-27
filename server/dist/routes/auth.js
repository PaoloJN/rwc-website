"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const error_handler_1 = require("../error-handler");
const authRoutes = (0, express_1.Router)();
authRoutes.post("/signup", (0, error_handler_1.errorHandler)(auth_1.signup));
authRoutes.post("/login", (0, error_handler_1.errorHandler)(auth_1.login));
exports.default = authRoutes;
