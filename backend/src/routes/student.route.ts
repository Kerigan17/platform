import { Router } from 'express';
import studentController from "../controllers/students.controller";
const studentRouter = Router();

studentRouter.get('/', studentController.getAll);

export default studentRouter;