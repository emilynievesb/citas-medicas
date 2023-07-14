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

const getDatesProx = async (usu_id) => {
  const date = new Date();
  date.usu_id = usu_id;
  const result = await date.getDateProx();
  return result;
};

const getDatesByDoc = async (med_id) => {
  const date = new Date();
  date.med_id = med_id;
  const result = await date.getDatesDoc();
  return result;
};

const getDatesByPatient = async (usu_id) => {
  const date = new Date();
  date.usu_id = usu_id;
  const result = await date.getDatePatient();
  return result;
};

const getDateByDate = async (fecha) => {
  const date = new Date();
  date.fecha = fecha;
  const result = await date.getDatesByDate();
  return result;
};

const getDoctorsConsul = async () => {
  const doctor = new Doctor();
  const result = await doctor.getDoctorsConsul();
  return result;
};

const getCountDatesByDocDate = async (med_id, fecha) => {
  const date = new Date();
  date.med_id = med_id;
  date.fecha = fecha;
  const result = await date.getCountDatesByDocDate();
  return result;
};

const getConsultorysPatient = async (usu_id) => {
  const date = new Date();
  date.usu_id = usu_id;
  const result = await date.getConsultorysPatient();
  return result;
};

const getDatesByGender = async (genero) => {
  const date = new Date();
  date.genero = genero;
  const result = await date.getDatesByGender();
  return result;
};

const getDatesSuspendByMont = async (mes) => {
  const date = new Date();
  date.mes = mes;
  const result = await date.getDatesSuspendByMont();
  return result;
};

export {
  getDocBySpeciality,
  getPatientsAlph,
  getDatesAlph,
  getDatesProx,
  getDatesByDoc,
  getDatesByPatient,
  getDateByDate,
  getDoctorsConsul,
  getCountDatesByDocDate,
  getConsultorysPatient,
  getDatesByGender,
  getDatesSuspendByMont,
};
