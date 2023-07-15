import { Router } from "express";
import { getInitRoute } from "./getData.js";
import { postInitRoute } from "./postData.js";
import { postPatientDTO } from "./dto/postDtos.js";
const initAPIRoutes = () => {
  const router = Router();
  router.use("/get", getInitRoute());
  router.use("/post", postPatientDTO, postInitRoute());
  return router;
};

export { initAPIRoutes };
