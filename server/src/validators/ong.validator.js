import { Joi, celebrate, Segments } from "celebrate";

const OngCreateValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string()
      .required()
      .email(),
    whatsapp: Joi.number()
      .min(12)
      .max(13)
      .required(),
    city: Joi.string().required(),
    uf: Joi.string()
      .length(2)
      .required()
  })
});

export { OngCreateValidator };
