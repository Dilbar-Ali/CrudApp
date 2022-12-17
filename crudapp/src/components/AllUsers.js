import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";
import React from "react";

const AllUsers = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
      </TableBody>
    </Table>
  );
};

export default AllUsers;
