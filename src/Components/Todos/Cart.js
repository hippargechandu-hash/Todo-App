

import React from 'react'
import { Box, colors, Stack ,Button, Typography} from '@mui/material'
import Edit from './Edit'

function Cart({ item ,index,edit,Deletedata}) {

    // const [isedit,setisEdit] = React.useState(false)
  return (
    <Box
      sx={{
        border: '2px solid',
        backgroundColor :"gray",
        borderColor: 'blue',
        padding: 2,
        display:"flex",
        justifyContent:"space-between",
        color:"white",
        // font:"1.9rem",
        margin:"10px",
        
        
      }}
    >
       <Typography 
       sx={{
        fontSize:"2.4rem",
        fontWeight:"bold",
       }}
       >
            {item}
       </Typography>
      

    <Box 
      sx={{ display: 'flex', gap: 2 }}>
  <Button
    sx={{
      backgroundColor: 'yellow',
       fontSize:"2.4rem",
      color: 'black',
        borderRadius:"15px",
    }}

    onClick={()=>{
      edit(index)
    }}
    //  onClick={()=>edit(index)}
       >
    Edit
  </Button>

     <Button
    sx={{
      backgroundColor: 'red',
      color: 'white',
       fontSize:"2.4rem",
       borderRadius:"15px",
    }}
    onClick={()=>Deletedata(index)}
        >
    Delete
    </Button>
    </Box>
    </Box>
  )
}

export default Cart
