import { useEffect, useState } from "react";
import "./allusers.css";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  styled,
  Button
} from "@mui/material";
import React from "react";

import { getUsers , deleteUser} from "../service/api";
import { Link } from "react-router-dom";


const Thead=styled(TableRow)`
background:#000;
& >th{
  color:#fff;
  font-size:20px;
}
`
const TBody=styled(TableRow)`
& >td{
  font-size:20px;
}
`
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  const deleteUserData=async(id)=>{
await deleteUser(id);
getUsersDetails();
  }

  return (
    <Table className="table">
      <TableHead>
        <Thead>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Movies</TableCell>
          <TableCell>Action</TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {
          users.map(user => ( 
          <TBody>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="contained" style={{marginRight:10}}component={Link} to={`/edit/${user.id}`} ><SaveAsIcon/></Button>
              <Button variant="contained" color="secondary"  onClick={()=>deleteUserData(user.id)}><DeleteIcon/></Button>
            </TableCell>
          </TBody>
        ))
        }
      </TableBody>
    </Table>
  );
};

export default AllUsers;
