import React from 'react';

// __________Material UI ___________

import { AppBar, Toolbar,Typography ,styled}from '@mui/material';

// _______________For Routing ___________

import {NavLink} from "react-router-dom";


// ____________Typogaphy Style of Material Ui _____________
const Header=styled(AppBar)`
background:#111111;
`

const Tab=styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none;

`
const NavBar = () => {
  return (
   
     <Header position='static'>
        <Toolbar>
            <Tab to="/">Movies Flex</Tab>
            <Tab to="/all">All Movies</Tab>
            <Tab to="add">Add Movies</Tab>
        </Toolbar>
     </Header>
    
  )
}

export default NavBar
