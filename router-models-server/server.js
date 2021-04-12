const express = require('express')
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');

//Express doesn’t come with anything to enable cross-domain communication
//we need cors middleware to enable cross-domain comminication,
app.use(cors());

app.use(express.json()); //para parsear los datos del front-end a la db de mongoose

//connection to db mongoose
//DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
mongoose.connect('mongodb+srv://carlos:plataforma5@cluster0.t7zoz.mongodb.net/notesDB',{ useNewUrlParser: true })


//requerir la route del front haciendo un post en la db
app.use('/',require('./noteRoute'))

//app listen en un puerto distinto al 3000 ya q esta ocupado por el front
//HAY Q ESPEFICIFAR ESTE PUERTO 3001 COMO PROXY KEY EN EL PACKAGE.JSON DEL FRONT!!

app.listen(3001, ()=>{
    console.log('express server listening on port 3001');
})
