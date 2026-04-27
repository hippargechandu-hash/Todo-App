// import React,{useState} from 'react'
// import Todos from './Components/Todos/Todos'
//   import Box from '@mui/material/Box'
//   import Add from './Components/Todos/Add'
// function App() {

//   const [todo,setTodo] = useState([
//     "Hi Good morning",
//     "Hi Good After",
//     "Hi Good Evening",
//     "Hi Good Night",

//   ])
      
//      const DeleteTodo =(id) =>{
//       const filterdata = todo.filter((item,index)=>{
//         if(index===id) return false
//          return true
//       })
//       setTodo(filterdata)
//      }
//    const result =todo.map((item,index)=>{
       
//        return <Todos item={item} index={index}
//       DeleteTodo={DeleteTodo}/>
//    })

//    const AddtoText = ()=>{
//     if(input.trim===""){
//         return
//         alert("please enter value")
//     }
//    setText([...text,todo])
//   }

//   return (
//     <>
    
//    <Add 
   
//    />
//     <Box sx={{display:"flex",
//     justifyContent:"space-between",
//     flexDirection:"column",
  
//     }}>
//          {todo.length===0 ? "no data":result}
//     </Box>
//     </>
//   )
// }

// export default App
















import React from 'react'
import Todos from './Components/Todos/Todos'

function App() {
  return (
    <div>
      <Todos/>
    </div>
  )
}

export default App
