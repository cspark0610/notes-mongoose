//requerir mongoose para poder armar el schema y el modelo

const mongoose = require('mongoose' )
const notesSchema = {
    title: String,
    content: String
}

const Note = mongoose.model('Note', notesSchema);

module.exports = Note;