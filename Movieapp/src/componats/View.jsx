import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
const View = () => {
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nav bar
          </Typography>
          <Link to={"/"}><Button sx = {{color:'white',backgroundColor:'black'}}>view</Button></Link>
          <Link to={"/add"}><Button sx = {{color:'white',backgroundColor:'black'}}>add</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default View