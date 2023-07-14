import { Router } from "express";
import {
  getConsultorysPatientController,
  getCountDatesByDocDateController,
  getDatesAlphController,
  getDatesByDateController,
  getDatesByDocController,
  getDatesByGenderController,
  getDatesByPatientController,
  getDatesProxController,
  getDocBySpecialityController,
  getDoctorsConsulController,
  getPatientsAlphController,
} from "../controllers/getDataHospital.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/medicosporespecialidad", getDocBySpecialityController);
  router.get("/pacientesalfabeticamente", getPatientsAlphController);
  router.get("/citasalfabeticamente", getDatesAlphController);
  router.get("/citaproxima", getDatesProxController);
  router.get("/citaspormedico", getDatesByDocController);
  router.get("/citasporpaciente", getDatesByPatientController);
  router.get("/citasporfecha", getDatesByDateController);
  router.get("/medicosyconsultorios", getDoctorsConsulController);
  router.get("/contadordecitas", getCountDatesByDocDateController);
  router.get("/consultoriosdepacientes", getConsultorysPatientController);
  router.get("/citasporgenero", getDatesByGenderController);
  return router;
};

export { getInitRoute };
