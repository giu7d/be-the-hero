import { Router } from "express";
import { OngCreateValidator } from "validators/ong.validator";
import { ProfileIndexValidator } from "validators/profile.validator";
import {
  IncidentDeleteValidator,
  IncidentsIndexValidator
} from "validators/incident.validator";

import Ong from "controllers/ong.controller";
import Incident from "controllers/incident.controller";
import Profile from "controllers/profile.controller";
import Session from "controllers/session.controller";

const routes = Router();

// Sessions
routes.post("/sessions", Session.create);

// Ongs
routes.post("/ongs", OngCreateValidator, Ong.create);
routes.get("/ongs", Ong.index);

// Profile
routes.get("/profile", ProfileIndexValidator, Profile.index);

// Incidents
routes.post("/incidents", Incident.create);
routes.get("/incidents", IncidentsIndexValidator, Incident.index);
routes.delete("/incidents/:id", IncidentDeleteValidator, Incident.remove);

export default routes;
