import { Router } from 'express';
import { deleteTask, getTask, getTaskCount, getTasks, home, saveTask, updateTask } from '../controllers/tasks';

const router = Router();
router.get('/tasks/count', getTaskCount);
router.get('/tasks/:id', getTask);
router.get('/tasks', getTasks);
router.post('/tasks', saveTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', updateTask);
router.get('/', home);

export default router;