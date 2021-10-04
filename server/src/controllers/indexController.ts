import { json } from 'body-parser';
import { Request, Response } from 'express';

class IndexController {
    public index (req: Request, res: Response) {
        res.json({tex: 'API is /api/books' });
    }
}

export const indexController = new IndexController();