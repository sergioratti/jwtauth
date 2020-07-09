import { Router } from 'express';
import UserRouter from './Users';
import AuthRouter from './auth'

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/users', AuthRouter);

// Export the base-router
export default router;
