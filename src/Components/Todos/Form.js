




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
    // height:"100px",
    // display:"flex",
    // justifyContent:"center"
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








// import React, { useState } from 'react'
// import { Grid, TextField, Button } from '@mui/material'

// function Form({ add }) {
//   const [task, setTask] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (task.trim() === "") {
//       alert("Please Enter task")
//       return
//     }

//     add(task)      // send to parent
//     setTask("")    // clear input
//   }

//   return (
//     <Grid
//       container
//       component="form"
//       spacing={2}
//       onSubmit={handleSubmit}
//       sx={{
//         border: "2px solid black",
//         padding: 2,
//         borderRadius: 2,
//         width: "700px",
//         margin: "20px auto"
//       }}
//     >
//       {/* 10 cols */}
//       <Grid item xs={10}>
//         <TextField
//           fullWidth
//           label="Enter task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//       </Grid>

//       {/* 2 cols */}
//       <Grid item xs={2}>
//         <Button
//           fullWidth
//           type="submit"
//           variant="contained"
//         >
//           ADD
//         </Button>
//       </Grid>
//     </Grid>
//   )
// }

// export default Form