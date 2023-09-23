import Joi from "joi";

export const validateCustomers = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required().min(10).max(11),
    cpf: Joi.string().required().min(11).max(11),
    birthday: Joi.date().required()
})
export const validateUpdateCustomers = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required().min(10).max(11),
    birthday: Joi.date().required()
})

/*
cpf deve ser uma string com 11 caracteres numéricos; 
phone deve ser uma string com 10 ou 11 caracteres numéricos; 
name deve estar presente e não pode ser uma string vazia; 
birthday deve ser uma data válida; ⇒ nesses casos, deve retornar status 400
*/