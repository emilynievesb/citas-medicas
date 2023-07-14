import { Router } from "express";
import { postPatientController } from "../controllers/postDataHospital.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarpaciente", postPatientController);
  return router;
};

export { postInitRoute };
