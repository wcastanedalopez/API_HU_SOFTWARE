import { Router } from 'express';
import indexRoutes from './indexRoutes';

class BookRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    config():void {
        this.router.get('/', (req, res) => res.send('Books'));
    }
}

const booksRoutes = new BookRoutes();
export default booksRoutes.router;