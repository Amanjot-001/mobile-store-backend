import Express from 'express';
import connectDB from './db.js';
import userRoutes from './routes/users.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';

connectDB();

const app = Express();
const PORT = process.env.PORT || 8080;

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

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});