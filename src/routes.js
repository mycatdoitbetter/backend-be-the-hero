import express from "express";

import incidentController from "./controllers/IncidentController";
import profileController from "./controllers/ProfileController";
import sessionController from "./controllers/SessionController";
import ongController from "./controllers/OngController";

const routes = express.Router();

// ONG METHODS
routes.post("/ongs", ongController.create);
routes.get("/ongs", ongController.list);

// INCIDENT METHODS
routes.get("/incidents", incidentController.list);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", incidentController.delete);

// PROFILE METHOD
routes.get("/profile", profileController.list);

// SESSION METHOD (Login)
routes.post("/session", sessionController.create);

export default routes;
