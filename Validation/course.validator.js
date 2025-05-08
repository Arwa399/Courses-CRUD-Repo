const Joi = require("joi");

const courseValidationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().uri().optional(),
  startDate: Joi.date().optional(),
  endDate: Joi.date().optional(),
  price: Joi.number().required()
});
module.exports = courseValidationSchema;