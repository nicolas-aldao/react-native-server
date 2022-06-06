import { Router } from 'express';
import { getTasks, home } from '../controllers/tasks';

const router = Router();
router.get('/', home);
router.get('/tasks/count');
router.get('/tasks/:id');
router.get('/tasks', getTasks);
router.post('/tasks');
router.delete('/tasks/:id');
router.put('/tasks/:id');

export default router;