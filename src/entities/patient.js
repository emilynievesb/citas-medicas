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
  usu_fechNAc;
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
}
export { Patient };
