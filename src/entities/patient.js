import executeQuery from "../utils/db.js";

class Patient {
  usu_id;
  usu_nombre;
  usu_segdo_nombre;
  usu_primer_apellido_usuar;
  usu_segdo_apellido_usuar;
  usu_telefono;
  usu_direccion;
  usu_e_mail;
  usu_fechNac;
  usu_tipodoc;
  usu_genero;
  usu_acudiente;
  constructor() {}
  async getPatientsAlf() {
    let sql = /*sql*/ `
    SELECT u.*
    FROM usuario u
    ORDER BY usu_primer_apellido_usuar, usu_nombre;
    `;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async isAdult() {
    let today = new Date();
    let birth = new Date(this.usu_fechNac);
    let ageMs = today - birth;
    let age = ageMs / (1000 * 60 * 60 * 24 * 365.25);
    return age >= 18;
  }

  async postPatient() {
    let sql = /*sql*/ `
    INSERT INTO usuario (
      usu_id, usu_nombre,
      usu_segdo_nombre,
      usu_primer_apellido_usuar,
      usu_segdo_apellido_usuar,
      usu_telefono, usu_direccion,
      usu_e_mail, usu_fechNac,
      usu_tipodoc, usu_genero,
      usu_acudiente)
      VALUES (${this.usu_id}, \"${this.usu_nombre}\",
      \"${this.usu_segdo_nombre}\",
      \"${this.usu_primer_apellido_usuar}\",
      \"${this.usu_segdo_apellido_usuar}\", ${this.usu_telefono},
      \"${this.usu_direccion}\",\"${this.usu_e_mail}\",
      \"${this.usu_fechNac}\", ${this.usu_tipodoc},
      ${this.usu_genero}, ${this.usu_acudiente});
    `;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
export { Patient };
