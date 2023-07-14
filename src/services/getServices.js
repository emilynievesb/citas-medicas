import { Doctor } from "../entities/doctor.js";

const getDocBySpeciality = async (esp_nombre) => {
  const doctor = new Doctor();
  doctor.esp_nombre = esp_nombre;
  const result = await doctor.getDoctorBySpeciality();
  return result;
};

export { getDocBySpeciality };
