import express from 'express';
import { registerUser, loginUser, logoutUser, checkUser, fetchUser, startServer, allUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/checkUser', checkUser);
router.post('/fetchUser', fetchUser);
router.get('/startServer', startServer);
router.get('/allUsers', allUsers);

export default router;