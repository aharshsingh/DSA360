import express from 'express'
import authController from '../controllers/auth'
const router = express.Router();

router.post("/signup", authController.register);
router.post("/login", authController.login);
router.post("/refresh", authController.refresh);
router.post("/passwordlesslogin", authController.passwordLessLogin);
export default router;

