import React,{useState} from 'react'
import List from './List'
import './index.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


function App() {


    let[present_state,update_state]=useState("")
    let[item,update_item]=useState([])


    let input_event=(event)=>{
        update_state(event.target.value)

    }

    let save_item=(event)=>{

        event.preventDefault()

        update_item((olditem)=>{

            return[...olditem,present_state]

        })
    }

    let delete_item=(id)=>{

        update_item((olditem)=>{

            return olditem.filter((arrayelement,index)=>{

                return index!=id
            })



        })

        update_state("")




    }




    return (
        <div className='main-div'>
        <div className='center-div'>
        <br></br>
        <h1>To do List</h1>
        <br></br>
        <input type='text' placeholder='Enter Item' onChange={input_event}/>
        <Button onClick={save_item} variant="contained" className='newbtn'><AddIcon/></Button>

        <ol>
        {item.map((itemval,index)=>{

            return(

                <List text={itemval} id={index} key={index} onselect={delete_item}></List>



            )

        })}

       

        </ol>

        
        </div>
            
        </div>
    )
}

export default App
