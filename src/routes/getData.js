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
  getDatesSuspendByMontController,
  getDocBySpecialityController,
  getDoctorsConsulController,
  getPatientsAlphController,
} from "../controllers/getDataHospital.js";

import { getDocBySpecialityDTO, getDatesProxDTO } from "./dto/getDtos.js";

const getInitRoute = () => {
  const router = Router();
  router.get(
    "/medicosporespecialidad",
    getDocBySpecialityDTO,
    getDocBySpecialityController
  );
  router.get("/pacientesalfabeticamente", getPatientsAlphController);
  router.get("/citasalfabeticamente", getDatesAlphController);
  router.get("/citaproxima", getDatesProxDTO, getDatesProxController);
  router.get("/citaspormedico", getDatesByDocController);
  router.get("/citasporpaciente", getDatesByPatientController);
  router.get("/citasporfecha", getDatesByDateController);
  router.get("/medicosyconsultorios", getDoctorsConsulController);
  router.get("/contadordecitas", getCountDatesByDocDateController);
  router.get("/consultoriosdepacientes", getConsultorysPatientController);
  router.get("/citasporgenero", getDatesByGenderController);
  router.get("/citasrechazas", getDatesSuspendByMontController);
  return router;
};

export { getInitRoute };
