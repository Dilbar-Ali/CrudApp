import React from 'react'
import { AppBar, Toolbar,Typography ,styled}from '@mui/material';
const Header=styled(AppBar)`
background:#111111;
`

const Tab=styled(Typography)`
font-size:20px;
margin-right:20px;

`
const NavBar = () => {
  return (
   
     <Header>
        <Toolbar>
            <Tab>Movies Flex</Tab>
            <Tab>All Movies</Tab>
            <Tab>Add Movies</Tab>
        </Toolbar>
     </Header>
    
  )
}

export default NavBar
