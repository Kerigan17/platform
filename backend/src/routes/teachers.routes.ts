import { Router } from "express";
import TeachersController from '../controllers/teachers.controller'

class TutorialRoutes {
    router = Router();
    controller = new TeachersController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {
        // Retrieve all Tutorials
        this.router.get("/login", this.controller.findOne);
    }
}

export default new TutorialRoutes().router;