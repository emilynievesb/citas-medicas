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

import {
  getDocBySpecialityDTO,
  getDatesProxDTO,
  getDatesByDocDTO,
  getDatesByPatientDTO,
  getDatesByDateDTO,
  getCountDatesByDocDateDTO,
  getConsultorysPatientDTO,
  getDatesByGenderDTO,
  getDatesSuspendByMontDTO,
} from "./dto/getDtos.js";

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
  router.get("/citaspormedico", getDatesByDocDTO, getDatesByDocController);
  router.get(
    "/citasporpaciente",
    getDatesByPatientDTO,
    getDatesByPatientController
  );
  router.get("/citasporfecha", getDatesByDateDTO, getDatesByDateController);
  router.get("/medicosyconsultorios", getDoctorsConsulController);
  router.get(
    "/contadordecitas",
    getCountDatesByDocDateDTO,
    getCountDatesByDocDateController
  );
  router.get(
    "/consultoriosdepacientes",
    getConsultorysPatientDTO,
    getConsultorysPatientController
  );
  router.get(
    "/citasporgenero",
    getDatesByGenderDTO,
    getDatesByGenderController
  );
  router.get(
    "/citasrechazas",
    getDatesSuspendByMontDTO,
    getDatesSuspendByMontController
  );
  return router;
};

export { getInitRoute };
