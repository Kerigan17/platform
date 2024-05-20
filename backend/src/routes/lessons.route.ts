import { Router } from 'express';
import lessonsController from "../controllers/lessons.controller";

const lessonsRouter = Router();
lessonsRouter.get('/', lessonsController.getAll);

export default lessonsRouter;