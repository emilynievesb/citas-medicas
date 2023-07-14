import executeQuery from "../utils/db.js";

class Attendant {
  acu_codigo;
  acu_nombreCompleto;
  acu_telefono;
  acu_direccion;
  constructor() {}
  async postAttendant() {
    let sql = /*sql*/ `
    INSERT INTO acudiente (acu_codigo,acu_nombreCompleto, acu_telefono, acu_direccion)
    VALUES (${this.acu_codigo},\"${this.acu_nombreCompleto}\", ${this.acu_telefono}, \"${this.acu_direccion}\")
    `;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async searchAttendant() {
    let sql = /*sql*/ `
    SELECT acu_codigo FROM acudiente
    WHERE acu_codigo = ${this.acu_codigo}
    `;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Attendant };
