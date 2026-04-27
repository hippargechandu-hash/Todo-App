




import React, { useState } from 'react'
import  { Grid,TextField,Button,Box } from '@mui/material'
function Form({add}) {
    const[task,setTask] = useState("")
  
const AddtoText = (e)=>{
  e.preventDefault()
 if (task.trim() === "") {
  alert("please enter text")
  
}
 add(task)
 setTask("")
}
  return(
  <Box>
 <Grid
  container
  component="form"
  spacing={2}
  onSubmit={AddtoText}
  sx={{
    border: "2px solid black",
    padding: '10px',
    borderRadius: '10px',
   
  }}>
  
  <Grid  
  xs={12} sm={2}
    size={{sx:12, sm:10}}
  >
    <TextField
     value ={task}
       onChange={(e)=>setTask(e.target.value)} 
      fullWidth
      label="Enter task"
      variant='outlined'
      fullWidth
    />
  </Grid>

  <Grid size={{sx:12, sm:2}}
   xs={12} sm={2}
  sx={{display:"flex",
    justifyContent:"center"
  
  }}>
    <Button
      fullWidth
      variant="contained"  
       type='submit'
    >
      ADD
    </Button>

  </Grid>
</Grid>
  </Box>

  )
}


export default Form








