import { Joi, celebrate, Segments } from "celebrate";

const ProfileIndexValidator = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
});

export { ProfileIndexValidator };
