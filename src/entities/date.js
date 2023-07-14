import executeQuery from "../utils/db.js";

class Date {
  cit_codigo;
  cit_fecha;
  cit_estadoCita;
  cit_medico;
  cit_datosUsuario;
  usu_id;
  constructor() {}

  async getDatesAlf() {
    let sql = /*sql*/ `
    SELECT c.cit_codigo AS CodigoCita,
    c.cit_fecha AS FechaCita,
    c.cit_estadoCita AS EstadoCita,
    c.cit_medico AS MedicoID,
    c.cit_datosUsuario AS UsuarioID,
    u.usu_primer_apellido_usuar AS PrimerApellido,
    u. usu_nombre AS Nombre,
    FROM cita c
    INNER JOIN usuario u ON c.cit_datosUsuario = u.usu_id
    ORDER BY u.usu_primer_apellido_usuar, u.usu_nombre;
    `;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async getDateProx() {
    let sql = /*sql*/ `
    SELECT
    c.cit_codigo AS CodigoCita,
    c.cit_fecha AS FechaCita,
    c.cit_estadoCita AS EstadoCita,
    c.cit_medico AS MedicoID,
    c.cit_datosUsuario AS UsuarioID
  FROM
    cita c
  WHERE
    c.cit_datosUsuario = ${this.usu_id}
    AND c.cit_fecha >= CURDATE()
  ORDER BY
    c.cit_fecha
  LIMIT 1;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Date };
