import Joi from "joi";

export const validateCustomers = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().pattern(/^\d{2}(\d{8}|\d{7})$/).required(),
    cpf: Joi.string().pattern(/^\d{3}\d{3}\d{3}\d{2}$/).required(),
    birthday: Joi.string().pattern(/^\d{4}\-\d{2}\-\d{2}$/).required(),
})

/*
cpf deve ser uma string com 11 caracteres numéricos; 
phone deve ser uma string com 10 ou 11 caracteres numéricos; 
name deve estar presente e não pode ser uma string vazia; 
birthday deve ser uma data válida; ⇒ nesses casos, deve retornar status 400
*/