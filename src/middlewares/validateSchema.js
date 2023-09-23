export function validateSchema(schema) {
    return (request, response, next) => {
        const validation = schema.validate(request.body, { abortEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map(det => det.message)
            return response.status(400).send(errors)
        }

        next()
    }
}