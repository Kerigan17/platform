import { Router } from 'express';
import studentRouter from "./students.route";
import lessonsRouter from "./lessons.route";
const routes = Router();

routes.use('/students', studentRouter);
routes.use('/lessons', lessonsRouter);

export default routes;