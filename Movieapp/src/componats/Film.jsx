import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

// const rows = [
//     {
//         name:"1. The Shawshank Redemption",
//         poster:"https://m.media-amazon.com/images/I/91syHT466TL.jpg",
//         year:2005,
//         dir:"afnas",
//         rating:9.8
//     },
//     {
//         name:"2. The Godfather",
//         poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnevr1YHGs2LGg4I5x1yyKiQJhUatBBcczg&s",
//         year:1995,
//         dir:"alby",
//         rating:9.5
//     },
//     {
//         name:"3. The Dark Knight",
//         poster:"https://m.media-amazon.com/images/I/71GTnYW5ejL._AC_UF1000,1000_QL80_.jpg",
//         year:1985,
//         dir:"ambadi",
//         rating:8
//     }
// ];

function Film() {
  const [rows,setRows] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4001/movies').then((res)=>{
      console.log(res);
      setRows(res.data);
    })
  })
  return (
    <div>
       
        <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 ,backgroundColor:'grey'}} aria-label="simple table">
      <TableHead> 
        <TableRow sx={{ '& td, & th' : { border: 2 } }}> 
          <TableCell><b>MOVIE_NAME</b></TableCell>
          <TableCell align="right"><b>DIRECTOR</b></TableCell>
          <TableCell align="right"><b>CATEGORY</b></TableCell>
          <TableCell align="right"><b>YEAR</b></TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ ' & td , & th ': { border : 2} }}
          >
            <TableCell component="th" scope="row">
              {row.movieName}
            </TableCell>
            <TableCell align="right">{row.movieDirector}</TableCell>
            <TableCell align="right">{row.movieYear}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer></div>
  )
}

export default Film