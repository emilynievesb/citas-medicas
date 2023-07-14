import { Router } from "express";
import {
  getDatesAlphController,
  getDatesByDocController,
  getDatesProxController,
  getDocBySpecialityController,
  getPatientsAlphController,
} from "../controllers/getDataHospital.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/medicosporespecialidad", getDocBySpecialityController);
  router.get("/pacientesalfabeticamente", getPatientsAlphController);
  router.get("/citasalfabeticamente", getDatesAlphController);
  router.get("/citaproxima", getDatesProxController);
  router.get("/citaspormedico", getDatesByDocController);
  return router;
};

export { getInitRoute };
