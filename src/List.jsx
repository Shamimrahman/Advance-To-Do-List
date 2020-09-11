import React,{useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';


function List(props) {

    let [clickline,update_line]=useState(false)

    let cutit=()=>{

        update_line(true)
    }

    return (
        <div className='todo-list-style'>
        <span onClick={cutit}> <DeleteIcon className='dlticon'/> </span>

        <li style={{textDecoration: clickline ?'line-through': 'none'}}>{props.text}</li>

      
      
        
        </div>
    )
}

export default List
