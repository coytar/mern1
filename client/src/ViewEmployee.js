import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';

function ViewEmployee() {
  const [err, setErr] = useState(null);
  const [employee, setEmployee] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/${id}`)
      .then((res) => {
        setEmployee(res.data);
        setErr(null);
      })
      .catch((err) => {
        console.log('Error from Employee', err);
        setErr(err);
      });
  }, [id]);

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
          Employee View
        </Typography>
        <Card>
          <Grid container direction="column" justifyContent="center" spacing={3}>
            <Grid item xs={12} md={8} lg={6}>
              Name: {employee.name}
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              Position: {employee.position}
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              Level: {employee.level}
            </Grid>
          </Grid>
        </Card>
        <Button variant='contained' onClick={() => navigate('/')}>Go Back</Button>
      </Container>
    </Box>
  );
}

export default ViewEmployee;

