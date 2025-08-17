const Joi = require("joi");

const listingSchema = Joi.object({
    listing: {
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().allow('', null),
        price: Joi.number().required().min(0),
        location: Joi.string().required(),
        country: Joi.string().required(),
    }
});

module.exports = listingSchema;