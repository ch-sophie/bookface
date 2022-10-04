import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
 

const theme = createTheme();

export default function Create() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
  
    const navigate = useNavigate();
    
    // update the state properties
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
 
    // handle submission
    async function handleSubmit(e) {
        e.preventDefault();
    
        // when a post request is sent to the create url, it will add a new record to the database
        const newItem = { ...form };
 
        await fetch("http://localhost:3001/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            
            body: JSON.stringify(newItem),
        })
        
        .catch(error => {
            window.alert(error);
            return;
        });
        
        setForm({ firstName: "", lastName: "", email: "", password: "" });
        
        navigate("/signintest");
    }
    
    return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            value={form.firstName}
                            onChange={(e) => updateForm({firstName: e.target.value})}
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="last name"
                            name="lastName"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            autoFocus
                            value={form.lastName}
                            onChange={(e) => updateForm({lastName: e.target.value})}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                            autoComplete="email"
                            name="email"
                            required
                            fullWidth
                            id="email"
                            label="Email address"
                            autoFocus
                            value={form.email}
                            onChange={(e) => updateForm({email: e.target.value})}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                            autoComplete="new-password"
                            name="password"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            autoFocus
                            value={form.password}
                            onChange={(e) => updateForm({password: e.target.value})}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                            control={<Checkbox required value="allowExtraEmails" color="primary" />}
                            label="By clicking this checkbox, I accept that the Web Dev will sell my organs and will get rich."
                            />
                        </Grid>
                        
                    </Grid>
                    
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    value="Register"
                    >
                    Sign Up
                    </Button>
                    
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to='/signintest'>
                            Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
    );
}