import { Request, Response } from 'express';

class BooksController {
    public index (req: Request, res: Response) {
        res.send("Books meraa")
    }
}

const booksController = new BooksController();
export default booksController;