import { Router } from 'express';
import indexRoutes from './indexRoutes';
import booksController from '../controllers/booksController';

class BookRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    config():void {
        this.router.get('/', booksController.index);
    }
}

const booksRoutes = new BookRoutes();
export default booksRoutes.router;