import {
  getDocBySpeciality,
  getPatientsAlph,
} from "../services/getServices.js";

const getDocBySpecialityController = async (req, res, next) => {
  try {
    const { esp_nombre } = req.query;
    const result = await getDocBySpeciality(esp_nombre);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPatientsAlphController = async (req, res, next) => {
  try {
    const result = await getPatientsAlph();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export { getDocBySpecialityController, getPatientsAlphController };
