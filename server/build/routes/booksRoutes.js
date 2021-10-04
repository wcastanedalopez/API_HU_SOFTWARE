"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BookRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Books'));
    }
}
const booksRoutes = new BookRoutes();
exports.default = booksRoutes.router;
