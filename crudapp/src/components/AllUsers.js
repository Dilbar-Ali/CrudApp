import { useEffect, useState } from "react";

import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  styled
} from "@mui/material";
import React from "react";

import { getUsers } from "../service/api";


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

  return (
    <Table>
      <TableHead>
        <Thead>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
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
          </TBody>
        ))
        }
      </TableBody>
    </Table>
  );
};

export default AllUsers;
