import express from 'express';
import mongoose from 'mongoose';
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
const mongoDB = 'mongodb+srv://afanas:vbifyz99@weather-zjak3.mongodb.net/test?retryWrites=true&w=majority';


mongoose.connect(mongoDB, { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB error', err));
app.use(ignoreFavicon);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index_router);
const port = 3001;
app.set('port', port);

app.listen(port,()=>console.log(`App listening port : ${port}`));

export default app;