import React from 'react';
import {useState} from 'react';
import axios from 'axios';

function CreateNote(){
    //tengo q trackear dos fields de este form el title y el content
    //entonces el estado inicial debe ser '' para ambos
    const[ form, setForm] = useState({
        title:'',
        content:''
    })

    function handleChange(event){
        //tengo que desestructurar el objeto event.target... que llega con name , value , placeholder etc
       // console.log(event.target);//sale toda el objeto tag

        const {name, value} = event.target
        
        setForm(prevInput =>{
            return {
                ...prevInput,
                [name]:value
            }
        });
        //si cambio por ejemplo la prop name'title' voy a agregar  from.title como value a los previos inputs
    }

    function handleClick(event){
        event.preventDefault();
        console.log(form);
       
        //TENGO QUE IR A LA RUTA http://localhost:3001/create
        const newNote = {
            title: form.title, 
            content: form.content
        }
        axios.post('http://localhost:3001/create',newNote);

        //para vaciar el form una vez q hago click
        setForm({title:'',content:''})

    }
    
    return(
        <div className='container'>
            <h1>Create Note Page</h1>
            <form>
                <div className="form-group">
                    <input onChange={handleChange} name="title" value={form.title} autoComplete="off" placeholder="note title" className="form-control"></input>
                </div>
                <div className="form-group">    
                    <textarea onChange={handleChange} name="content" value={form.content} autoComplete="off" placeholder="note content" className="form-control"></textarea>
                </div>
                <div className="form-group">    
                    <button onClick={handleClick} className="btn btn-lg btn-info">ADD NOTE</button>
                </div>
            </form>

        </div>
    )
}
export default CreateNote