const Joi = require("joi");

const listingJoiSchema = Joi.object({
  listing: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: {
      url: Joi.string().required(),
      filename: Joi.string().required(),
    },
    price: Joi.number().required().min(0),
    location: Joi.string().required(),
    country: Joi.string().required(),
  },
});

const reviewJoiSchema = Joi.object({
  rating: Joi.number().required().min(1).max(5),
  comment: Joi.string().required(),
});

module.exports = { listingJoiSchema, reviewJoiSchema };
