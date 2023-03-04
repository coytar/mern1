import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Card, Typography } from '@mui/material';
import { Container } from '@mui/system';

function Employees() {
  const [err, setErr] = useState(null);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const viewItem = (id) => {
    navigate(`/${id}`)
  }

  useEffect(() => {
    axios
      .get('http://localhost:8082/')
      .then((res) => {
        setEmployees(res.data);
        setErr(null);
      })
      .catch((err) => {
        console.log('Error from Employees', err);
        setErr(err);
      });
  }, []);

  if (err) {
    return (
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: 'lightblue'
        }}
      >
        <Container>
          <Typography variant="h4">
            {err.message}
          </Typography>
        </Container>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: 'lightblue'
      }}
    >
      <Container>
        <Typography variant="h4">
          Employees List
        </Typography>
        <Card>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Position</TableCell>
                  <TableCell align="right">Level</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((emp) => (
                  <TableRow
                    key={emp._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    onClick={() => viewItem(emp._id)}
                  >
                    <TableCell component="th" scope="row">
                      {emp._id}
                    </TableCell>
                    <TableCell align="right">{emp.name}</TableCell>
                    <TableCell align="right">{emp.position}</TableCell>
                    <TableCell align="right">{emp.level}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </Box>
  );
}

export default Employees;