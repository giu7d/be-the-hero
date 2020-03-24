import { Router } from "express";
import Ong from "controllers/ong.controller";
import Incident from "controllers/incident.controller";
import Profile from "controllers/profile.controller";
import Session from "controllers/session.controller";

const routes = Router();

// Sessions
routes.post("/sessions", Session.create);

// Ongs
routes.post("/ongs", Ong.create);
routes.get("/ongs", Ong.index);

// Profile
routes.get("/profile", Profile.index);

// Incidents
routes.post("/incidents", Incident.create);
routes.get("/incidents", Incident.index);
routes.delete("/incidents/:id", Incident.remove);

export default routes;
