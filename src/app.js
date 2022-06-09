import express from 'express';
import tasksRoutes from './routes/tasks';
import cors from 'cors';
import morgan from 'morgan';

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import {options} from './swaggerOptions';

const specs = swaggerJsdoc(options)

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(tasksRoutes);

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

export default app;