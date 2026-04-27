
import React, { useState } from 'react'
import Cart from './Cart'
import Form from './Form';
import { Box, Typography } from '@mui/material';
import Edit from './Edit';


function Todos() {
   const[todo,setTodo] = useState([
    "Good morning",
    "Good Afternoon",
    "Good Evening",
     "Good Night"
   ])
   
    const[editText,setEditText] = useState(-1) 

     function  Deletedata (p){
   let filterdata = todo.filter((item,index)=>{
      if(p==index)
        return false
      
      return true
   })
    //  setTodo()
    setTodo(filterdata)
    }

   function Add(task) {
     setTodo((pre) => {
    return [...pre, task]
       })
     }
    
        const edit=(i)=>{
          setEditText(i)
          // console.log(i)
       }

      const editUpdated =(task)=>{
        let arr = todo.map((item,index)=>{
          if(index===editText){
              return task
          }
           return item
        })
        setTodo(arr)
        setEditText(-1)
      }

     
      const result = todo.map((item,index)=>{
      return(
          <Cart item={item}
          index={index}
          Deletedata={Deletedata}
          edit = {edit}
          edit={edit}
          // Add = {Add}
             key={index}/>
      )
     
     })
  return (
    <>
   
   <Typography
     sx={{textAlign:"center",
      fontSize:"2.2rem",
      m:2,
     }}
     >
     Add to todo
   </Typography>
    <Form add={Add} />


    <Box 
      sx={{display:"flex",
        justifyContent:"space-evenly",
        flexDirection:"column",
        borderRadius:"10px",
        border: 'solid 5px black',
        padding:"5px",
        width:"100%",
        // marginLeft:"80px",
        position:"relative",
        top:"0px",left:"0px",
        zIndex:"10px"


      }}
    >
    {todo.length == 0 ? "please no data" :result}
    
    </Box>
    {/* <Edit  onClick={()=>setEditText(edit)}/> */}

        
        {/* <Edit  itemData ={todo[editText]} 
        edititem={editUpdated}/> */}
           {/* {editText!= -1 ? <Edit  editdata={todo [editText]}/> : ""} */}
           {editText !== -1 ? (
  <Edit editdata={todo[editText]}  editUpdated ={editUpdated } />
) : (
  ""
)}
     </>
  )
}

export default Todos
