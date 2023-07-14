import { getInitRoute } from "./getData.js";
import { Router } from "express";
const initAPIRoutes = () => {
  const router = Router();
  router.use("/get", getInitRoute());
  return router;
};

export { initAPIRoutes };
