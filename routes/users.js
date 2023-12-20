import express from 'express';
import { registerUser, loginUser, logoutUser, checkUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/checkUser', checkUser);

export default router;