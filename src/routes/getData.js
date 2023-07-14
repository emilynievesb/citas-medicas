import { Router } from "express";
import { getDocBySpecialityController } from "../controllers/getDataHospital.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/medicosporespecialidad", getDocBySpecialityController);
  return router;
};

export { getInitRoute };
