import React,{ useEffect, useState } from 'react';


function Notes(){
    //aca tengo que hacer el fetch del pedido get que hice desde el bacn-end con fetch o axios
    //voy a ir recibiendo un array de obj
    const [notes, setNotes] = useState([{
        title :'',
        content :''
    }])
    useEffect(()=>{
        // EL FECTH SE HACE DESDE EL PUERTO DEL SERVER EL 3001
        fetch('http://localhost:3001/notes')
        .then(res => res.json())
        .then(jsonResponse => setNotes(jsonResponse))
    })
    //finalmente tengo q renderizar una vez q trackie y setie notes=[{}]
    return(
        <div className='container'>
            <h1>Notes</h1>
            {notes.map(note=>
                <div key ={note._id}>
                    <h4>{note.title}</h4> 
                    <p>{note.content}</p>   
                 </div>
                
            )}

        </div>
    )
}

export default Notes