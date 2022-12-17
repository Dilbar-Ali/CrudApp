import React from "react";

// _______Here now we state useHooks _____

import { FormControl, FormGroup, InputLabel ,Input ,Typography , Button, styled} from "@mui/material";


const Container =styled(FormGroup)`

width:50%;
margin:9% auto 0 auto;

 /* ______For child component handle through parent ___ */

  & >div{
    margin-top:20px;
  }



`


const AddUser = () => {
  return (
    <Container>

    <Typography variant="h5">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input/>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input/>
      </FormControl>

      <FormControl>
      <Button variant="contained">Add User</Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
