import React from 'react';

// __________Material UI ___________

import { AppBar, Toolbar,Typography ,styled}from '@mui/material';

// _______________For Routing ___________

import {NavLink} from "react-router-dom";


// ____________Typogaphy Style of Material Ui _____________
const Header=styled(AppBar)`
background:#111111;
`

const Tab=styled(Typography)`
font-size:20px;
margin-right:20px;


`
const NavBar = () => {
  return (
   
     <Header position='static'>
        <Toolbar>
            <NavLink to="/">Movies Flex</NavLink>
            <NavLink to="/all">All Movies</NavLink>
            <NavLink to="add">Add Movies</NavLink>
        </Toolbar>
     </Header>
    
  )
}

export default NavBar
