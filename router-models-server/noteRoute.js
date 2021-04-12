// armo la ruta de express para el noteModel

const express = require('express')
const router = express.Router()
const Note = require('./noteModel')

//desde aca hago la conexion con el axios.post
router.route('/create').post((req,res)=>{
    const title =req.body.title;
    const content =req.body.content;
    const newNote = new Note({title: title, content:content})
    console.log(newNote);

    newNote.save() //metodo mongoose
});

//AHORA DESDE EL BACK END HAGO GET REQUEST A './notes' y voy a atajar ese pedido en el
// front desde el componente Notes
router.route('/notes').get((req,res)=>{
    Note.find()
        .then(foundNote => res.json(foundNote))
});


module.exports = router;