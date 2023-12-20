import Express from 'express';
import connectDB from './db.js';
// import userRoutes from './routes/users.js';
import router from './routes/users.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from "body-parser";

connectDB();

const app = Express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'your_secret_key',
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 3 * 30 * 24 * 60 * 60 * 1000 },
    })
);

app.use('/users', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});