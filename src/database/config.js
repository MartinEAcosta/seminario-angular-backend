const mongoose = require('mongoose')

const dbConnection = async( ) => {

    try{

        await mongoose.connect(process.env.DB_CON);
        console.log('Hemos sido conectados con éxito ;) !');

    }
    catch( error ){
        console.log('Ha surgido un error al intentar conectarnos con la DB.');
        console.log(error);
    }

} 

module.exports = {
    dbConnection
}





