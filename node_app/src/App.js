import React, { useEffect, useState } from 'react'

import NoteContainer from './Componentes/NoteContaner/NoteContainer';
import Sidebar from './Componentes/Sidebar/Sidebar';
import './App.css';
function App() {

  const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || []);

  // const [notes, setNotes] = useState([])

  const addNote = (color) => {
    const tempNotes = [...notes]

    tempNotes.push({
      id:Date.now() + "" +Math.floor(Math.random()*78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };
  const deleteNote=(id)=>{
   const tempNotes = [...notes]

   const index=tempNotes.find(item=>item.id===id);

   if(index<0)return
   tempNotes.splice(index,1)

   setNotes(tempNotes)
  }
  useEffect(()=>{
    localStorage.setItem('notes-app',JSON.stringify(notes))
  },[notes])
  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
