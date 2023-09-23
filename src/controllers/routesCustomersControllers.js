import { db } from "../database/conectionDataBase.js";


// --------- rotas get --------

export async function getCustomers(req, res) {

    try {
        const clientes = await db.query(`SELECT * FROM customers;`);
        res.status(200).send(clientes.rows)

    } catch (err) {
        res.status(500).send(err.message)
    }
}


export async function getIdCustomers(req, res) {
    const {id} = req.params

    try {
        const cliente = await db.query(
            `SELECT * FROM customers WHERE id = $1;`, 
            [id]
        );
        console.log(cliente)

        if (!cliente.rows[0]){
            return res.sendStatus(404)
        } 

        res.status(200).send(cliente.rows[0]);

    } catch (err) {
        res.status(500).send(err.message)
    }
}


// --------- rota post --------


export async function postCustomers(req, res) {
    const {name, phone, cpf, birthday} = req.body

    try {
        const existCPF = await db.query(
            `SELECT * FROM customers WHERE cpf = $1;`,
            [cpf]
        );

        if (existCPF.rows[0]) return (res.sendStatus(409))
        
        await db.query(
            `INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4);`, 
        [name, phone, cpf, birthday]
        );

        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}


// --------- rota update --------

export async function updateCustomers(req, res) {
    const {id} = req.params;
    const {name, phone, cpf, birthday} = req.body;

    try {
        const cliente = await db.query(
            `UPDATE customers SET name = $1, phone = $2, cpf = $3, birthday = $4 WHERE id = $5`,
            [name, phone, cpf, birthday, id]
        )

        res.status(200).send(cliente.rows[0]);

    } catch (err) {
        res.status(500).send(err.message)
    }
}
