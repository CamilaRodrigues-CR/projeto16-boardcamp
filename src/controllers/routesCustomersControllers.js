import { db } from "../database/conectionDataBase.js";


// --------- rotas get --------

export async function getCustomers(req, res) {
    try {
        const clientes = await db.query(`SELECT * FROM customers;`);

        // Formatando a data no formato "YYYY-MM-DD"
        const clientesFormatados = clientes.rows.map(cliente => {
            const dataFormatada = cliente.birthday.toISOString().slice(0, 10);
            return { ...cliente, birthday: dataFormatada };
        });

        res.status(200).send(clientesFormatados);
    } catch (err) {
        res.status(500).send(err.message);
    }
}


export async function getIdCustomers(req, res) {
    const { id } = req.params

    try {
        const cliente = await db.query(
            `SELECT * FROM customers WHERE id = $1;`,
            [id]
        );

        if (!cliente.rows[0]) {
            return res.sendStatus(404)
        }

        const clienteFormatado = cliente.rows.map(client => {
            const dataFormatada = client.birthday.toISOString().slice(0, 10);
            return { ...client, birthday: dataFormatada };
        })



        res.status(200).send(clienteFormatado[0]);

    } catch (err) {
        res.status(500).send(err.message)
    }
}


// --------- rota post --------


export async function postCustomers(req, res) {
    const { name, phone, cpf, birthday } = req.body

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
    const { id } = req.params;
    const { name, phone, cpf, birthday } = req.body;

    try {
        const rightCpf = await db.query(
            `SELECT cpf FROM customers WHERE id = $1;`,
            [id]
        );
        console.log(rightCpf.rows[0])
        console.log(cpf)

        if (cpf !== rightCpf.rows[0].cpf) return (res.sendStatus(409))


        const cliente = await db.query(
            `UPDATE customers SET name = $1, phone = $2, birthday = $3 WHERE id = $4 AND cpf = $5;`,
            [name, phone, birthday, id, cpf]
        )

        res.status(200).send(cliente.rows[0]);

    } catch (err) {
        res.status(500).send(err.message)
    }
}

