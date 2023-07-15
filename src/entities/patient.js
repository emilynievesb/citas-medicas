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
    SELECT
    u.usu_id AS UsuarioID,
    u.usu_nombre AS PrimerNombreUsuario,
    u.usu_segdo_nombre AS SegundoNombreUsuario,
    u.usu_primer_apellido_usuar AS PrimerApellidoUsuario,
    u.usu_segdo_apellido_usuar AS SegundoApellidoUsuario,
    u.usu_telefono AS UsuarioTelefono,
    u.usu_direccion AS DireccionUsuario,
    u.usu_e_mail AS EmailUsuario,
    u.usu_fechNac AS FechaNacimientoUsuario,
    g.gen_nombre AS NombreGenero,
    td.tipdoc_nombre AS NombreTipoDocumento,
    a.acu_nombreCompleto AS NombreAcudiente
  FROM
    usuario u
  INNER JOIN
    genero g ON u.usu_genero = g.gen_id
  INNER JOIN
    tipo_documento td ON u.usu_tipodoc = td.tipdoc_id
  INNER JOIN
    acudiente a ON u.usu_acudiente = a.acu_codigo
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
