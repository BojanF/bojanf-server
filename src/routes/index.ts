import {Router} from 'express';
import TestBojan from './TestBojan';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/test', TestBojan);

// Export the base-router
export default router;
