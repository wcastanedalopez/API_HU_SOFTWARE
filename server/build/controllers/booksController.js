"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksController = void 0;
class BooksController {
    books(req, res) {
        res.send("Books");
    }
}
exports.booksController = new BooksController();
