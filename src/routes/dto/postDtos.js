import { object, string, number, date } from "yup";

const postPatientDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      acu_codigo: number().required(),
      acu_nombreCompleto: string()
        .strict()
        .matches(/^[a-z A-Z]+$/, "Is not in correct format")
        .optional(),
      acu_telefono: number().optional(),
      acu_direccion: string()
        .strict()
        .matches(/^[a-z A-Z]+$/, "Is not in correct format")
        .optional(),
      usu_id: number().optional(),
      usu_nombre: string()
        .strict()
        .matches(/^[a-z A-Z]+$/, "Is not in correct format")
        .optional(),
      usu_segdo_nombre: string()
        .strict()
        .matches(/^[a-z A-Z]+$/, "Is not in correct format")
        .optional(),
      usu_primer_apellido_usuar: string()
        .strict()
        .matches(/^[a-z A-Z]+$/, "Is not in correct format")
        .optional(),
      usu_segdo_apellido_usuar: string()
        .strict()
        .matches(/^[a-z A-Z]+$/, "Is not in correct format")
        .optional(),
      usu_telefono: number().optional(),
      usu_direccion: string()
        .strict()
        .matches(/^[a-z A-Z]+$/, "Is not in correct format")
        .optional(),
      usu_e_mail: string()
        .strict()
        .matches(/^[a-z A-Z]+$/, "Is not in correct format")
        .optional(),
      usu_fechNac: date().optional(),
      usu_tipodoc: number().optional(),
      usu_genero: number().optional(),
      usu_acudiente: number().optional(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export { postPatientDTO };
