import executeQuery from "../utils/db.js";

class Doctor {
  med_nroMatriculaProsional;
  med_nombreCompleto;
  med_consultario;
  med_especialidad;
  esp_nombre;
  constructor() {}
  async getDoctorBySpeciality() {
    let sql = /*SQL */ `
    SELECT m.*
    FROM medico m
    INNER JOIN especialidad s ON m.med_especialidad = s.esp_id
    WHERE s.esp_nombre = \'${this.esp_nombre}\'
    `;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
export { Doctor };
