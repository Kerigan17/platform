import { Router } from 'express';
import studentRouter from "./student.route";
const routes = Router();

routes.use('/students', studentRouter);

export default routes;