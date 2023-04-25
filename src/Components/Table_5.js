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


export default function CustomizedTables5() {
    const [users, setUsers] = useState([]);
    const baseURL = "https://oru-backend.onrender.com/gettable5"
    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setUsers(response.data.data);
        console.log(response.data.data);
      });
    }, []);
  return (
    <div className='mx-[20rem] glass p-8'>
      <div  className='text-white mb-4'>Type 5 :- "Show the data of top 10 cities which have the highest number of users and their average income”.</div>
    <div className="mx-[1rem]">
    <TableContainer component={Paper} className="">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Count</StyledTableCell>
            <StyledTableCell align="center">Avg.Income</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">{row.city}</StyledTableCell>
              <StyledTableCell align="center">{row.count}</StyledTableCell>
              <StyledTableCell align="center">{row.avgIncome}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}
