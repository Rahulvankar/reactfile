import React from 'react'
import Node from '../Note/Node';
import './NoteContaner.css';
function NoteContainer(props) {

    const reverArray=(arr)=>{
        const array =[]
        for(let i=arr.length -1; i>=0;--i){
            array.push(arr[i])
        }
        return array

    }

    const notes=reverArray(props.notes)

    return (
        <div className='note-container'>
            <h2>Notes</h2>
            <div className='note-container_notes custom-scroll' >
                {notes ?.length>0 ?
                    notes.map((item,index)=> <Node key={item.id}
                    deleteNote={props.deleteNote}
                    note={item}/>):<h2>No Notes present</h2>
                }
               
            </div>
        </div >
    )
}

export default NoteContainer