import React from 'react';

// __________Material UI ___________

import { AppBar, Toolbar,Typography ,styled}from '@mui/material';

// _______________For Routing ___________




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
            <Tab>Movies Flex</Tab>
            <Tab>All Movies</Tab>
            <Tab>Add Movies</Tab>
        </Toolbar>
     </Header>
    
  )
}

export default NavBar
