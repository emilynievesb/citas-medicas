import { Doctor } from "../entities/doctor.js";
import { Patient } from "../entities/patient.js";
import { Date } from "../entities/date.js";

const getDocBySpeciality = async (esp_nombre) => {
  const doctor = new Doctor();
  doctor.esp_nombre = esp_nombre;
  const result = await doctor.getDoctorBySpeciality();
  return result;
};

const getPatientsAlph = async () => {
  const patient = new Patient();
  const result = await patient.getPatientsAlf();
  return result;
};

const getDatesAlph = async () => {
  const date = new Date();
  const result = await date.getDatesAlf();
  return result;
};

export { getDocBySpeciality, getPatientsAlph, getDatesAlph };
