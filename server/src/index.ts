import express, { Application } from 'express';
import booksRoutes from './routes/booksRoutes';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';



class Server {
    public app: Application;
    constructor () {
        this.app = express();
        this.config();
        this.routes();
    }
    config():void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
    }
    routes():void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/books', booksRoutes);
    }
    start():void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();