import { Joi, celebrate, Segments } from "celebrate";

const IncidentDeleteValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
});

const IncidentsIndexValidator = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
});

export { IncidentDeleteValidator, IncidentsIndexValidator };
