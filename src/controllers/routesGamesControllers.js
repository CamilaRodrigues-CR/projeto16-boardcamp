import { db } from "../database/conectionDataBase.js";

// -------------  rotas Get -----------------------------

export async function getGames(req, res) {
    try{
       const games = await db.query(`SELECT * FROM games;`);
       res.status(200).send(games.rows)

    } catch (err) {
        res.status(500).send(err.message)
    }
}


// -------------  rotas Post -----------------------------


export async function postGames(req, res) {
    const {name, image, stockTotal, pricePerDay} = req.body;

    try{
        const existGame = await db.query(`SELECT * FROM games WHERE name LIKE ${'name'};`)
        if (existGame) return (res.status(409).send("Este jogo já existe em nosso sistema!"))
       
        const game = await db.query(`INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4);`, [name, image, stockTotal, pricePerDay])

        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }   
}
