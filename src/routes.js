const express = require("express");

const ongController = require("./controllers/OngController");
const incidentController = require("./controllers/IncidentController");
const profileController = require("./controllers/ProfileController");
const sessionController = require("./controllers/SessionController");

// const connection = require("./database/connection");

const routes = express.Router();

routes.post("/ongs", ongController.create);
routes.get("/ongs", ongController.list);

routes.post("/incidents", incidentController.create);
routes.get("/incidents", incidentController.list);
routes.delete("/incidents/:id", incidentController.delete);

routes.get("/profile", profileController.list);

routes.post("/session", sessionController.create);

module.exports = routes;
