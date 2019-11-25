import express from 'express';
import path from 'path';
import logger from 'morgan';
import index_router from './routes/index';

const app = express();
function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({nope: true});
    } else {
        next();
    }
}
app.use(ignoreFavicon);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index_router);

export default app;