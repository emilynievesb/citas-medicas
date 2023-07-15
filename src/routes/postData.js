import { Router } from "express";
import { postPatientController } from "../controllers/postDataHospital.js";
import { postPatientDTO } from "./dto/postDtos.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarpaciente", postPatientDTO, postPatientController);
  return router;
};

export { postInitRoute };
