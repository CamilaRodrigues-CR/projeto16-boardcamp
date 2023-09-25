import { db } from "../database/conectionDataBase.js";


// ------------- rotas get ---------------------

export async function getRentals(req, res){
    
    try{
        const rental = await db.query( "SELECT rentals, customer_game FROM rentals JOIN customer_game ON 'rentals.customerId'= customer_game.customer_id;")
        
        res.status(200).send(rental);

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