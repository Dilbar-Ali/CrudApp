import React from "react";

// -------------DB IMPORT-------------

import { getUser,editUser } from "../service/api";
// _______Here now we state useHooks _____

import { useState, useEffect } from "react";

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

import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 9% auto 0 auto;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  padding :20px;

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

  const navigate = useNavigate();

  const {id}=useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await getUser(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const adduserDetails = async() => {
    await editUser(user,id);
    navigate("/all");
  };

  //  ===================================
  return (
    <Container>
      <Typography variant="h5">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
      </FormControl>
      <FormControl>
        <InputLabel>Movie Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={() => adduserDetails()}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
