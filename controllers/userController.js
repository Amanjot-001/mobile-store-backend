import { User } from "../models/user.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
    try {
        let { username, password } = req.body;

        username = username.replace(/\s+/g, " ").trim();
        password = password.replace(/\s+/g, " ").trim();

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username is already taken' });
        }

        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(password, salt);

        const user = new User({
            username: username,
            password: hash,
        });

        await user.save();

        req.session.userId = user._id;
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error('Error in registerUser:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const loginUser = async (req, res) => {
    try {
        let { username, password } = req.body;

        username = username.replace(/\s+/g, " ").trim();
        password = password.replace(/\s+/g, " ").trim();

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        req.session.userId = user._id;

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error in loginUser:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error in logoutUser:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.clearCookie('connect.sid');
            res.status(200).json({ message: 'Logout successful' });
        }
    });
};