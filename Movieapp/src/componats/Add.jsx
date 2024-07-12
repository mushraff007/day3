import React, { useState } from 'react'   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = () => {
  //const [count,setCount]=useState(0);
 // let valueAdd=()=>{
 //   setCount(count+1)
 // }
const[form,setForm]=useState(
{
  movieName:'',
  movieDirector:'',
  movieYear:'',
  category:''
}
)
function valueAdd(){console.log(form)}
function valueCap(e){
setForm({...form,[e.target.name]:e.target.value})
}
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="movieName" variant="outlined" name="movieName"onChange={valueCap} />
    <TextField id="filled-basic" label="movieDirector" variant="outlined"name="ovieDirector" onChange={valueCap}/>
    <TextField id="standard-basic" label="movieYear" variant="outlined"name="ovieYear" onChange={valueCap}/>
    <TextField id="standard-basic" label="category" variant="outlined" name="category"onChange={valueCap}/><br />
    <Button variant="outlined"color='success' onClick={valueAdd}>Done</Button><br />
    {/* <small>count is {count}</small> */}

  </Box>
  )
}

export default Add
