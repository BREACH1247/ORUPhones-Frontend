import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 18,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
}));

export default function CustomizedTables2() {
    const [users, setUsers] = useState([]);
    const baseURL = "https://oru-backend.onrender.com/gettable2"
    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setUsers(response.data.data);
      });
    }, []);
  return (
    <div className='mx-[20rem] glass p-8'>
      <div  className='text-white mb-4'>Type 2 :- "Male Users which have phone price greater than 10,000.”.</div>
    <div className="mx-[1rem]">
    <TableContainer component={Paper} className="">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">First_Name</StyledTableCell>
            <StyledTableCell align="center">last_name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Income</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Car</StyledTableCell>
            <StyledTableCell align="center">Quote</StyledTableCell>
            <StyledTableCell align="center">phone_price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.first_name}</StyledTableCell>
              <StyledTableCell align="center">{row.last_name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.gender}</StyledTableCell>
              <StyledTableCell align="center">{row.income}</StyledTableCell>
              <StyledTableCell align="center">{row.city}</StyledTableCell>
              <StyledTableCell align="center">{row.car}</StyledTableCell>
              <StyledTableCell align="center">{row.quote}</StyledTableCell>
              <StyledTableCell align="center">{row.phone_price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}
