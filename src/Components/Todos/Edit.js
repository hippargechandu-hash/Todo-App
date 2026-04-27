


 import React, { useState } from 'react'
import { Box ,Grid,TextField,Button, Typography} from '@mui/material'

function Edit({editdata,editUpdated}) {

 
  const [task,setTask] = useState(editdata)
   
  const  updated =(e)=>{
     e.preventDefault()
     editUpdated (task)
    }

  return (
      
    <>
      container
     
    <Box

     component="form"
      onSubmit={updated}
     sx={{
      width:"100%",
      height:"100%",
      border:"2px solid",
      backgroundColor:"whitesmoke",
      opacity:"1",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      position:"absolute",
      top:'0px',
      left:"0px",
      }}>
      
      
      <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        flexDirection:'column',
        gap:"25px",
        backgroundColor:"white",
        height:"450px",
        width:"40%",
        borderRadius:"25px",
        }}>
        <Typography
        sx={{fontSize:"25px",}}
        >
          Edit
          </Typography>
       
        <TextField
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        sx={{width:"90%",margin:"10px",border:"2px solid black",borderRadius:"10px",}}
        ></TextField>
       
        <Button 
         type='submit'
         variant='contained'
           sx={{fontSize:"25px",}}>
          Updated
          </Button>
       
        <Button sx={{fontSize:"25px",}}>
          Cancel
          </Button>
      </Box>
    </Box>
    </>
  )
}

export default Edit

