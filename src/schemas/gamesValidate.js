import Joi from "joi";

export const validateGames = Joi.object ({
    name: Joi.string().required(),
    image: Joi.string(),
    stockTotal: Joi.number().integer().min(1),
    pricePerDay: Joi.number().integer().min(1)
})

/*
- `name` deve estar presente e não pode estar vazio; 
`stockTotal` e `pricePerDay` devem ser maiores que 0 ⇒ nesses casos, deve retornar **status 400.**
*/