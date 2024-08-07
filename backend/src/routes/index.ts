import { Application } from "express";
import homeRoutes from "./home.routes";
import teachersRoutes from "./teachers.routes";

export default class Routes {
    constructor(app: Application) {
        app.use("/api", homeRoutes);
        app.use("/api", teachersRoutes);
    }
}