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
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    next();
});
app.use(ignoreFavicon);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index_router);
const port = 3001;
app.set('port', port);

//const mongoDB = 'mongodb+srv://afanasy:vbifyz99@cluster0-1pg63.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = 'mongodb+srv://saltowl:eadghe@weather-3uans.mongodb.net/weather_db?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => {
        console.log('DB connected');
        app.listen(port,()=>console.log(`App listening port : ${port}`));
        })
    .catch((err) => console.log('DB error', err));



export default app;