import React from "react";


// -------------DB IMPORT-------------

import {addUser} from "../service/api"
// _______Here now we state useHooks _____

import { useState } from "react";

// _________This is material Ui _________

import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";

import { useNavigate } from "react-router-dom";



const Container = styled(FormGroup)`
  width: 50%;
  margin: 9% auto 0 auto;

  /* ______For child component handle through parent ___ */

  & > div {
    margin-top: 20px;
  }
`;

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  // ===================================
  // _______ React Hooks portion ________

  const [user, setUser] = useState(initialValue);

  const navigate= useNavigate();

  const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})

  }
  const adduserDetails=async()=>{
    await addUser(user);
    navigate('/all');
  }

  //  ===================================
  return (
    <Container>
      <Typography variant="h5">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e) }name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="phone"  />
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={()=>adduserDetails()}>Edit User</Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
