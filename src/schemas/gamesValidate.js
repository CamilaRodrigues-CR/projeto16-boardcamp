import Joi from "joi";

export const validationGames = Joi.object ({
    name: Joi.string().required(),
    image: Joi.string(),
    stockTotal: Joi.number().integer().min(1),
    pricePerDay: Joi.number().integer().min(1)
})