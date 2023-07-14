import { postPatient } from "../services/postServices.js";

const postPatientController = async (req, res, next) => {
  try {
    const {
      usu_id,
      usu_nombre,
      usu_segdo_nombre,
      usu_primer_apellido_usuar,
      usu_segdo_apellido_usuar,
      usu_telefono,
      usu_direccion,
      usu_e_mail,
      usu_fechNAc,
      usu_tipodoc,
      usu_genero,
      usu_acudiente,
      acu_codigo,
      acu_nombreCompleto,
      acu_telefono,
      acu_direccion,
    } = req.body;
    const result = await postPatient(
      usu_id,
      usu_nombre,
      usu_segdo_nombre,
      usu_primer_apellido_usuar,
      usu_segdo_apellido_usuar,
      usu_telefono,
      usu_direccion,
      usu_e_mail,
      usu_fechNAc,
      usu_tipodoc,
      usu_genero,
      usu_acudiente,
      acu_codigo,
      acu_nombreCompleto,
      acu_telefono,
      acu_direccion
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { postPatientController };
