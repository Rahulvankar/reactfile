import React, { useEffect } from 'react'
import './Node.css'

import deleteIcon from '../../assets/delete.png'
function Node(props) {

  
  const formatDate = (value) => {


    if (!value) return ""
    const date = new Date(value);

    const monthName = [
      'jan', 'Fab', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthName[date.getMonth()]

    return `${hrs}:${min}  ${amPm} ${day} ${month}`
  }
 

  return (
    <div className='note' style={{ backgroundColor: props.note.color }}>
      <textarea className='note_text' defaultValue={props.note.text}></textarea>
      <div className='note_footer'>
        <p>{formatDate(props.note.time)}</p>
        <img src={deleteIcon} alt='DELETE' onClick={() => props.deleteNote(props.note.id)} />
      </div>
    </div>
  )
}

export default Node