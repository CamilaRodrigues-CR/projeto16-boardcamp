import { db } from "../database/conectionDataBase.js";


// ------------- rotas get ---------------------

export async function getRentals(req, res){
    
    try{
        const rental = await db.query( "SELECT * FROM rentals;");
        const customer = await db.query( "SELECT * FROM rentals;");
        const game = await db.query( "SELECT * FROM rentals;");

        const resultRental = rental.rows.map(r => {
            const c = [customer.id ,customer.name]
            const g = [game.id ,game.name]
            
            return { ...resultRental, c , g};
        })
        
        res.status(200).send(resultRental[0]);

    } catch (err) {
        res.status(500).send(err.message);
    }

}
/*    customer: {
     id: 1,
     name: 'João Alfredo'
    },
    game: {
      id: 1,
      name: 'Banco Imobiliário'
   */



//---------------------------- ROTA DELETE -------------


export async function deleteRentals(req, res){
    const {id} = req.params
    
        try{
            const existId = await db.query("SELECT * FROM rentals WHERE id = $1", [id] )

            if (!existId.rows[0]) {
                return (res.sendStatus(404))
            }
       
            await db.query("DELETE FROM rentals WHERE id = $1" , [id])

            res.sendStatus(200)


        } catch (err) {
            res.status(500).send(err.message);
        }

}