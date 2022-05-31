import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import apiCall from "../api/api";
import axios from "axios";

export default function CreateForm({setCurrentPage,setUserCreated}){


    const [errorMessage,setErrorMessage] = useState("");
    
    const submitForm = (e) => {
        setErrorMessage("");
        e.preventDefault();
        if(e.target.password.value !== e.target.confirmPassword.value){
            setErrorMessage("Passwords do not match")
            return;
        }
        
             apiCall("createUser",'add',{userName : e.target.userName.value, password : e.target.password.value}).then(handleResults);
        



    }

    const handleResults = (r) => {
 
      if(r.wasError){
        setErrorMessage(r.apiErrorMsg.response.data)
        return;
      }

      setUserCreated(true);
      setCurrentPage('login');
    }



    return (

        <Container component="main" maxWidth="md" sx={{mb: 4}}>
            <Paper
                variant="outlined"
                sx={{
                    my: {xs: 3, md: 6}, p: {xs: 2, md: 3},
                    textAlign: "center",
                    boxShadow: 20
                }}>
                    <form onSubmit={submitForm}>  
                <Typography
                    variant="h6"
                    sx={{textAlign: 'center', mb: 1}}
                >
             Create your Incubator Account
                </Typography>
                <br/>
                <TextField
                    required
                    variant="outlined"
                    label="User Name"
                    id="userName"
            
                /><br/><br/>
                    <TextField
                    required
                    id="password"
                    error = {errorMessage === "Passwords do not match"}
                    variant="outlined"
                    label="Password"
                    type={"password"}
            
                /><br/><br/>
                    <TextField
                    required
                    variant="outlined"
                    error = {errorMessage === "Passwords do not match"}
                    id="confirmPassword"
                    label="Confirm"
                    type={"password"}
            
                /><br/>


                <Typography color = 'error'>{errorMessage}</Typography>
                <Button
                    variant="contained"
                    sx={{mt: 1}}
                    type={"submit"}
            
                >
                    Create 
                </Button><br/>
                </form>
            </Paper>
        </Container>

    )
}