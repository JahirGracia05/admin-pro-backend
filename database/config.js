const mongoose = require('mongoose');
require('dotenv').config();


const dbConnection = async() => {

    try {
        // await mongoose.connect('mongodb+srv://MEAN_USER:gqXKTeun5WpB4Gxn@cluster0.m5jajan.mongodb.net/hospitaldb', {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true
        // });

        await mongoose.connect(process.env.DB_CNN);

        console.log('DB Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }
}


module.exports = {
    dbConnection
}