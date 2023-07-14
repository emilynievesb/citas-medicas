import { Router } from "express";
import { getInitRoute } from "./getData.js";
import { postInitRoute } from "./postData.js";
const initAPIRoutes = () => {
  const router = Router();
  router.use("/get", getInitRoute());
  router.use("/post", postInitRoute());
  return router;
};

export { initAPIRoutes };
