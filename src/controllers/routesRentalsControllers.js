import { db } from "../database/conectionDataBase.js";


// ------------- rotas get ---------------------

export async function getRentals(req, res){
    
    try{
        const rental = await db.query( "SELECT rentals * FROM rentals;");
        const customer = await db.query( "SELECT customers * FROM rentals;")
        const game = await db.query( "SELECT games * FROM rentals;")
        
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